import { useState } from "react";
import axios from 'axios';
const { useEffect } = require("react")

const Enquirys=()=>{ 
  const courseURL = 'http://localhost:6700/courses';
  const enquirysURL = 'http://localhost:6700/enquiries';
  const [courses,setcourses] = useState([]);
  const [enquirys,setenquirys] = useState([]);

  useEffect(() => {
    GetProducts();
  }, [])
  
  const GetProducts =()=>{
    axios.get(courseURL).then((res)=>{setcourses(res.data)}).catch((err)=>{console.log(`Rejected`,err)})
    axios.get(enquirysURL).then((res)=>{setenquirys(res.data)}).catch((err)=>{console.log(`Rejected`,err)})
  }

return(
    <div className="card">
    <div className="card-header bg-dark text-white">Course Enquirys</div>
    <div className="card-body">
    {
      enquirys.map((enq)=>
      <li key={enq.id}>{enq.firstName} {enq.lastName}</li>
      )
    }
    </div>
    </div>
)
}

export default Enquirys;