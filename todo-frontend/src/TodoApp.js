import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosInstance'; // ✅ Import the custom axios instance
import { Button, TextField, Container, Typography, IconButton, Card, CardContent, Box } from '@mui/material';
import { Delete } from '@mui/icons-material';
import config from './config';

const GET_TASKS_API_BASE_URL = config.GET_TASKS_API_BASE_URL;
const DELETE_TASK_API_BASE_URL = config.DELETE_TASK_API_BASE_URL;
const CREATE_TASK_API_BASE_URL = config.CREATE_TASK_API_BASE_URL;

const backgroundImage = process.env.PUBLIC_URL + '/background.jpg';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '' });

    const fetchTasks = async () => {
        try {
            const response = await axiosInstance.get(`${GET_TASKS_API_BASE_URL}/tasks`);
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks', error);
        }
    };

    const createTask = async () => {
        try {
            await axiosInstance.post(`${CREATE_TASK_API_BASE_URL}/tasks`, newTask);
            fetchTasks();
            setNewTask({ title: '', description: '' });
        } catch (error) {
            console.error('Error creating task', error);
        }
    };

    const deleteTask = async (taskId) => {
        try {
            await axiosInstance.delete(`${DELETE_TASK_API_BASE_URL}/tasks/${taskId}`);
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <Box
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="h3" gutterBottom style={{ textAlign: 'center', color: 'white', margin: '8px' }}>
                    <img src="/logo1.png" alt="My Logo" style={{ width: '100px', display: 'block', margin: '0 auto' }} />
                    ToDo App
                </Typography>
                <div>
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        value={newTask.title}
                        margin="normal"
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={newTask.description}
                        margin="normal"
                        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />
                    <Button variant="contained" color="primary" onClick={createTask} style={{ margin: '8px' }}>
                        Add Task
                    </Button>
                </div>

                <Typography variant="h4" gutterBottom style={{ textAlign: 'center', color: 'white', margin: '15px' }}>
                    Existing Tasks
                </Typography>

                {tasks.map((task) => (
                    <Box key={task.ID} mb={2}>
                        <Card variant="elevation">
                            <CardContent>
                                <Typography variant="h6">{task.Title}</Typography>
                                <Typography variant="body2">{task.Description}</Typography>
                                <IconButton onClick={() => deleteTask(task.ID)} color="secondary">
                                    <Delete />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Container>
        </Box>
    );
}

export default TodoApp;
