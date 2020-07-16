import { Component } from '@angular/core';
import { Model, ToDoItem } from './model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Shubham';
  UModel = new Model();

  getName() {
    return this.UModel.user;
  }

  getToDoItems() {
    // return this.UModel.items;
    return this.UModel.items.filter(function (item) {
      return !item.done;
    });
  }

  addItem(s: String) {
    this.UModel.items.push(new ToDoItem(s, false));
  }
}


