import React, { useState }from 'react'
import Axios from "axios"
import "./App.css"


const APIkey ="5bc5a54797e004c1241b4bcd189dd7e3";

const App = () => {

  const[city,setCity] = useState("");
  const[data,setData] = useState();

  const fetchData = async () => {
    try{
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`);
      setData(response.data);
      console.log(response);
    }
    catch(err){
      alert("Please Enter The City Name Correct");
    }
    
  }

  return (
    <div className='css'>
    <div className='App'>
    <h1 className='title'>Weather App</h1>
    <div className='input-container'>
      <input 
      type="text"
      className='input'
      value={city}
      onChange={e => setCity(e.target.value)}
      placeholder="Enter The City Name"
      />

      <button className="button" onClick={fetchData}>Fetch</button>
      
    </div>

    <div>
     {data && (
        <div className='container'>
          <h1 className='city-name'>{data.name},{data.sys.country}</h1>
          <div className='temp'>{Math.round(data.main.temp)} C</div>
          <div className='coordinated'>
            <div>Lat - {data.coord.lat}</div>
            <div>Lon - {data.coord.lon}</div>
          </div>
        </div>
      )}

    </div> 


    </div>
    </div>
  )
}

export default App