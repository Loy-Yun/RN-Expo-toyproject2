import React, { Component } from 'react';

export default class ToDoListItem extends Component {
    state = {
        tasks: [],
        newTask: '',
    }

    addList = (task) => {
        const newTask = {
            id: Date.now(),  // 등록시간
            text: task,
            completed: false,
        }

        this.setState(prevState => ({
            tasks: [
                newTask,
                ...prevState.tasks  // 기존 목록
            ]
        }));

        console.log(this.state.tasks);
    };
    render() {
    }
}