import html from './app.html?raw';
import todoStore from '../todo.store';
import { renderTodos } from './use-cases/render-todos';

/**
 * 
 * @param {String} elementId 
 */
  const ElementIDs = {
    TodoList: '.todo-list',
  }

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
        
    }
    //cuando la funcion App() se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();
};