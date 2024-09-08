import React from 'react'
import { useState } from 'react'

export default function Login () {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const submit=()=>{
        console.log('submitted')
        console.log(email)
        console.log(password)
        setEmail('');
        setPassword('');


     let   data={
            "username":email,
            "password":password
        }


        fetch('https://dummyjson.com/auth/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data)
        }).then(response =>{ 
            if(!response.ok){
                throw new Error('Invalid username or password');
            }
           return response.json();

        })
        .then(data =>{
            console.log(data)
            if(data.token){
                localStorage.setItem('token',data.token);
                console.log('Login successful! Redirecting...');
            if (data.username==='michaelw'){
              window.location.href="/admin"
            }
            if (data.username==="emilys"){
                window.location.href="/enduser"
            }
            }
           
        } )
        .catch(error => {
           console.log('error',error)
          });
    }

  return (
    <div className="container ">
        <form className='col-md-6 offset-3 mt-5'>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="character"name="username" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" value={password}className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)}/>
        </div>
       
        <button type="button" className="btn btn-primary" onClick={submit}>Submit</button>
        </form>
   </div>

  )
}
