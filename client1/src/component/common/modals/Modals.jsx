import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addIndividualWord} from './../../home/action'
import {axiosRequest} from './../helper/helper'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: '400px',
      minWidth: '320px',
      textAlign: 'center',
      color: 'red',
      height: '10px',
      padding: '5px',
      fontSize: '15px',
    },
  });



 const TransitionsModal =(props)=> {
  const {handleClose,open,addToUi} = props;
  const classes = useStyles();
  const [error,setError] = useState('');
  const [adding,setAdding] = useState(false);
  const [currentText,setCurrentText] = useState('');

  const addWordToDictionary =  async ()=>{
    if(!currentText){
      setError('Must Enter word to addd');
      return
    }
    try {
      setAdding(true)
      const response = await axiosRequest("POST",`/api/search/${currentText.toLocaleLowerCase()}`);
      console.log(response);
      setError('');
      addToUi(response.data.info);
      handleClose();
    } catch (error) {
      console.log(error);
      setError('Could not find word (hint: try again with the root of the word)')
      setAdding(false)
    }
    setAdding(false)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <div className={classes.root}>{error}</div>
            <DialogTitle id="form-dialog-title">Add word to dictionary</DialogTitle>
            <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Word"
                fullWidth
                onChange={(e)=> setCurrentText(e.target.value)}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary" disabled={adding}>
                Cancel
            </Button>
            <Button onClick={addWordToDictionary} color="primary">
                {adding ? <CircularProgress />: 'Send'}
            </Button>
            </DialogActions>
      </Dialog>
    </div>
  );
}
const mapDispatchToProps = (dispatch)=>({
  addToUi: (word)=> dispatch(addIndividualWord(word))
})
export default connect(null,mapDispatchToProps)(TransitionsModal)