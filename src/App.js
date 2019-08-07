import React from 'react';

import "./style.css";
import myimage from "./imageInPublic.png"

function App() {
  return (
    <div className="App">
     
      <div style={{border:'solid 1px black',maxwidth:'100vw'}}>

	         <h1 className='title red'>My title</h1>
 
	        <br/>
<div style={{textAlign:'center'}}>
          <img src={myimage} /> 
          </div>
          <br/>
          <div style={{textAlign:'center'}}>
          <img src={require ("./imageInPublic.png")} alt="nadim" ></img>
          </div>
         
  


</div>
      </div>
  );
}

export default App;
