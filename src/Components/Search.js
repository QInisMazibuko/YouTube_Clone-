import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 600,
    borderColor: "grey",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase({ handleSearch }) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
     e.preventDefault();
     handleSearch(searchTerm);
  }

  return (
    <Paper
      component="form"
      className={classes.root}
      style={{ borderColor: "black" }}
      onSubmit={handleSubmit}
    >
     
        <InputBase
          className={classes.input}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
 
    </Paper>
  );
}
