import { useState } from "react";
import { add } from "../store";
import ToDo from "../components/ToDo";
import { useSelector, useDispatch } from "react-redux";
import UseRefExample from "../components/UseRefExample";
import DefaultPropsExample from "../components/DefaultPropsExample";
import UseEffectExample from "../components/UseEffectExample";
function Home () {
    const [visible, setVisible] = useState(false);
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
            <UseRefExample/>
            <DefaultPropsExample name={3}/>
            <div>
                {visible && <UseEffectExample/>}
                <button onClick = {() => setVisible(!visible)}>
                    {visible ? '숨김' : '보임'}
                </button>
            </div>
            
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