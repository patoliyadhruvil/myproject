import { useState } from "react";
import "./Controlled.css"

const Controlled = () =>{

    const [name , setName] = useState('');
    const [n , setN] = useState('');
    const [email , setEmail] = useState('');
    const [e , setE] = useState('');
    const [age , setAge] = useState('');
    const [a , setA] = useState('');

    const HandleChange = (e) =>{

        console.log("Change event" , e.target.value);
        setName(e.target.value)
        
    }

    const HandleEmail = (e)=>{

        console.log("Email : " , e.target.value);
        setEmail(e.target.value);

    }

    const HandleAge = (e) =>{

        console.log("Age : " , e.target.value);
        setAge(e.target.value)

    }
    

    const HandleSubmit = (e) =>{
        
        e.preventDefault();
        console.log("Hello");
        setN(name);
        setName('');
        setE(email);
        setEmail('');
        setA(age);
        setAge('');

    }



    return(

        <div>
            <form onSubmit={HandleSubmit}>
                <label>Enter the Name : </label>
                <input type="text" name="name" value={name} onChange={HandleChange}/>
                <br />
                <br />
                <label> Enter The Email : </label>
                <input type="email" name="email" value={email} onChange={HandleEmail}/>
                <br />
                <br />
                <label> Enter The Age : </label>
                <input type="number" name="age" value={age} onChange={HandleAge}/>
                <br />
                <br />
                <button type="submit" className="top">
                    Submit
                </button>
            </form>
            <h1>
                {name}
            </h1>

            <h2>
                {n}
            </h2>

            <h1>
                {email}
            </h1>

            <h2>
                {e}
            </h2>

            <h1>
                {age}
            </h1>

            <h2>
                {a}
            </h2>
        </div>

    )

}
export default Controlled;