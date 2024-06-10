import React, { useState } from 'react'
import Add from '../images/add.png'
import { auth, storage , db} from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
const Signup = () =>{
    
    const [err,setErr] = useState(false)

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

    try{    
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const storageRef = ref(storage, displayName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
    (error) => {
        setErr(true);
    }, 
    () => {
        
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        await updateProfile(res.user,{
            displayName,
            photoURL:downloadURL,
        });
        await setDoc(doc(db,"users", res.user.id),{
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
        });
        });
    }
    );


    }catch(err){
        setErr(true);
    }
      
    };
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
            <span className='logo'>WhatsOn</span>
            <span className='title'>Sign Up</span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Enter name'/>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <input style={{display:'none'}}type='file' id='file'/>
                    <label htmlFor='file'>
                        <img src={Add} alt=''/>
                        <span>Add avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Do have an account? Login</p>
            </div>
        </div>

    )
}

export default Signup
