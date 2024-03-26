import html from './app.html?raw';
import todoStore from '../todo.store';
import { renderTodos } from './use-cases/render-todos';

/**
 * 
 * @param {String} elementId 
 */
  const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    destroyerX: '.destroy'
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


    //referencias  HTML
    const newDescriptionInput = document.querySelector( ElementIDs.NewTodoInput);
    const todoListUL = document.querySelector(ElementIDs.TodoList);


    //Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
      if (event.keyCode !== 13) return;
      if(event.target.value.trim().lenght === 0) return;

      todoStore.addTodo( event.target.value);
      displayTodos();
      event.target.value = '';
    });


    todoListUL.addEventListener('click', (event) => {   
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUL.addEventListener('click', ( event ) =>{
      const element = event.target.closest('[data-id]');
       const itsDestroy = event.target.className
       if(itsDestroy === 'destroy'){
        todoStore.deletTodo(element.getAttribute('data-id'));
        displayTodos();
       }
    });
    



};