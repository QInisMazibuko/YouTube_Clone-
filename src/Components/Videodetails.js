import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import VideoList from "./VideoList";
import Typography from '@material-ui/core/Typography';

export default function Videodetails(props) {
  
  const { selected , videos, handleSelect} = props;
  const videosrc = `http://www.youtube.com/embed/${selected.id.videoId}`;

  useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Grid container spacing={1}>
        {/* Chart */}
        <Grid item xs={12} md={6} lg={8}>
          <iframe
            id="player"
            type="text/html"
            width="640"
            height="390"
            src={videosrc}
            frameBorder="0"
            title={selected.snippet.title}
          ></iframe>
            <Grid item xs zeroMinWidth>
                <Typography gutterBottom variant="subtitle1">
                 <h2> {selected.snippet.title} </h2> 
                </Typography>
                <Typography variant="body2" gutterBottom>
                 <h2>{selected.snippet.channelTitle} </h2>
                </Typography><br/>
                {/* <Typography variant="body2" color="textSecondary">
                {clip.snippet.channelTitle}<CheckCircleIcon fontSize="small"/>
                </Typography> */}
              </Grid>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <VideoList handleSelect={handleSelect} videos={videos} />
        </Grid>
      </Grid>
    </div>
  );
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}