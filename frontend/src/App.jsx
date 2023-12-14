import React, { useEffect, useState } from "react"
function App(){
  const[data , setData] = useState([])
  useEffect(() =>{
 fetch('http://localhost:8000/users')
 .then(res => res.json())
 .then(data =>  setData(data))
 .catch(err => console.log(err))
  }, [])
  return(
    <div style ={{padding : "50px"}}>
      <table>
        <thread>
          <th>ID</th>
          <th>name</th>
          <th>phone</th>
          <th>email</th>
        </thread>
        <tbody>
          {data.map(d =>(
            <tr key = {i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.phone}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
export default App