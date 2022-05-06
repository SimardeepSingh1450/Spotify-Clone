import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';
function Login() {
  return (
    <div className="login">
        {/*Spotify Logo*/}
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="spotifylogo"/>
    
        {/*Login with Spotify Buttons*/}
        <a href={loginUrl}>Login With Spotify Button</a>
    </div>
  )
}

export default Login;