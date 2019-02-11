import React, { Component } from 'react';

class Individual extends Component {
    constructor(props){
        super(props)
        
        this.state ={
            editing: false
        }
    }
    edit(){
        const { workout } = this.props;
        this.setState({
            editing: true
        })
        this.props.setEdit(workout.name, workout.day, workout.workoutnum, workout.rep, workout.set )
    }
    updateWorkout(id) {
        this.setState({
            editing: false
        })
        this.props.updateWorkout(id);
    }
    render(){
        const { workout, deleteWorkout } = this.props;
        return(
            <div>
                <h3 className="header">{workout.name}</h3>
                <p>Day: {workout.day}</p>
                <p>Workout: {workout.workoutnum}</p>
                <p>Rep: {workout.rep}</p>
                <p>Set: {workout.set}</p>
                <button onClick={() => deleteWorkout(workout.id)}>Delete</button>
                {this.state.editing ? (
                    <button onClick={() => this.updateWorkout(workout.id)}>Save</button>
                ) : (
                    <button onClick={() => this.edit()}>Edit Workout</button>
                )}
            </div>
        )
    }
}
export default Individual;