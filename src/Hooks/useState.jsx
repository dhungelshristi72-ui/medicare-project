import React, { useState } from "react";

//Hooks are spacial functions in the react that allow components to use react feature such as state management, run side effect, api calls , rendering component etc.
//mos commonly used Hooks:
//a. useState - state management , to store and update data.

//syntex
//const [state,setState] = useState(initialState)

//example : counter app
//count : 0 - initialState = 0

function UseState() {
  const [like, setLike] = useState(false);
  return (
    <div>
      {/* <h1>Count : {count}</h1>

      <button onClick={() => setCount(count + 1)}className="flex border-2 gap-4"> Increase</button>

       <button onClick={() => setCount(count - 1)}className="flex border-2 gap-4"> decrease</button>

      <button onClick={() => setCount(0)} className="border-2 gap-4">Reset</button> */}
      {/* <input type={show ? "text" : "password"} placeholder="Enter Password" className="border border-gray-400 rounded bg-blue-400 text-white justify-center item-center mt-30 ml-100 shadow shadow-black-300 " />
      <button onClick={() => setShow(!show)}  className="border bg-blue-400 text-white rounded shadow shadow-black-300 ml-2 mt-30 justify-center item-center">
        {show ? "Hide" : "Show"}

      </button> */}

      <button onClick={()=> setLike(like + 1)} className="border bg-white-500 text-black font-bold rounded shadow shadow-black-300 ml-100 mt-30 justify-center item-center">
        ❤️{like}
      </button>

    </div>
  );
}

export default UseState;

//1. create an input field of password with icon feature to show and hide 

// incerase like count when click
