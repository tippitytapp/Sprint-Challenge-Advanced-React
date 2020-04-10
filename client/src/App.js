import React from 'react';
import axios from "axios";
import PlayerCard from "./components/playerscard";
import Header from "./components/header"
import "./App.css";


class App extends React.Component{
  constructor(){
    super();
    this.state={
      players:[],
    }
  };

componentDidMount(){
  axios.get(`http://localhost:5000/api/players`).then(res => {
    console.log(res.data);
    this.setState({
      players: res.data
    })
  })
  .catch(error => {
    console.log(`error received: `, error);
  })
}


  render(){
  return (
    <div className="App">
      <Header />
      <div className="playersCardDiv">
      <PlayerCard playerData={this.state.players} />
      </div>
    </div>
  );
}
}

export default App;
