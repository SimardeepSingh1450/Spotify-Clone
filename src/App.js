import React,{useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from "./spotify";
import Helmet from 'react-helmet';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
const spotify=new SpotifyWebApi();
console.log(spotify);

function App() {
  
  
  const [token,setToken]=useState(null);
  const [{user},dispatch]=useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash="";//We used this now because we already stored the Access token in our token variable and this hides the access token.
    const _token=hash.access_token;


    if(_token){

      dispatch({
        type:"SET_TOKEN",
        token:_token
      })

      setToken(_token);

      spotify.setAccessToken(_token);//Web api property used.
      spotify.getMe().then((user)=>{
        console.log(user);

dispatch({
  type:'SET_USER',
  user:user
});

      });
   
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,

        });
      });

      spotify.getPlaylist('37i9dQZEVXcGEDoogNcAPU')//Playlist ID for my account Weekly Discovery
      .then(response=>
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response
        })
      )
    }
    
  },[token,dispatch]);
  
  console.log(user);
  

  return (
    
       <div className="app">
         <Helmet>
           <title>Spotify-clone</title>
         </Helmet>
       {  
       token?(
        //Ypu are loged in
        <Player/>
       
       ):(
      <Login/>
       )
       }
    </div>
  );
}

export default App;
