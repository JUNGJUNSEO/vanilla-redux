import { useState } from "react";
import { add } from "../store";
import ToDo from "../components/ToDo";
import { useSelector, useDispatch } from "react-redux";

function Home () {
    const [text, setText] = useState("");
    const toDos = useSelector(state => state)
    const dispatch = useDispatch()
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(add(text));
        setText("");
    }

    return (
        <>
            <h1>To DO</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => (
                    <ToDo {...toDo} key={toDo.id}/>
                ))}
            </ul>
        </>
    )
}

// function mapStateToProps(state) {
//     return {toDos: state}
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         addToDo: text => dispatch(add(text))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Home);
export default Home