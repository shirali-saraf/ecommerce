"use client";
// import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { backimage } from "./backimage.jpg";
import { useEffect, useState } from "react";
import "./products/style.css"
import image1 from 'C:/Users/dell/React_default/nextjs/work/ecommerce/public/images/image1.jpg';
import image2 from 'C:/Users/dell/React_default/nextjs/work/ecommerce/public/images/image2.jpg';
import image3 from 'C:/Users/dell/React_default/nextjs/work/ecommerce/public/images/image3.jpg';
import items from "C:/Users/dell/React_default/nextjs/work/ecommerce/public/Items.json";
import { Carousel } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa"; 
import { add } from "@/Redux/Cartslice"; 

import "./globals.css";
import Link from "next/link";
import { useDispatch } from "react-redux"; 

export default function Home() {  
  const dispatch=useDispatch();
  const handleadd = (product) => {
    dispatch(add(product));
    alert("Product added to the cart" + "<Link herf='/cart'>" + "</Link>");
  };
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const [data,setdata]=useState([]);
  const [category,setcategory]=useState([]);
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=8')
            .then(res=>res.json())
            .then(val=>setdata(val));
},[])

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/categories')
            .then(res=>res.json())
            .then(val=>setcategory(val));
    console.log(category)

  },[])

  return (
    <div className="HomePage">
      {/* <div className="HomeContainer w-100">
        <div className="d-flex HomeContent m-5 p-5">
          <div className="text-center text-light">
            <h1>Shoppy</h1>
          </div>
          <div className=" text-light text-center w-75">
            <h5>
              The place to be for all of your shopping needs,Buy fair-trade
              products from companies that have sustainable practices
            </h5>
            <button
              className="btn btn-primary btn-md text-center"
              style={{ width: "120px" }}
            >
              Find Products
            </button>
          </div>
        </div>
      </div> */}


<Carousel fade>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Image  src={image1}
      alt="Landscape picture" 
      // width={60}  
      // height={55} 
      className="" style={{height:"85vh",width:"100%"}}/>
        <Carousel.Caption>
          <h3 className="text-dark"> The place to be for all of your shopping needs,Buy fair-trade
              products from companies that have sustainable practices</h3>
              <button
              className="btn btn-primary btn-md text-center"
              style={{ width: "120px" }}
            >
              Find Products
            </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Image  src={image2}
      alt="Landscape picture" 
      // width={60}  
      // height={55} 
      className="" style={{height:"85vh",width:"100%"}}/>
        <Carousel.Caption>
          <h3 className="text-dark"> The place to be for all of your shopping needs,Buy fair-trade
              products from companies that have sustainable practices</h3>
              <button
              className="btn btn-primary btn-md text-center"
              style={{ width: "120px" }}
            >
              Find Products
            </button>
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Image  src={image3}
      alt="Landscape picture" 
      // width={500}  
      // height={505} 
      className="" style={{height:"85vh",width:"100%"}}/>
        <Carousel.Caption>
          <h3> The place to be for all of your shopping needs,Buy fair-trade
              products from companies that have sustainable practices</h3>
              <button
              className="btn btn-primary btn-md text-center"
              style={{ width: "120px" }}
            >
              Find Products
            </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
      <div className="d-flex flex-column align-items-center justify-content-center w-100 FeaturedProductsContainer">
        <div className="d-flex justify-content-between border-bottom px-3 " style={{width:'100%'}}>
          <p className="DesignFont">Categories</p>
          <span>See all</span>
        </div>
        <div className="w-100">
          <div className="CategoryImage"> 
            {
              category.map((item)=>(
                <div>
                <img src={item.image} className="" style={{width:"250px",height:"250px",marginRight:'10px'}}/>
                <h5 className="text-center">{item.name}</h5>
                </div>
              ))
            }
          </div>
        </div>
      </div>


      <div className="d-flex flex-column align-items-center justify-content-center w-100 FeaturedProductsContainer">
        <div className="d-flex justify-content-between border-bottom px-3 " style={{width:'100%'}}>
          <p className="DesignFont">Featured Products</p>
          <span>See all</span>
        </div>
        <div>
          <div className="d-flex flex-wrap justify-content-between"> 
            
           { 
            data.map((items)=>(
              <main>
              <div className="card">
                <div className="ImageContainer">
                  
                  <img
                  src={items.image}
                  alt=""
                  />
                  <FaRegHeart style={{width:'30px'}}/>
                </div>
                <div className="">
                  <h2 className="card-content">{items.title}</h2>
                  <p>
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
            ))
           }
          </div>
        </div>
      </div>

    </div>
  );
}
