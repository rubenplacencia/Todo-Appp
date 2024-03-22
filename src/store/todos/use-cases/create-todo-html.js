import todoStore from "../../todo.store";



export const createTodoHTML = (todo) => {
        if(!todo) throw new Error('a todo ovjet is required')

        const html = `<h1>${todo.descriptio}</h1>`;
        
        const LiElement = document.createElement('li');
        LiElement.innerHTML = html;

        return LiElement;
}