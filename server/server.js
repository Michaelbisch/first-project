const express = require('express');

const ctrl = require('./controller');

const app = express();

app.use(express.json());

app.get('/api/workout', ctrl.getWorkout);

app.post('/api/workout', ctrl.createWorkout);

app.delete('/api/workout/:id', ctrl.deleteWorkout);

app.put('/api/workout/:id', ctrl.updateWorkout);

const port = 3020;

app.listen(3020, () => console.log(`heyo its port ${port}`))