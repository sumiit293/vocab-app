import { FETCH_WORDLIST_ERROR,FETCH_WORDLIST_START,FETCH_WORDLIST_SUCCESS,ADD_WORD } from "./action";

const initialState = {
    isLoading: false,
    wordList: [],
    errMsg: "",
};

const wordListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WORDLIST_START: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case FETCH_WORDLIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                wordList: action.wordList
            }
        }
        case FETCH_WORDLIST_ERROR: {
            return {
                ...state,
                isLoading: false,
                errMsg: action.errMsg,
            }
        }
        case ADD_WORD: {
            return {
                ...state,
                wordList: [action.word,...state.wordList]
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
export default wordListReducer;