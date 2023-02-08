import React from 'react'
import TodoList from './todoList/TodoList';
import AddItem from './addItem/AddItem';

export default function Todo() {
    const [tasks, setTasks] = React.useState([]);

    const updateList = (id) => {
        console.log(id)
    }

    const addItem = (task) => {
        const temp = [...tasks];
        temp.push(task);
        setTasks(temp)
    }

    return (
        <React.Fragment>
        <AddItem addItem={addItem} />
        <TodoList tasks={tasks} />
        </React.Fragment>
    )
}