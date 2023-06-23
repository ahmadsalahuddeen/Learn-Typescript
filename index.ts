import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/2'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


const logTodo = (id: number, title: string, completed: boolean)=>{

  console.log(`
  id: ${id}
  title: ${title}
  completed: ${completed}
  `)
}
axios.get(url
  ).then(response => {
    const todo = response.data as Todo;
    const ID = todo.id
    const title = todo.title
    const completed = todo.completed
    
    logTodo(ID,title, completed )
  })