import React, {useState} from "react";
import firebase from "../Firebase/index";

function Form(){
    const [title, setTitle]  = useState('');

    const createData = () => {
        alert('submitting')
        const todoRef = firebase.database().ref("todo");
        const todo = {
            title,
            complete: false
        }
        todoRef.push(todo);
    }
    return(
        <>
            <div>
                <input type="text" onChange={(e) => setTitle(e.target.value)}/>
                <button onClick={createData}>add to do</button>
            </div>
        </>
    )
}
export default Form;