// import React from 'react'
// import Button from 'react-bootstrap/Button';

// const Homepage = (props) =>{
//     // props={name:"MS DHONI",age:42}
//     return(
//         <>
//         <h1>Hello My name is {props.name} , my age is {props.age} </h1>

//         {/* <button className='login'>Login</button>
//         <Button variant='success'>Login</Button> */}
//         </>
//     )
// }

// export default Homepage

import React from 'react'

const Homepage = ({name,age,city}) => {
  return (
    <>
    <h3>Props : </h3>
    <h1>Hello My name is {name} , my age is {age} , I play for {city} </h1>
    </>
  )
}

export default Homepage