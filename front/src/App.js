import React, { useState, useEffect } from 'react';
import './App.css';

const Header = ({title}) => (

  <header className="App-header">
       
    <p>
      {title}
    </p>

  </header>
);


const Team = ({name}) => (
      <li>
        {name}
      </li>
    
  );


const Teams = () => {
  
  const [teamList, setTeamList] = useState(

    []
  );
  
  useEffect(() => {
    fetch("http://localhost:8000/teams")
      .then(res => res.json())
      .then(
        (result) => {
          
          setTeamList(result);
        },
        
        (error) => {
          console.log("error: " + error);
          
        }
      )
  }, []);
 

  const teamElements = teamList.map(
      
      element => <Team name={element} key={element}/> 
  );
  return (
    <ul>
      {teamElements}
    </ul>
  );
};

const Content = () => {
  return (
    <div className="App-content">
      <p>Team details</p>
      <Teams/>
    </div>
  )
};

const App = () => (

  <div className="App">
    <Header title="Team1"/>
    <Content/>
    
  </div>
);




export default App;
