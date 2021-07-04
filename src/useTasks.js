import { useState, useEffect } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) ||
        [
            { id: 1, content: "przejść na Reacta", done: false },
            { id: 2, content: "zjeść śniadanie", done: true },
        ]
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(tasks => tasks.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done,
                };
            }
            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })))
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                content,
                done: false,
            }
        ])
    };

    return { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask };
};