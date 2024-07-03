// import './App.css';
// import Accordionbt from './pages/Accordionbt';
// import Homepage from './pages/Homepage';
// import Navigation from './pages/Navigation';
// import State from './pages/State';
// import Userpage from './pages/Userpage';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//    <>
//     <div>

//       {/* <Navigation/>
//       <Accordionbt/> */}
//       {/* <h1 style={{color:"red",backgroundColor:"yellow"}}>Hello, React APP</h1>
//       <h1 className="head">External  CSS</h1> */}

//       <Homepage name="MS DHONI" age="42" city="CSK" />

//       <State/>

//       <Userpage />


//     </div>
//    </>
//   );
// }

// export default App;

// class(old), function(new)
// babel - browser to understand jsx code

// props - properties - class, function

// class - state, lifecyle

// function - react hooks - 
//  useState ,  useEffect , useReducer , useContext

import React, { createContext, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import State from './pages/State';
import Userpage from './pages/Userpage';
import NavigationBar from './pages/NavigationBar';
import ContextHome from './pages/context/ContextHome';

export const Name = createContext()

const App = () => {
  const [myname, setmyname] = useState("ADMIN")
  const [age, setage] = useState(20)
  return (
    <Name.Provider value={{myname,age}}>
    <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<Homepage name="MSD" age="42" city="CSK"/>} />
          <Route path='/state' element={<State/>} />
          <Route path='/user' element={<Userpage/>} />
          <Route path='/context' element={<ContextHome />} />
        </Routes>
    </BrowserRouter>
    </Name.Provider>
  )
}

export default App
