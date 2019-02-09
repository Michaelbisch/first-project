import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      workouts: [],
      name: '',
      day: '',
      workout: '',
      rep: 0,
      set: 0
    };
  }
    handleName(val) {
      this.setState({
        name: val
      });
    }
    handleDay(val) {
      this.setState({
        day: val
      });
    }
    handleWorkout(val){
      this.setState({
        workout: val
      });
    }
    handleRep(val){
      this.setState({
        rep: val
      });
    }
    handleSet(val){
      this.setState({
        set: val
      })
    }
    componentDidMount() {
      axios.get('api/workout').then(res => {
        this.setState({
          workouts: res.data
        })
      })
    }
    createWorkout(name, day, workout, rep, set){
      axios.post('api/workout', {name, day, workout, rep, set}).then(res => {
        this.setState({
          workouts: res.data,
          name: '',
          day: '',
          workout: '',
          rep: 0,
          set: 0
        })
      })
    }
  
  render() {
    const{name, day, workout, rep, set} = this.state;
    return (
      <div className="App">
        <h1>Workout Builder</h1>
        <input type="text" placeholder="Name"
         onChange={e => this.handleName(e.target.value)}
          value={this.state.name}
          ></input>
        <input type="text" placeholder="Day"
         onChange={e => this.handleDay(e.target.value)}
          value={this.state.day}
          ></input>
        <input type="text" placeholder="Workout"
         onChange={e => this.handleWorkout(e.target.value)}
          value={this.state.workout}
          ></input>
        <input type="text" placeholder="Rep"
         onChange={e => this.handleRep(e.target.value)}
          value={this.state.rep}
          ></input>
        <input type="text" placeholder="Set"
         onChange={e => this.handleSet(e.target.value)}
          value={this.state.set}
          ></input>
          <button onClick={() => this.createWorkout(name,day,workout,rep,set)}>Create</button>
      </div>
    );
  }
}

export default App;
