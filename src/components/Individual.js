import React, { Component } from 'react';
import Delete from './Delete'
import Edit from './Edit'

class Individual extends Component {
    constructor(props){
        super(props)
        
        this.state ={
            editing: false
        }
    }
    edit = () => {
        const { workout } = this.props;
        this.setState({
            editing: true
        })
        this.props.setEdit(workout.name, workout.day, workout.workoutnum, workout.rep, workout.set )
    }
    updateWorkout = (id) => {
        this.setState({
            editing: false
        })
        this.props.updateWorkout(id);
    }
    render(){
        const { workout, deleteWorkout, setEdit } = this.props;
        return(
            <div className="tile">
            <div className="individuals">
                <h2>{workout.name}</h2>
                <p>Day: {workout.day}</p>
                <p>Workout: {workout.workoutnum}</p>
                <p>Rep: {workout.rep}</p>
                <p>Set: {workout.set}</p>
                <Delete 
                key={workout.id}
                workout={workout}
                deleteWorkout={deleteWorkout}
                />
                <Edit
                key={workout.id}
                workout={workout}
                editing={this.state.editing}
                setEdit={setEdit}
                edit={this.edit}
                updateWorkout={this.updateWorkout}
                />
                {/* {this.state.editing ? (
                    <button onClick={() => this.updateWorkout(workout.id)}>Save</button>
                ) : (
                    <button onClick={() => this.edit()}>Edit Workout</button>
                )} */}
            </div>
            </div>
        )
    }
}
export default Individual;