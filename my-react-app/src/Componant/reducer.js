import React,{useReducer} from "react";

const initalState={'count':0};

const reducer=(state,action)=>{
    switch(action.type){


        case 'increment':
        return{'count':state.count+1}
        
        case 'dicrement':
            return{'count':state.count-1}

            default: 
            return state;

    }
}


const UseReducerExample=()=>{
    const [state,dispatch]=useReducer(reducer,initalState);
    return(
        <>
        <p>Count: {state.count}</p>
        <button onClick={()=>{
            dispatch({type:'increment'})
        }}>+</button>

<button onClick={()=>{
            dispatch({type:'dicrement'})
        }}>-</button>
        </>
    )
}


export default UseReducerExample;