"use client"
import { useEffect, useState } from 'react'
import '../products/style.css'
import { GiCancel } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '@/Redux/Cartslice';
import CartPage from '../cartPage';
export default function Page(){
    const [quant,setquant]=useState(1);
    const [number,setnumber]=useState(0);
    const [price,setprice]=useState(1);
    const dispatch=useDispatch();
    const cartitems=useSelector((state)=>state.cart)

    // const updateQuantity = (id, value) => {
    //     cartitems.map((item) => item.id == id) &&
    //     setquant((prevState) => prevState + value);   
    // }
    const increment=(id)=>{
        alert(id);
    }
    const decrement=(id)=>{
        let updated = cartitems.map((curr)=>{
            if(curr.id==id){
                let incamt=curr.quant+1;
                return{
                    ...curr,
                    quant:incamt,
                };
            }
            else{
                return curr;
            }
        })
    }
    // useEffect(()=>{
    //     const total=price*quant;
    //     setprice(total)

    // },[quant])

    const handleremove=(id)=>{
        dispatch(remove(id));
    }

    return(
        <div className="ProductsPage p-5">
            <div className='text-center'><h2>Your Cart ({cartitems.length > 1 ? `${cartitems.length} items` : `${cartitems.length} item`}
)</h2></div>
            <div className='d-flex w-100 p-3'>
                <div className='CartLeft '>
                    <div className='d-flex border-bottom'>
                       <div className='' style={{width:'40%'}}><h5>Item</h5></div>
                       <div className='' style={{width:'20%'}}><h5>Price</h5></div>
                       <div className='' style={{width:'20%'}}><h5>Quantity</h5></div>
                       <div className='' style={{width:'20%'}}><h5>Total</h5></div>

                    </div>
                    {
                        cartitems.map((val)=>(
                        //     <div className='d-flex CartContainer align-items-center' key={val.id}>
                        //     <div className='py-3' style={{width:'40%'}}>
                        //         <img src={val.image} alt='CartImage' className='CartImage'/>
                        //         <h6>{val.title}</h6>
                        //     </div>
                        //     <div className='py-3' style={{width:'20%'}}><h6>{val.price}</h6></div>
                        //     <div className='py-3' style={{width:'20%'}}>
                        //      <span >
                        //      <span className='QuantityFont cursor' onClick={()=>updateQuantity(val.id, 1)}>+</span>
                        //      <span className='QuantityFont'>{quant}</span>
                        //      <span className='QuantityFont cursor' onClick={()=>updateQuantity(val.id, -1)}>-</span>
                        //      </span>
                        //      </div>
                        //     <div className='py-3' style={{width:'15%'}}><h6>{price}</h6></div>
                        //     <div><span onClick={()=>handleremove(val.id)}><GiCancel className='text-center'/></span></div>
                        //  </div>
                        <CartPage val={val} increment={increment} decrement={decrement} quant={quant} handleremove={handleremove}/>
                        ))
                    }      
                    
                </div>
                <div className='CartRight'>
                    <div className='CartRightContainer'>
                       <p className='p'>Order Summary</p>
                       <div>
                          <div className='CartRightContent'>
                            <span>Subtotal</span>
                            <span>$1,019.98</span>
                           </div>
                           <div  className='CartRightContent'>
                            <span>Sales Tax</span>
                            <span>$102.00</span>
                           </div>
                           <div  className='CartRightContent'>
                            <span>Cupon Code</span>
                            <span>select cupon</span>
                           </div>
                           <div  className='CartRightContent'>
                            <span>Grand total</span>
                            <span>$1,121.98</span>
                           </div>
                           <button className='w-100 OrderBtn' onClick={()=>alert("Order Placed")}>Order Now</button>
                       </div>

                    </div>

                </div>
            </div>

        </div>
    )
}