import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function Dashboard() {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  let [formData, setFormData] = useState({});
  useEffect(
    () => {
      fetchData();
    }, [])


  const fetchData = () => {
    axios.get(`${baseUrl}/products`).then((result) => {
      console.log(result)
      setProducts(result.data);
      setLoading(false);
    }).catch((err) => {
      console.log(err)
    })
  }

  const postData = (e)=>{
    e.preventDefault();
    console.log(formData)
    axios.post('http://localhost:8000/products', formData).then((result)=>{
      console.log(result.data.message);
    }).catch((err)=>{
      console.log(err)
    })
    setFormData({});
  }

  // const updateUser = ()=>{
    
  // }

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
        <input type="text" name='name' placeholder='Enter product title' onChange={(e)=>changeHandler(e.target.name, e.target.value)} /> <br />
        <input type="text" name='description' placeholder='Enter product description' onChange={(e)=>changeHandler(e.target.name, e.target.value)} /> <br />
        <input type="number" name='price' placeholder='Enter Price' onChange={(e)=>changeHandler(e.target.name, e.target.value)} /> <br />
        <button>Submit details</button>
      </form>

      <hr />
      <h2>Products from db :</h2>
      <ol>
        {loading ? <>Loading.....</> : products.map((product) => (
          <li key={product._id}>
            <span>{product.name}</span> - <span>{product.description}</span> - <span> Rs. {product.price}</span>
          </li>
        ))}
      </ol>
    </>
  )
}

export default Dashboard
