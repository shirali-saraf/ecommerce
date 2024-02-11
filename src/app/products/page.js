"use client";
import "./style.css";
import "../globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { add } from "@/Redux/Cartslice";
export default function Page() {
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((val) => setdata(val));
  }, []);

  const handleadd = (product) => {
    dispatch(add(product));
    alert("Product added to the cart" + "<Link herf='/cart'>" + "</Link>");
  };
  return (
    <div className="ProductsPage pe-3 ps-3">
      <div className="d-flex w-100 justify-content-center align-items-center" style={{borderBottom:"1px solid #04b0b0",boxShadow:"0px 1px 3px 0px #04b0b0"}}>
        <div className="d-flex align-items-center justify-content-center w-75" style={{color:"#04b0b0",fontSize:"1.1rem"}}>
          <span className="p-3">Mens</span>
          <span className="p-3">Womens</span>
          <span className="p-3">Kids</span>
          <span className="p-3">Gifts</span> 
          <span className="p-3">Brands</span>
          <span className="p-3">Home and Kitchen</span>
        </div>
      </div>
      <div className="DesignFont text-center p-1" >All Products</div>
      {/* <div className="d-flex flex-wrap justify-content-evenly"> */}
      <div className="container">
      <div className="row">
        {data.map((items) => (
          <main className="col-lg-3 col-md-4 col-sm-2">
            <div class="card">
              {/* <img
                  src={items.image}
                  alt="" 
                /> */}
              <div className="ImageContainer">
                <img src={items.image} alt="" />
                <FaRegHeart style={{ width: "30px" }} />
              </div>
              <div class="">
                <h2 class="card-content">{items.title}</h2><br/>
                <h6 class="card-content">{items.price}</h6>
                <p>
                  {/* <span>Price</span> */}
                  <button className=" ItemBtn" onClick={() => handleadd(items)}>
                    Add To Cart
                  </button>
                  <button className=" ItemBtn">Buy Now</button>
                </p>
                <Link href="#" className="button">
                  <span className="material-symbols-outlined"></span>
                </Link>
              </div>
            </div>
          </main>
        ))}
      </div>
      </div>

    </div>
  );
}

// export const getServerSideProps = async ()=>{
//     const data= await(await fetch ("https://fakestoreapi.com/products/1")).json();
// }
