import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 500,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));


export default function VideoList(props) {
  const classes = useStyles();
  const {videos, handleSelect} = props;

  return (
    <div className={classes.root}>
      {videos.map((clip,index)=>
        <Grid  container wrap="nowrap"  spacing={2} key={index} onClick={()=> handleSelect(clip)}>
          <Grid item>
            <ButtonBase className={classes.image}   onClick={()=> handleSelect(clip)}>
              <img className={classes.img} alt="complex" src={clip.snippet.thumbnails.high.url} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs zeroMinWidth>
                {/* <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography> */}
                <Typography variant="body2" gutterBottom>
                {clip.snippet.title}
                </Typography><br/>
                <Typography variant="body2" color="textSecondary">
                {clip.snippet.channelTitle}<CheckCircleIcon fontSize="small"/>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    
    </div>
  );
}

