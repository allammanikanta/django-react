import React from "react";
import styles from './taskTitleCard.module.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Badge from '@material-ui/core/Badge';

export default function TaskTitleCard(task) {
    return (
        <div className={task.completed ? `${styles.taskCard} ${styles.disabled}` : `${styles.taskCard}`}>
            <FormControlLabel
                control={
                    <Checkbox
                    checked={task.completed}
                    onChange={() => {}}
                    />
                }
            />
            <div className={styles.taskTitle}><span>{task.task}</span></div>
            <div className={styles.taskCategory}>{task.category && <Badge badgeContent={task.category.category} color="secondary" />}</div>
            <IconButton color="secondary">
                <DeleteIcon onClick={() => task.removeTodo(task.id)}/>
            </IconButton>
        </div>
    )
}