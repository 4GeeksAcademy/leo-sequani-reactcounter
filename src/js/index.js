//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
function finalNumber(){
    let num = "00000"+counter;
    let finalNum = num.slice(-6);
    return finalNum
}
function refresh(){
    counter ++;
    finalNumber();
    (ReactDOM.render(<Home numbersString={finalNumber()} />, document.querySelector("#app")));

}

setInterval(refresh,1000)
