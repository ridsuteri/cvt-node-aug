import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);
  let [formData, setFormData] = useState({});
  useEffect(
    () => {
      fetchData();
    }, [])


  const fetchData = () => {
    axios.get('http://localhost:8000/users').then((result) => {
      console.log(result)
      setUsers(result.data);
      setLoading(false);
    }).catch((err) => {
      console.log(err)
    })
  }

  const postData = (e)=>{
    e.preventDefault();
    console.log(formData)
    axios.post('http://localhost:8000/users', formData).then((result)=>{
      console.log(result.data.message);
    }).catch((err)=>{
      console.log(err)
    })
    setFormData({});
  }

  const updateUser = ()=>{
    
  }

  const changeHandler = (key, value)=>{
    setFormData({
      ...formData,
      [key]: value
    })
  }
  return (
    <>
      <h1>Welcome to admin dashboard</h1>
      <form action="" onSubmit={(e)=>postData(e)}>
        <input type="text" name='firstName' placeholder='Enter first name' onChange={(e)=>changeHandler(e.target.name, e.target.value)} /> <br />
        <input type="text" name='lastName' placeholder='Enter last name' onChange={(e)=>changeHandler(e.target.name, e.target.value)} /> <br />
        <input type="number" name='uidaiNo' placeholder='Enter Aadhar no.' onChange={(e)=>changeHandler(e.target.name, e.target.value)} /> <br />
        <button>Submit details</button>
      </form>

      <hr />
      <h2>Users from db :</h2>
      <ol>
        {loading ? <>Loading.....</> : users.map((user) => (
          <li key={user._id}>
            <span>{user.firstName}</span> - <span>{user.lastName}</span> - <span>{user.uidaiNo}</span>
          </li>
        ))}
      </ol>
    </>
  )
}

export default App
