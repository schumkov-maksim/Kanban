import './App.css'
import Field from './components/Field/Field'
import Input from './components/Input/Input'
import Task from './components/Task/Task'
import { useTodo } from './store/store';

function App() {
  const todos = useTodo (state => state.todos);
  const addtodos = useTodo (state => state.addTodo);
  return (
    <div className='wrapper'>
   
     <Input/>
     <Task/>  
     <Task/>    
     <Field/>
     {todos.map(todo => <Task title ={todo.title} key={todo.id}/>  )}
     <button onClick={()=>addtodos("Tekxt")}>Add Todo</button>
    </div>
  )
}

export default App
