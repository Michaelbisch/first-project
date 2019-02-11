import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Individual from './components/Individual'

class App extends Component {
  constructor(){
    super();
    this.state = {
      workouts: [],
      name: '',
      day: '',
      workoutnum: '',
      rep: 0,
      set: 0
    };
    this.deleteWorkout = this.deleteWorkout.bind(this);
    this.updateWorkout = this.updateWorkout.bind(this);
    this.setEdit = this.setEdit.bind(this)
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
        workoutnum: val
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
      axios.get('/api/workout').then(res => {
        this.setState({
          workouts: res.data
        })
      })
    }
    createWorkout(name, day, workoutnum, rep, set){
      axios.post('/api/workout', {name, day, workoutnum, rep, set}).then(res => {
        this.setState({
          workouts: res.data,
          name: '',
          day: '',
          workoutnum: '',
          rep: 0,
          set: 0
        })
      })
    }
    deleteWorkout(id){
      axios.delete(`/api/workout/${id}`).then(res => {
        this.setState({
          workouts: res.data
        });
      });
    }
    setEdit(name, day, workoutnum, rep, set) {
     this.setState({
        name,
        day,
        workoutnum,
        rep,
        set
        })
      }
    
    updateWorkout(id) {
      const {name, day, workoutnum, rep, set } = this.state;
     
      axios.put(`/api/workout/${id}`, { name, day, workoutnum, rep, set}).then(res => {
        this.setState({
          workouts: res.data,
          name: '',
          day: '',
          workoutnum: '',
          rep: 0,
          set: 0
        })
      })
    }
  

    
    render() {
      const{name, day, workoutnum, rep, set} = this.state;
      const mappedWorkouts = this.state.workouts.map(workout => {
        return(
          <Individual 
          key={workout.id}
          workout={workout}
          deleteWorkout={this.deleteWorkout}
          updateWorkout={this.updateWorkout}
          setEdit={this.setEdit}
        />
        );
      });
      // const mappedBots = this.state.bots.map(bot => {
      //   return (
      //     <Bot
      //       key={bot.id}
      //       bot={bot}
      //       deleteBot={this.deleteBot}
      //       updateBot={this.updateBot}
      //       setEdit={this.setEdit}
      //     />
      //   );
      
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
          value={this.state.workoutnum}
          ></input>
        <input type="text" placeholder="Rep"
         onChange={e => this.handleRep(e.target.value)}
          value={this.state.rep}
          ></input>
        <input type="text" placeholder="Set"
         onChange={e => this.handleSet(e.target.value)}
          value={this.state.set}
          ></input>
          <button onClick={() => this.createWorkout(name, day, workoutnum, rep, set)}>Create</button>
          {mappedWorkouts}
      </div> 
    );
  }
}

export default App;
