import React, { Fragment , useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {getWordList} from './action'
import WordList from '../common/word-list/WordList';
import Modals from './../common/modals/Modals';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './home.css'
import { CircularProgress } from '@material-ui/core';
import AppBarMain from '../common/appbar/Appbar';

const VocabHome = (props) => {

    // for modals related stuff
    const [open, setOpen] = useState(false);
    const [localWordList,setLocalWordList] = useState([]);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const  {WordList : {isLoading ,wordList }}= props;
    // loading the words
    useEffect(()=>{
        const {setWordListToState} = props;
        setWordListToState();
        //eslint-disable-next-line
    },[])

    useEffect(()=>{
        setLocalWordList(wordList);
    },[wordList])

    const changeLocalWordList = (list)=>{
        setLocalWordList(list);
    };

    return (
        <Fragment>
            <AppBarMain 
                changeLocalWordList={changeLocalWordList}
                wordList={wordList}
            />
            <div className ="word-list-tag">
                Word list
            </div>
            {(!!localWordList && localWordList.length > 0)? 
            localWordList.map((word)=> <WordList word={word} />):
                isLoading ? <div style={{display:'flex', justifyContent: 'center'}}>
                    <CircularProgress />
                    </div>
                 : 
                 <h2 style={{textAlign: 'center', marginTop: '20px'}}>No word found !</h2>
            }
            <div className="fab-icon-btn">
                <Fab onClick={handleOpen} color='primary'>
                    <AddIcon />
                </Fab>
            </div>
            <Modals 
                handleClose={handleClose}
                open={open}>
            </Modals>
        </Fragment>
    )
}
const mapStateToProps = (state)=>({
    WordList: state.wordListReducer
})

const mapDispatchToProps = (dispatch)=>({
    setWordListToState: ()=>dispatch(getWordList())
})

export default connect(mapStateToProps,mapDispatchToProps)(VocabHome)
