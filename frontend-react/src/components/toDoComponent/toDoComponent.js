import React, { Component } from 'react';
import styles from './toDoComponent.module.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import ToDoList from '../../components/toDoList/toDoList';
import ToDoModalPopUp from '../toDoModalPopUp/toDoModalPopUp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodos, getCategories, addCategories, removeTodo } from '../../actions/todos';
import _ from 'lodash';

class ToDoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modalOpen: false,
          categoryTyped: ''
        };
      }
    
    componentDidMount() {
        this.props.getTodos();
        this.props.getCategories();
    }

    componentDidUpdate(prevProps) {
        if(!_.isEqual(prevProps.todos, this.props.todos)){
            console.log("cmng to update??");
            this.props.getTodos();
        }
            
    }

    createTaskButtonClick = (e) => {
        e.stopPropagation();
        this.setState(prevState => ({modalOpen: !prevState.modalOpen}))
    }

    categoryOnChange = (e) => {
        this.setState({categoryTyped: e.target.value})
    }

    categoryAdded = () => {
        this.props.addCategories(this.state.categoryTyped);
        this.setState({categoryTyped: ''})
    }

    removeTodo = (id) => {
        console.log("cmng here", id);
        this.props.removeTodo(id)
    }

  render() {
      console.log(this.props.todos);
    const showCategoryAdd = this.state.categoryTyped ? <AddCircleOutlineRoundedIcon onClick={this.categoryAdded} style={{cursor: 'pointer'}}/> : ''
    return (
      <div className={styles.mainToDoComponent}>
          <div className={styles.toDoLeftPane}>
            <div className={styles.toDoButton}>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                className={styles.createTaskbutton}
                onClick={this.createTaskButtonClick}
                startIcon={<AddIcon />}>
                Create a task
            </Button>
            {this.state.modalOpen && <ToDoModalPopUp show={this.state.modalOpen} handleClose={this.createTaskButtonClick}/>}
            </div>
            <div className={styles.categoryComponent}>
                <div className={styles.categoryInput}>
                <TextField
                    id="outlined-secondary"
                    label="Create Category"
                    variant="outlined"
                    color="secondary"
                    value={this.state.categoryTyped}
                    onChange={this.categoryOnChange}
                    InputProps={{
                        endAdornment: showCategoryAdd
                      }}
                />
                </div>
                <div className={styles.categoryChips}>
                    {this.props.categories && this.props.categories.length === 0 &&
                     <div className={styles.noCategory}>No Category Created</div>}
                    {this.props.categories.map((eachCategory) => {
                        return <Chip color="secondary" label={eachCategory.category} variant="outlined" />    
                    })}
                </div>
            </div>
          </div>
          <div className={styles.toDoList}>
              {this.props.todos && <ToDoList listData={this.props.todos} removeTodo={this.removeTodo}/>}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    todos: Object.values(state.todos),
    categories: state.categories,
    loader: state.loader,
  });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            getTodos: getTodos,
            getCategories: getCategories,
            addCategories: (payload) => addCategories(payload),
            removeTodo: (payload) => removeTodo(payload)
           }, dispatch);
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(ToDoComponent);
  // { getTodos, getCategories, addCategories }