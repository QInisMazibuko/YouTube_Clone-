import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useHistory} from "react-router-dom";

const Styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function Videos(props) {
  const history = useHistory();
  const classes = Styles();
  const {handleSelect, videos} = props;


 const handleClick = (video) => {
      handleSelect(video);
      history.push("/watch");
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      {videos.map((video,index)=> 
        <Grid item xs={3} key={index}>
          <Paper className={classes.paper}>
          <ButtonBase 
          style={{height:`${video.snippet.thumbnails.high.height}`,width:`${video.snippet.thumbnails.high.width}` }}
          onClick={()=> handleClick(video)}
          >
              <img style={{width: '100%'}} 
              className={classes.img} 
              alt="complex"
             src={video.snippet.thumbnails.high.url} 

               />
            </ButtonBase>
          </Paper>
        </Grid>  
      )}
      </Grid>
    </div>
  );
}

