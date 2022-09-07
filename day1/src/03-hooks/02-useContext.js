import React, { useContext, useEffect, useState } from 'react';
import './css/index.css';
const GlobalContext = React.createContext();
export default function App() {
  const [list, setList] = useState([]);
  const [info, setInfo] = useState('1234');
  useEffect(() => {
    setList([{ title: '1' }, { title: '2' }, { title: '3' }, { title: '4' }]);
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        name: info,
        change(val) {
          setInfo(val);
        },
      }}
    >
      <div>
        {list.map((item, i) => (
          <ItemDiv value={item.title} key={i}></ItemDiv>
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
        context.change(props.value);
      }}
    >
      {props.value}
    </div>
  );
}
function Details() {
  let context = useContext(GlobalContext);
  return <div className="details">{context.name}</div>;
}
