import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,Link, Navigate, useNavigate } from "react-router-dom";


const NewData=(props)=>{
  const navigate = useNavigate()
  const [selectedCourse,setselectedCourse] =useState({});
  const URL= 'http://localhost:6700/courses';
  const {id} = useParams();
  const [img] = useState('/img/react.jpg')


  useEffect(()=>{
    axios.get(`${URL}/${id}`).then((res)=>{ setselectedCourse(res.data)})
  },[id])

  const newUserRec = {
    id:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    selected_course:''
  }

  const [user,setuser]= useState(newUserRec)

  const handelInputChanges =(e)=>{
    const {name,value} = e.target
    setuser({ ...user,[name]:value,selected_course: selectedCourse.id})
    console.log(user)
  }
  const AddingNewUser=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:6700/enquiries',user).then((res)=>console.log(res)).catch((err)=>{console.log(err)})
    setuser(newUserRec);
    navigate('/products');
  }

  return(
    <div className="card">
      <div className="card-body d-flex justify-content-center">
      <form onSubmit={AddingNewUser} className="w-50" >
      <div className="row">
      <div className="col-12">
      <div className='card mb-2' key={selectedCourse.id}>
                <div className='card-body d-flex gap-3 align-items-top p-2'>
                <div>
                <img src={img} alt='' className='rounded' width={200}/>
                </div>
                <div><h3>{selectedCourse.title}</h3>
                <p className='m-0'>{selectedCourse.description} | Course Duration : {selectedCourse.duration}</p>
                <p className='m-0'>Price : {selectedCourse.price} | Instructor - {selectedCourse.instructor}</p>
                </div>
                </div>
                </div>
      </div>
      </div>
         <div className="row">
         <div className="col-6">
          <div className="input-group mb-3">
           <input type="text" name="firstName" className="form-control" value={user.firstName} placeholder="First Name" onChange={handelInputChanges}/>
          </div>
         </div>
         <div className="col-6">
          <div className="input-group mb-3">
           <input type="text" name="lastName" className="form-control" value={user.lastName} placeholder="Last Name" onChange={handelInputChanges}/>
          </div>
         </div>
         </div>
         <div className="row">
         <div className="col-12">
          <div className="input-group mb-3">
           <input type="text"   name="email" className="form-control" value={user.email} placeholder="Ex:jone123@gmail.com" onChange={handelInputChanges}/>
          </div>
         </div>
         </div>
         <div className="row">
         <div className="col-12">
          <div className="input-group mb-3">
           <input type="text" name="phone" className="form-control" value={user.phone} placeholder="Phone :+91 8569314755" onChange={handelInputChanges}/>
          </div>
         </div>
         </div>
         <div>
         <button type="submit" className="btn btn-success">Submit</button>
         </div>
      </form>
      </div>
      </div>
  )
}

export default NewData;
