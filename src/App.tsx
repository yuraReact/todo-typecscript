import React from 'react';
import styles from './App.module.css'
import Header from './components/Header/Header';
import TodoPanel from './components/TodoPanel/TodoPanel';

const DEFAULT_TODO_LIST = [
  {
    name: 'Task 1',
    description: 'Description for Task 1',
    checked: false
  },
  {
    name: 'Task 2',
    description: 'Description for Task 2',
    checked: true
  },
  {
    name: 'Task 3',
    description: 'Description for Task 3',
    checked: false
  }
];


const App = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

  const addTodo = ({name, description }: Omit<Todo, 'checked' | 'id'>) => {
     setTodos([...todos, {description, name, checked:false}])
  }

  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCount={todos.length} />
        <TodoPanel addTodo = {addTodo} />
      </div>
    </div>
  );
}


export default App;