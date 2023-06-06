import { useState } from "react";
import axios from 'axios';
const { useEffect } = require("react")


const Enquirys=()=>{ 
  const courseURL = 'http://localhost:6700/courses';
  const enquirysURL = 'http://localhost:6700/enquiries';
  const [courses,setcourses] = useState([]);
  const [enquirys,setenquirys] = useState([]);
  const [img] = useState('/img/react.jpg')

  useEffect(() => {
    GetProducts();
  }, [])
  
  const GetProducts =()=>{
    axios.get(courseURL).then((res)=>{setcourses(res.data)}).catch((err)=>{console.log(`Rejected`,err)})
    axios.get(enquirysURL).then((res)=>{setenquirys(res.data)}).catch((err)=>{console.log(`Rejected`,err)})
  }

return(
  <div className="card shadow-lg mb-3">
      <div className="card-header bg-dark text-white">Course Enquirys</div>
      <div className="card-body">
        {enquirys.flatMap((enq) => {
          const matchingCourses = courses.filter((course) => enq.selected_course === course.id);
          return matchingCourses.map((course) => (
            <div className="card mb-3 shadow" key={enq.id}>
              <div className="card-body p-2 d-flex align-items-start gap-3">
              <div className="p-0 d-flex align-items-start gap-3">
              <div><img src={img} alt="" width={151} className="rounded img-thumbnail shadow"/></div>
              <div>
                <p className="fs-10 m-0">Selected Course : <h6 className="m-0 d-inline">{course.title}</h6></p>
                <p className="m-0">Description : {course.description}</p>
                <p className="m-0">Price : {course.price}</p>
                <p className="m-0">Duration : {course.duration}</p>
              </div>
              </div>
              <div className="border-start ps-3 border-3" >
              <p className="m-0">Name : <h6 className="m-0 d-inline">{enq.firstName}  {enq.lastName}</h6></p>
              <p className="m-0">Contact No : <a className="link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover link-primary" href={`tel:${enq.phone}`}>{enq.phone}</a></p>
              <p className="m-0">Email : <a className="link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover link-primary" href= {`mailto: ${enq.email}`}>{enq.email}</a></p>
              </div>
              </div>
            </div>
          ));
        })}
      </div>
    </div>
)
}

export default Enquirys;