import { Todo } from "../models/todo.model"
import { createTodoHTML } from "./create-todo-html";




export const renderTodos = (elementId, todos = []) => {

    const element = document.querySelector(elementId);

    todos.forEach( todo => {
        element.append(createTodoHTML(todo))
    });
        
}