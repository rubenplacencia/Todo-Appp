import { Todo } from "./todos/models/todo.model";

export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del realidad'),
    ],
    filter: Filters.All,

}


const initStore = () =>{
    loadStore();
    console.log('InitStore 🥑');
}

const loadStore = () => {
    if (!localStorage.getItem('state')) return;

        const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
        state.todos = todos;
        state.filter = filter;

}

const getTodos = ( filter ) => {
    switch( filter ){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done)
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid `)
    }
}

const addTodo = (description) => {
    if(!description){
        throw new Error('Description is required');
    } 
    state.todos.push (new Todo(description));
    saveStateLocalStorage();
}

const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if( todo.id === todoId ){
            todo.done = !todo.done;
        }
        return todo;
    })
    saveStateLocalStorage();
}

const deletTodo = (todoId) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId);
    saveStateLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateLocalStorage();
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

const saveStateLocalStorage = () => {
    localStorage.setItem('state',JSON.stringify(state))
}
export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deletTodo,
    setFilter,
    getCurrentFilter,
    getTodos,
    deleteCompleted,
}
