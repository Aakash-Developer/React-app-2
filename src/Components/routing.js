import { BrowserRouter, Route,Link, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import NewData from "./newdata";
import Enquirys from "./enquirys";


const Routing =()=>{
  return(
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-dark fw-bolder mb-3 text-white rounded">
          <div className="container-fluid">
          <Link to='/' className="navbar-brand text-white">MyApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link to='/home' className="nav-link active text-white" aria-current="page">Home</Link>
          <Link to='/products' className="nav-link text-white">Products</Link>
          <Link to='/enquirys' className="nav-link text-white">Enquirys</Link>
          </div>
          </div>
          </div>
      </nav>
      <div>
      <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/home" Component={Home}></Route>
          <Route exact path="/products" Component={Products}></Route>
          <Route exact path="/enquirys" Component={Enquirys}></Route>
          <Route exact path="/newenquiry/:id" Component={NewData}></Route>
      </Routes>
      </div>
      </BrowserRouter>
  )
}

export default Routing;