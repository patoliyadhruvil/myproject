import { useState } from 'react'
import Heading from './componats/Heading/Heading';
import List from './componats/List/List';
import Welcome from './componats/ClassCom/ClassList';
import Test from './componats/Test/Test';
import State from './componats/State/State';
import Controlled from './componats/Controlled/Controlled';
import './App.css'

function App() {
 
  let lists = ["Laptop" , "Mobile" , "Headphone" , "Buds" , "Earphone"];

    return(
      <div>
        {/* <Welcome name="Dhruvil patoliya"/>
        <Heading/>
        <List menu={lists} name="Dhruvil patoliya"/>
        <Test/>
        <<State/> */}
        <Controlled/>
      </div>

    )

}

export default App;
