"use client";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "./globals.css";
import { NavLink } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from 'C:/Users/dell/React_default/nextjs/work/ecommerce/public/images/logo.png';
// import logo from ';
   
export default function Navbar() {
  const router=useRouter();
  return (
    <div className="NavbarContainer"> 
      <nav className="navbar navbar-expand-lg bg-dark p-1 text-light">
        <div className="container-fluid">
            {/* <img src="./images/logo.png" alt="Logo" style={{height:"30px",width:"30px"}}/> */}
            {/* <img src={logo} alt="Logo" style={{height:"30px",width:"30px"}}/> */}
            <Image  src={logo}
      alt="Landscape picture" 
      width={60}  
      height={55} className="m-2"/>
          <button 
            className="navbar-toggler"   
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" href={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href={"/about"}>
                  About US
                </Link>
              </li>

              <li className="nav-item">
                <Link href='/products' className="nav-link text-light ">Products</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 border-rounded rounded-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <span className="m-2" onClick={()=>router.push('/cart')}>
            <FaShoppingCart style={{height:"30px",fontSize:"1.5rem",cursor:"pointer"}}/>           
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
