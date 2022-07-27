import axios from 'axios'

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

const url = `https://jsonplaceholder.typicode.com/todos/1`

axios.get(url).then(response => {
    const todo = response.data as Todo

    const id = todo.id
    const title = todo.title
    const finished = todo.completed

    logTodo(id, title, finished)
})

function logTodo(id: number, title: string, finished: boolean) {
    console.log(`
    Todo ID: ${id}
    Todo title: ${title}
    Is todo finished: ${finished}
    `)
}

