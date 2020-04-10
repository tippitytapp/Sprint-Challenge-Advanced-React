import React from 'react';
import axios from "axios";
import { response } from 'express';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      players:[]
    }
  };

componentDidMount(){
  axios.get(`http://localhost:5000/api/players`).then(res => {
    console.log(res);
    this.setState({
      players: res
    })
  })
  .catch(error => {
    console.log(`error received: `, error);
  })
}

  render(){
  return (
    <div className="App">
      <h1>Players Information</h1>
      <div className="playersCard">
        {this.state.players.forEach((item, i) => (
          <>
            <h3>Name: {item.name}</h3>
            <h4>Country: {item.country}</h4>
            <h4>Searches: {item.searches}</h4>
          </>
        ))}
      </div>
       
    </div>
  );
}
}

export default App;
