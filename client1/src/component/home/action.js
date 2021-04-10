import {fetchWordListApi} from './api'

export const FETCH_WORDLIST_START = "FETCH_WORDLIST_START";
export const FETCH_WORDLIST_SUCCESS = "FETCH_WORDLIST_SUCCESS";
export const FETCH_WORDLIST_ERROR = "FETCH_WORDLIST_ERROR";
export const ADD_WORD = "ADD_WORD";


const fetchWordListStart = () => ({
    type: FETCH_WORDLIST_START
});

const fetchWordListError = (errMsg) => ({
    type: FETCH_WORDLIST_SUCCESS,
    errMsg
});

const fetchWordListSuccess = (wordList) => ({
    type: FETCH_WORDLIST_SUCCESS,
    wordList
});

const addWord = (word)=>({
    type: ADD_WORD,
    word
})
export const getWordList = () => async (dispatch) => {
    dispatch(fetchWordListStart());
    try {
        const res = await fetchWordListApi();
        console.log(res);
        dispatch(fetchWordListSuccess(res.data.list));
    } catch (error) {
        dispatch(fetchWordListError("Could not get wordlist"));
    }
}

export const addIndividualWord = (word) => (dispatch)=>{
    dispatch(addWord(word));
}