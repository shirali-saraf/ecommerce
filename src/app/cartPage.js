import React from "react";
import { GiCancel } from "react-icons/gi";
const CartPage = (props) => {
  return (
    <div>
      <div
        className="d-flex CartContainer align-items-center"
        key={props.val.id}
      >
        <div className="py-3" style={{ width: "40%" }}>
          <img src={props.val.image} alt="CartImage" className="CartImage" />
          <h6>{props.val.title}</h6>
        </div>
        <div className="py-3" style={{ width: "20%" }}>
          <h6>{props.val.price}</h6>
        </div>
        <div className="py-3" style={{ width: "20%" }}>
          <span>
            <span
              className="QuantityFont cursor"
              onClick={() => props.increment(props.val.id)}
            >
              +
            </span>
            <span className="QuantityFont">{props.quant}</span>
            <span
              className="QuantityFont cursor"
              onClick={() => props.decrement(props.val.id)}
            >
              -
            </span>
          </span>
        </div>
        <div className="py-3" style={{ width: "15%" }}>
          <h6>Price</h6>
        </div>
        <div>
          <span onClick={() => props.handleremove(props.val.id)}>
            <GiCancel className="text-center" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
