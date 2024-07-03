// import React from 'react'

// const Home3 = ({myname}) => {
//   return (
//     <div>
//         <h1>Home 3 Page</h1>
//         <h3>My name is {myname} </h3>
//     </div>
//   )
// }

// export default Home3

import React, { useContext } from 'react'
import { Name } from '../../App'

const Home3 = () => {
    const value = useContext(Name)
    // value = {myname:"ADMIN",age:20}
  return (
    <div>
        <h1>Home 3 Page</h1>
        <h3>My name is {value.myname} , my age is {value.age} </h3>
    </div>
  )
}

export default Home3