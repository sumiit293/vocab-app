import React,{useState} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close'
import { TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-root': {
      color: 'white',
    },
  },
})(TextField);

export default function AppBarMain(props) {
  const [showSearchBar,setShowSearchBar] = useState(false);
  const classes = useStyles();
  const {wordList,changeLocalWordList} = props;

  const handleChange = (e) => {
    if(!!e.target.value){
      let newlist = wordList.filter((word)=> {
        return word._id.includes(e.target.value.toLowerCase());
      });
      console.log(newlist);
      changeLocalWordList(newlist);
    }else{
      changeLocalWordList(wordList);
    }
  }

  const toggleShowSearchBar = ()=>{
    if(showSearchBar){
      changeLocalWordList(wordList);
      setShowSearchBar(!showSearchBar);
    }else{
      setShowSearchBar(!showSearchBar);
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {!showSearchBar ? 
          <Typography variant="h6" className={classes.title}>
            Vocabulary
          </Typography>:
          <CssTextField
            placeholder="Search words..."
            fullWidth
            onChange={handleChange}
          />
          }
          <IconButton color="inherit" onClick={toggleShowSearchBar}>
            {showSearchBar ? <CloseIcon /> : <SearchIcon/>}
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
