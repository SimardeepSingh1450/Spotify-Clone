import React from 'react'
import "./Footer.css"
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

import Slider from '@mui/material/Slider';

import Grid from '@mui/material/Grid';


function Footer() {
 
  return (
    <div className="footer">
        <div className="footer_left">
        <img src="https://m.media-amazon.com/images/M/MV5BMzQyNThkZTUtZTIyMy00MmM3LTgwZmMtNjk1OTI5NDE0MmQ0XkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg" 
        alt="yolo" className="footer_albumLogo"/>
        <div className="footer_songInfo">
        <h4>Blinding Lights</h4>
        <p>The Weekend</p>
        </div>
        </div>
        <div className="footer_center">
          <ShuffleOutlinedIcon className="footer_green"/>
          <SkipPreviousRoundedIcon className="footer_icon"/>
          <PlayCircleOutlineRoundedIcon fontSize="large" className="footer_play"/>
          <SkipNextRoundedIcon className="footer_icon"/>
          <ReplayIcon className="footer_green"/>
        </div>
        <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
          <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeDownIcon/>
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        
        </Grid>
        </div>
    </div>
  );
}

export default Footer;