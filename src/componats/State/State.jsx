import {useState} from "react";

const State = () =>{

    const [user , setuser] = useState("project")

    const [count , setcount] = useState(0)

    const changeName = () =>{

        setuser("Raj")
        setcount(count+1);

    }
    setTimeout(changeName , 100);

    return(

        <div>
            <h1>
                Good morning, {user}
            </h1>
            <p>
                {count}
            </p>
        </div>

    )

}
export default State