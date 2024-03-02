import React, {useEffect, useState} from 'react'
import axios from 'axios'; 

export default function Home() {
    const [data, setData] = useState([]); 
    useEffect(()=>{
        axios.get('http://localhost:8081')
        .then(res => setData(res.data))
        .catch(err => console.log(err)); 
    },[])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {data.map((employee, index) => {
                    return <tr key ={index}>
                        <td>{employee.id}</td>
                        <td>{employee.first_name +" " + employee.last_name}</td>
                        <td>{employee.username}</td>
                    </tr>
                })}
            </tbody>
        </table>
      </div>
    </div>
  )
}
