import { legacy_createStore } from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO"; 

const addToDo = text => {
    return {
        type: ADD_TODO,
        text
    };
};

const deleteToDo = id => {
    return {
        type: DEL_TODO,
        id
    }
}
const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, {text: action.text, id: Date.now()}];
        case DEL_TODO:
            return state.filter(todo => action.id !== todo.id);
        default:
            return state;
    }
};

const store = legacy_createStore(reducer);
const dispatchAddToDo = text => {
    store.dispatch(addToDo(text))
};
const dispatchDeleteToDo = e => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id))
};

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.innerText = "삭제";
        button.addEventListener("click", dispatchDeleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(button);
        ul.appendChild(li);
    })
}

store.subscribe(paintToDos)

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value
    input.value = "";
    dispatchAddToDo(toDo)
}

form.addEventListener("submit", onSubmit)