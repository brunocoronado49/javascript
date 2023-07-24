import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: "all",
    Completed: "completed",
    Pending: "pending"
};

const state = {
    todos: [
        new Todo("Piedra del alma"),
        new Todo("Piedra del infinito"),
        new Todo("Piedra del tiempo")
    ],
    filter: Filters.All
};

const initStore = () => {
    console.log(state);
    console.log("Init Store");
};

const loadStore = () => {
    throw new Error("No implemented");
};

/**
 *
 * @param {String} description
 */
const addTodo = (description) => {
    throw new Error("No implemented");
};

const toggleTodo = (todoId) => {
    throw new Error("No implemented");
};

const deleteTodo = (todoId) => {
    throw new Error("No implemented");
};

const deleteCompleted = () => {
    throw new Error("No implemented");
};

const setFilter = (newFilter = Filters.All) => {
    throw new Error("No implemented");
};

const getCurrentFlter = () => {
    throw new Error("No implemented");
};

export default {
    initStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFlter
};
