import React from "react";
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { incrementNum, decrementNum } from "./redux/actions/action";

const App = ()=> {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
    <div class="container">
    <h1>Increment/Decrement counter</h1>
    <div class="quantity">
      <a class="quantity__minus" title="Decrement" onClick={() => dispatch(decrementNum())}><span>-</span></a>
      <input name="quantity" type="text" class="quantity__input" value={myState} />
      <a class="quantity__plus" title="Increment" onClick={() => dispatch(incrementNum(5))}><span>+</span></a>
    </div>
        </div>
  </>
  );
}

export default App;
