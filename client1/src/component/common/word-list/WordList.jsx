import React from 'react';
import {withRouter} from 'react-router-dom'
import './word-list.css'

const WordList = (props) => {
    const {_id,senses,lexicalCategory} = props.word;
    const { history } = props;
    const handleClick = ()=>{
        history.push({
            pathname: "/individual-word",
            state: props.word
        });
    }
    return (
        <div className="word-list-wrapper" onClick={handleClick}>
            <p className="word-list-heading">{_id}</p>
            <p className="word-short-def">
                {"(" + lexicalCategory[0] + ")" + " " + senses[0]['def']}
            </p>
        </div>
    )
}

export default withRouter(WordList);
