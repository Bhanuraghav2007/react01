import {createContext,useContext} from "react"
export const TodoContext = createContext({
    todos: [//ek todo object mai kon kon si properties hongi
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},//inki functionality app.jsx mai likhne honge 
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider