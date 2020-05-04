import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';


export const mainListItems = (
  <div>
    <ListItem button style={{backgroundColor:"rgb(0,0,0,0.5)"}}>
      <ListItemIcon >
        <HomeIcon style={{color: "red"}}/>
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WhatshotIcon />
      </ListItemIcon>
      <ListItemText primary="Trending" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SubscriptionsIcon />
      </ListItemIcon>
      <ListItemText primary="subscriptions" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VideoLibraryIcon />
      </ListItemIcon>
      <ListItemText primary="Library" />
    </ListItem>
  </div>
);

