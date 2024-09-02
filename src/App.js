import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import FunctionMethod from "./components/FunctionMethod";

// function App() {
//   return (
//     <div className="App">
//        <input type='text' placeholder='Enter User Name' name='username'/>
//     </div>
//   );
// }

// for onChange()
// function App(){
//   const [data,setData] = useState("");
//   return (
//     <div className='App'>
//       <h1>Test onChange event with Input Text</h1>
//       <input type='text' value={data} onChange={(e)=>{setData(e.target.value+'test')}}/>
//     </div>
//   )
// }

// Click event test Case
// function App(){
//   const [data,setData]= useState('');
//   return (
//     <div className='App'>
//        <h1>Test Click Event with Button</h1>
//        <button onClick={()=>setData("hello")}>Update Data</button>
//        <h1>{data}</h1>
//     </div>
//   );
// }

// function App(){
//   return(
//     <FunctionMethod/>
//   )
// }

// function App(){
//   return  (
//       <div className="getRole">
//       <h1>getByRoleQuery</h1>
//       <input type="text" defaultValue='hello'/>
//       <button>click</button>
//       </div>
//   );
//   }



// get by role Query ............................
// function App() {
//   return (
//     <div className="app">

//       <h1>Multiple Item with Role</h1>
//       <h1>Custom Role</h1>

//       <button>Click 1</button>
//       <button>Click 2</button>

//       <label htmlFor="input1">UserName</label>
//       <input type="text" id="input1" />
//       <label htmlFor="input2">City</label>
//       <input type="text" id="input2" />

//       <div role="dummy">hello</div>

//     </div>
//   );
// }







// get All By Role Query...............................
// function App(){
//   return (
//     <div className="app">
//   <h1>RTL Query : getAllByRole </h1>
//   <button>Click Me</button>
//   <button>Click Me</button>
//   <button>Click Me</button>
//   <button>Click Me</button>
//   <button>Click Me</button>
//   <button>Click Me</button>
//   <button>Click Me</button>
//   <button>Click Me</button>


//   <select>
//     <option>1</option>
//     <option>2</option>
//     <option>3</option>
//   </select>

//     </div>
//   )
// }





// get by label Text .....................
// function App(){
//   return(
//     <div className="app">
// <h1>RTL Query : get By Label Text</h1>
// <label htmlFor="username">UserName</label>
// <input type="text" id="username" />
// <br/>
// <label htmlFor="skills">Skills</label>
// <input type="checkbox" id="skills"/>

// <label htmlFor="gender">Gender</label>
// <input type="radio" value='male' id="gender"/>
// <input type="radio" value='Female' id="gender"/>
//     </div>
//   )
// }



// get all by label Text..................
// function App(){
//   return (
//    <div className="app">
//     <h1>RTL Query : get All By Label Text</h1>
//     <label htmlFor="username1">Username</label>
//     <input type="text" id="username1"/>

//     <label htmlFor="username2">Username</label>
//     <input type="text" id="username2"/>

//     <label htmlFor="username3">Username</label>
//     <input type="text" id="username3"/>

//     <label htmlFor="username4">Username</label>
//     <input type="text" id="username4"/>
    
//    </div>    
//   )
// }





//  getBy Placeholder Text................

// function App(){
//   return(
//     <div className="app">
// <h1>get By Placeholder Text</h1>
// <input type="text" placeholder="enter username"/>
//     </div>
//   )
// }



//  get All By Placeholder Text................
function App(){
  return(
    <div className="app">
<h1>get By Placeholder Text</h1>
<input type="text" placeholder="enter username"/>
<input type="text" placeholder="enter username"/>
<input type="text" placeholder="enter username"/>
<input type="text" placeholder="enter username"/>
    </div>
  )
}
export default App;
