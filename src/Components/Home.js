import { useState } from "react"

const Home =()=>{
  const [img] = useState('/img/Home.jpg')
  return(
    <div className="card shadow-lg">
      <div className="card-header bg-dark text-white">Home</div>
      <div className="card-body m-auto">
      <img src={img} alt="" width={700}/>
      </div>
      </div>
  )
}

export default Home
