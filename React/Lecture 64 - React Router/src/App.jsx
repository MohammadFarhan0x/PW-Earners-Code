import { useState } from "react";
import { Link, Outlet, Route, Routes, useParams } from "react-router"
import NoPageFound from "./components/NoPageFound";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const products = [
  {
    id: 1,
    title : "Mac book Air"
  },
  {
    id: 2,
    title : "Samsung galaxy s26 ultra"
  }
]

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        {
          products.map((p) => <section><Link to={`/product-page/${p.id}`}>{p.title}</Link></section>)
        }
      </div>
    </div>
  );
}

function ProductPage() {
  const { id } = useParams()
  

  const data = products.find((p) => p.id === Number(id))



  return (
    <div>
      <h1>Product Page</h1>
      {data ? <p>{data.title}</p> : "No Product found"}
    </div>
  );
}



function AboutUs() {
  return (
    <div>
      <h1>About us</h1>
    </div>
  );
}

function Navbar() {
  return (
    <>
      <ul>
        <Link to={"/"} >Home</Link>
        <br />
        <Link to={"/product-page"}>Product Page</Link>
        <br />
        <Link to={"/about-us"}>About Us</Link>
        <br />
        <Link to={"/login"}>Login</Link>
        <br />
        <a href="/contact-us">Contact</a>
      </ul>
      <Outlet/>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home/>} />
        <Route path="/product-page/:id" element={<ProductPage/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Route>
      <Route path="/contact-us" element={<h1>Contact Us</h1>} />
      <Route path="/login" element={<Login/>} />

      <Route path="*" element={<NoPageFound/>} />
   </Routes>
  )
}

export default App;
