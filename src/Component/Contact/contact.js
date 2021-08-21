import React, {useState, useEffect} from "react";

import firebase from "../Firebase/index";
function MainContact(props){
    const isDarkTheme = props.isDarkTheme;
    const [response, setResponse] = useState(null);
    const [isPopup, setIsPopup] = useState(false);
    const [getID, setGetID] = useState(null);

    const callAPI = (user) => {
        console.log("calling APIs");
        fetch("http://localhost:8008/user/add", {
            method: "POST",
            headers:{
                "Content-type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(res => {
                setResponse(res)
                console.log(user)
            })

    }

    const getAPI = () => {
        fetch("http://localhost:8008/user")
            .then(res => res.json())
            .then(res => {
                console.log("res", res)
                setGetID(res);
                setGetID(res[res.length - 1].user_id + 1);
            })
    }

    // useEffect(() => {
    //     getAPI()
    //     // const id = getID.length;
    //     // console.log(id)
    // }, []);

    let userRequest = {
        user_id: getID,
        full_name: '',
        email: '',
        subject: '',
        message: ''
    }

    const submitFirebase = (user) => {
        if(user.full_name !== '' && user.email !== '' && user.subject !== '' && user.message !== ''){
            console.log(user);
            const todoRef = firebase.database().ref("todo");
            todoRef.push(user);
        }
        else{
            alert('Fill the all fields correctly!!')
        }

    }

    const handleSubmit = (user) => {
        
        if(userRequest.email !== '' && userRequest.full_name !== '' && userRequest.subject !== '', userRequest.message !== ''){
            console.log("user",user);
            callAPI(user);
            setResponse(user);
            setIsPopup(true);
        }else{
            alert("insert it")
        }
    }

    return(
        <>
            <div className={isDarkTheme ? 'dark-theme page' : 'light-theme page' }>
                <div className="page-heading">
                    <h1>CONTACT</h1>
                </div>
                <div className="half-split">
                    <div className="left-contact">
                        <div className="page-description contact">
                            <p>Looking for career in software or web development also interested in freelance opportunity.</p>
                            <p>However, if you have any other query then fill free to contact me.</p>
                        </div>
                        <div className="contact-form">
                            <form>
                                <div className="form-input">
                                    <div className="input-grid">
                                        <input type="text" placeholder="Full Name" name="name" 
                                            onChange={(e) => {
                                                userRequest.full_name = e.target.value
                                            }}
                                        />
                                        <input type="email" placeholder="Email" name="email" 
                                            onChange={(e) => userRequest.email = e.target.value}
                                        />
                                    </div>
                                </div>
                                <div className="form-input">
                                    <input type="text" placeholder="Subject" name="subject" 
                                        onChange={(e) => userRequest.subject = e.target.value}
                                    />
                                </div>
                                <div className="form-input">
                                    <textarea placeholder="Message" type="text" name="message"  
                                        onChange={(e) => userRequest.message = e.target.value}
                                    />
                                </div>
                                <button className="contact-btn" type="submit" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // handleSubmit(userRequest);
                                        submitFirebase(userRequest);
                                    }}
                                >SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                    <div className="google-map-container">
                        {/* <GoogleMap/> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainContact;