import React, { Component } from "react";
import styles from './toDoModalPopUp.module.css';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class ToDoModalPopUp extends Component {

    render() {
        const show = this.props.show;
        return (
            <div className={styles.modalWrapper} >
                <div className={styles.modalPopUp}>
                    <div className={styles.modalPopUpHeader}>
                        <h2>What Do You Want to Do?</h2>
                        <div className={styles.modalCloseIcon}><CloseIcon onClick={this.props.handleClose}/></div>
                    </div>
                    <div className={styles.modalInputElements}>
                        <TextField id="standard-full-width" fullWidth label="Task To Do" color="secondary" onChange={this.typed} />

                        <FormControl className=''>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value=''
                                color='secondary'
                                onChange={()=> {}}
                                >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={() => {}} />}
                            label="Completed"
                        />
                    </div>
                    <div className={styles.modalButtons}>
                    <Button size="small" className={styles.saveButton} color="default" variant="contained" onClick={this.props.handleClose}>
                        Cancel
                    </Button>
                    <div className={styles.modalDeleteSaveButtons}>
                    <Button
                        variant="contained"
                        color="secondary"
                        className=""
                        size = "small"
                    >
                        Delete
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={styles.saveButton}
                    >
                        Save
                    </Button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}