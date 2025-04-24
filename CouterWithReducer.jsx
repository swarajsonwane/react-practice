import React, {useReducer} from 'react'

const intialState = {count: 0};

function reducer(state, action) {
    switch (action.type){
        case 'increment':
            return {count : state.count+1};
        case 'decrement':
            return {count : state.count-1};
        case 'reset':
            return intialState;
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
    
}
const CouterWithReducer = () => {
    const [state, dispatch ] = useReducer(reducer, intialState);
    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}
export default CouterWithReducer
