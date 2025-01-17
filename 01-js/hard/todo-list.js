/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.todolist = []}
  add(todo){
    this.todolist.push(todo)
  }
  remove(indexoftodo){
    this.todolist.splice(indexoftodo,indexoftodo)
  }
  update(index,updatedtodo){
    this.todolist.splice(index,0,updatedtodo)
  }
  getAll(){
    return console.log(this.todolist)
  }
  get(indexoftodo){
    return console.log(this.todolist[indexoftodo])
  }
  clear(){
    todolist.splice(0,this.todolist.length)
  }

}

module.exports = Todo;
