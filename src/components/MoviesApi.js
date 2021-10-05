import React from 'react'
import { useEffect, useState, useContext } from 'react';
import Movie from './Movie';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import { ThemeContext } from '../Context/ThemeContext';

const MoviesApi = (props) => {
    const [status, setstatus] = useState(true);
    const [page, setPage] = useState(1);
    const [Tpage, setTpage] = useState(0);
    const [movies, setmovies] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    //Theme
    const { theme } = useContext(ThemeContext);
    //Theme Logic
    let th_title = {color : "white"};

    if(theme === "light"){
        th_title = {color : "black"};
    }
    if(theme === "dark"){
        th_title = {color : "white"};
    }

    let cat;
    if(props.category === "Movies"){
        cat = "/movie/popular"
    }
    if(props.category === "Series"){
        cat = "/tv/popular"
    }
    //https://api.themoviedb.org/3/movie/popular?api_key=0a803c18aba60c067431d8a7cb9a7cd4&language=en-US&page=1
    const api_key = "0a803c18aba60c067431d8a7cb9a7cd4";
    const featured_api = `https://api.themoviedb.org/3${cat}?api_key=${api_key}&language=en-US&page=${page}`;


    const fetchMovies = async () => {
        setisLoading(true);
        const movieResp = await fetch(featured_api);
        const moviesParsed = await movieResp.json();
        console.log(moviesParsed);
        if(moviesParsed.errors){
            setstatus(false);
        }
        else{
            if(movies === []){
                setmovies(moviesParsed.results);
                setTpage(moviesParsed.total_pages);
                console.log(movies);
            }
            else{
                setmovies(movies.concat(moviesParsed.results));
                setTpage(moviesParsed.total_pages);
                console.log(movies);
            }
        }
        setTimeout(setisLoading(false), 1000);
        

    }

    const fetchMore = () => {
        setPage(page+1);
        console.log("Infite fired");
        fetchMovies();
    }

    useEffect(() => {
        fetchMovies();
    },[])

    return (
        <div>
            {(status)?(
                <div>
                    <InfiniteScroll
                        dataLength={movies.length}
                        next={fetchMore}
                        hasMore={page < Tpage}
                        loader= {<Loading />}
                    >
                        <div className="container">
                            <div style={{display: 'flex', justifyContent: 'center', color:"black"}}>
                                <h1 style={th_title}>{props.category} Section</h1>
                            </div>
                            
                            <div className="row">
                                {isLoading && <Loading />}
                                {movies.map((movie) => {
                                    return (
                                        <div className="col-md-3 my-3" key={movie.key}>
                                            <Movie mov = {movie}  />
                                        </div>
                                    
                                    )
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
                    ):(
                        <h1>Hello</h1>
                    )}
        </div>
    )
}

export default MoviesApi
