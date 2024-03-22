import {v4 as uuid} from 'uuid';


export class Todo {

    constructor (description){
        this.id = uuid();
        this.descriptio = description;
        this.done = false;
        this.createAt = new Date();
    }
}