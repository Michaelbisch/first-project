const workouts = [{
    id: 0,
    name: '',
    day: '',
    workout: '',
    rep: 0,
    set: 0
}];
let id = 0;

module.exports = {
    getWorkout(req, res) {
        console.log("this works")
        res.status(200).send(workouts);
    },
    createWorkout(req, res) {
        const { name, day, workout, rep, set } = req.body;
        workouts.push({
            id,
            name,
            day,
            workout,
            rep,
            set
        })
        id++;
        res.status(200).send(workouts)
    },
    deleteWorkout(req, res) {
        const { id } = req.params;
        const index = workouts.index(workout => workout.id == id)

        workouts.splice(index, 1)
        res.status(200).send(workout)
    },
    // updateWorkout(req, res) {

    // }
}


