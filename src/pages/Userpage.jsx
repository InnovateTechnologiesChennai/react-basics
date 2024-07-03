//rfc 
//rfce
// rafce
// import React from 'react'

// const Userpage = () => {
//   return (
//     <>
//     <h2>USERPAGE</h2>
//     </>
//   )
// }

// export default Userpage

// import React from 'react'

//  class Userpage extends React.Component {
//   render() {
//     return (
//         <>
//         <h1 className='user'>USER PAGE - CLASS COMPONENT</h1>
//         </>
//       )
//   }
// }

// export default Userpage

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
const Userpage = () => {
  const nav = useNavigate()
  const handleBack = () =>{
    nav('/')
  }
  return (
    <>
    <h1>USER PAGE</h1>
    <h2><FaHome className='icon'  onClick={handleBack}/></h2>
    <hr />
    <button onClick={handleBack}>BACK TO HOMEPAGE</button>
    </>
  )
}

export default Userpage
