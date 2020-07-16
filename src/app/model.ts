import { analyzeAndValidateNgModules } from '@angular/compiler';

export class Model {
    user;
    items;

    constructor() {
        this.user = "Shubham";
        this.items = [
            new ToDoItem("Learn Bootstrap", false),
            new ToDoItem("Attend Another Lecture", false),
            new ToDoItem("Have A Lunch", false),
            new ToDoItem("Sleep", false),
        ]
    }
}

export class ToDoItem {
    action;
    done;
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}