import './App.css';
import ToDoComponent from '../src/components/toDoComponent/toDoComponent'
import { Provider } from 'react-redux'; // added
import store from '../src/store'; // added

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">Organise Your Life, Work and Schedule</div>
        <ToDoComponent></ToDoComponent>
      </div>
    </Provider>
  );
}

export default App;