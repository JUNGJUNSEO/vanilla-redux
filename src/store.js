import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { legacy_createStore } from 'redux';

// const ADD = "ADD";
// const DEL = "DEL";

// const addToDo = (text) => {
//     return {
//         type: ADD,
//         text
//     }
// }

// const delToDo = (id) => {
//     return {
//         type: DEL,
//         id
//     }
// }

const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now()})
        },
        del: (state, action) => 
            state.filter(toDo => action.payload !== toDo.id)
    }
});
// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case ADD:
//             return [...state, {text: action.text, id: Date.now()}];
//         case DEL:
//             return state.filter((todo) => todo.id !== action.id);
//         default:
//             return state;
//     };   
// };

export const {add, del} = toDos.actions

// const store = legacy_createStore(reducer);
const store = configureStore({ reducer: toDos.reducer })
// export const actionCreators = {
//     addToDo,
//     delToDo
// };

export default store;