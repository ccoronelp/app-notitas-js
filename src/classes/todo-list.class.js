//Aquí voy a crear mi arreglo  donde agregaré mis tareas y tambeén crearé los métodos que 

import { Todo } from "./todo.class";

// me permitirán manipular mi arreglo
export class TodoList {
    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todos = this.todos.filter( todo=> todo.id != id);
        this.guardarLocalStorage();
    }

    
    // este método me permite manipular el estado completado de mi objeto
    // puede ser true o false y dependiendo de eso se marcará como: checket y completed
    marcarCompletado(id){
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo=> !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));

    }

    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];
        this.todos = this.todos.map( obj => Todo.fromJson(obj) );
        // console.log(this.todos);
    }


}