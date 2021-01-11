import React, { Component } from "react";
import styles from './toDoList.module.css';  
import TaskTitleCard from '../taskTitleCard/taskTitleCard'

export default class ToDoList extends Component {
    render() {
        return (
            <div className={styles.toDoListModal}>
                <div className={styles.toDoListHeader}>
                    <span>All Tasks</span>
                </div>
                {this.props.listData && this.props.listData.length === 0 && <div className={styles.noTasks}>
                    No tasks added, buddy!</div>}
                <div className={styles.toDoListContainer}>
                    {this.props.listData.map((eachTask) => {
                        return <TaskTitleCard key = {eachTask.id} {...eachTask} removeTodo={this.props.removeTodo}/>
                    })}
                </div>
            </div>
        )
    }
}