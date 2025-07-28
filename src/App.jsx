import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [weight,setWeight]=useState();
  const [height,setHeight]=useState();
  const [bmi,setBmi]=useState("");
  const [message,setMessage]=useState("");

  //  logic
  let calBmi=(e)=>{

    e.preventDefault();
    if(weight==0 || height==0){
      alert("Please Enter A Valid Weight And Height !!")
    }
    else{
      let bmi=(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage("You Are UnderWeight!!")
      }
      else if(bmi>=25 && bmi<30){
        setMessage("You Are Healthy!!")
      }
      else if(bmi>=30){
        setMessage("You Are OverWeight!!")
      }
    }

    

  }

  // reload

  let reload=()=>{
    window.location.reload();
  }
  

  return (
    <>
      <div className="app ">
        <div className="container ">
          <h1>rupesh</h1>
          <h1>BMI CALCULATOR</h1>
          <button>click me</button>
          <form action="" onSubmit={calBmi}>
            <div>
              <label htmlFor="">Weight (lbs) :</label>
              <input
                type="text"
                placeholder="Enter Weight Value"
                value={weight}
                onChange={(e)=>setWeight(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Height (in) :</label>
              <input
                type="text"
                placeholder="Enter Height Value"
                value={height}
                onChange={(e)=>setHeight(e.target.value)}
              />
            </div>
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
              <button className="btn btn-outline" type="submit" onClick={reload}>
                Reload
              </button>
            </div>
            <div className="center">
              <h3>Your BMI is: {bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
