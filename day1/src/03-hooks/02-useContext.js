import React, { useContext, useEffect, useReducer } from 'react';
import './css/index.css';
const intialState = {
  list: [],
  info: '',
};
const reducer = (prevState, dispatchState) => {
  let newState = { ...prevState };
  if (dispatchState.type === 'listQuery') {
    newState.list = dispatchState.list;
  } else {
    newState.info = dispatchState.value;
  }
  return newState;
};
const GlobalContext = React.createContext();
export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  console.log(state);
  useEffect(() => {
    dispatch({
      type: 'listQuery',
      list: ['1', '2', '3', '4'],
    });
  }, []);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      <div>
        {state.list.map((item, i) => (
          <ItemDiv value={item} key={i}></ItemDiv>
        ))}
      </div>
      <Details></Details>
    </GlobalContext.Provider>
  );
}
function ItemDiv(props) {
  let context = useContext(GlobalContext);

  return (
    <div
      className="itemDiv"
      onClick={() => {
        context.dispatch({
          type: 'itemDiv',
          value: props.value,
        });
      }}
    >
      {props.value}
    </div>
  );
}
function Details() {
  let context = useContext(GlobalContext);
  return <div className="details">{context.info}</div>;
}
