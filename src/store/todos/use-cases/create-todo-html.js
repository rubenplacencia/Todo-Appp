import todoStore from "../../todo.store";



export const createTodoHTML = (todo) => {
        if(!todo) throw new Error('a todo ovjet is required')

        const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.done ? 'checked' : ''}>
            <label>${todo.descriptio}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">`;
        
        const LiElement = document.createElement('li');
        LiElement.innerHTML = html;
        LiElement.setAttribute('data-id', todo.id);

        if(todo.done) //como es un if corto se puede hacer asi
         LiElement.classList.add('completed');

        return LiElement;
}


