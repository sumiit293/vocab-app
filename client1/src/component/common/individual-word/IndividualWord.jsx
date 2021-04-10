import React from 'react';
import './individual-word.css';
import CloseIcon from '@material-ui/icons/Close';
import {withRouter,Link} from 'react-router-dom';

const IndividualWord = (props) => {
    const {state} = props.location;
    return (
        <div className="individual-wrapper">
            <div className="resource-header">
                <div className="resource">
                    <h1>{state._id}</h1>
                </div>
                <div className="close">
                   <Link to="/"> <p><CloseIcon/></p></Link>
                </div>
            </div>
            <div className="word-def">
               <div className="etymologies">
                   {state.etymologies}
               </div>
                {state.senses.length > 0 && state.senses.map((sense)=>
                 sense.def != null && sense.example ?
                    <div className="border-bottom">
                        <div>{sense.def}</div>
                        {<div><ul><li>{sense.example}</li></ul></div>}
                    </div> : null
                )}
            </div>
        </div>
    )
}

export default withRouter(IndividualWord);
