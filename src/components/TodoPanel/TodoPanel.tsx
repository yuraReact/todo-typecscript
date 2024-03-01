import React from "react";
import styles from "./TodoPanel.module.css"
import Button from "../Button/Button";

const DEFAULT_TODO = {
    name: '',
    description: ''
}

interface TodoPanelProps {
   addTodo: ({name, description }: Omit<Todo, 'checked' | 'id'>) => void;
}

const TodoPanel: React.FC<TodoPanelProps> = ({addTodo}) => {
    const [todo, setTodo] = React.useState(DEFAULT_TODO)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const { name, value } = event.target
     setTodo({...todo, [name]: value})
    }

    return <div className={styles.formContainer}>
        <div className={styles.inputBlock}>
            <label htmlFor="name">
                <div className={styles.inputLabel }>Name</div>
                <input className={styles.inputField} type='text' id="name" value={todo.name} name="name" onChange={onChange} />
            </label>
        </div>
        <div className={styles.inputBlock}>
            <label htmlFor="name">
                <div className={styles.inputLabel }>Description</div>
                <input className={styles.inputField} type='text' id="description" value={todo.description} name="description" onChange={onChange} />
            </label>
        </div>
        <div className={styles.buttonBlock}>
            <Button color="blue"
            onClick={()=> addTodo({name: todo.name, description: todo.description})} 
            >Create</Button>
        </div>
    </div>
}

export default TodoPanel;