import {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const URL= 'http://localhost:6700/courses';

const Products=()=>{
  const [title] = useState('Products')
  const [products,setproducts] = useState([]);
  const [img] = useState('/img/react.jpg')

  useEffect(() => {
    GetProducts();
  }, [])

  const GetProducts =()=>{
    axios.get(URL).then((res)=>{setproducts(res.data)}).catch((err)=>{console.log(`Rejected`,err)})
  }

  return(
    <div className="card mb-3">
    <div className="card-header bg-dark fw-bolder text-white">{title}</div>
    <div className="card-body">
    <ul className='p-0'>
              {
                products.map((course) => (
                <div className='card mb-2' key={course.id}>
                <div className='card-body d-flex gap-3 align-items-top p-2'>
                <div>
                <img src={img} alt='' className='rounded' width={200}/>
                </div>
                <div><h3>{course.title}</h3>
                <p className='m-0'>{course.description} | Course Duration : {course.duration}</p>
                <p className='m-0'>Price : {course.price} | Instructor - {course.instructor}</p>
                <div><Link to={`/newenquiry/${course.id}`} className='btn btn-success p-1 ps-5 pe-5 mt-2'>Enquire</Link></div>
                </div>
                </div>
                </div>
              ))}
      </ul>
    </div>
    </div>
  )

}
export default Products;