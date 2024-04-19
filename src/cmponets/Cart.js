import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.counter);
  console.log("cart", cartData.data);
  // dat leva mate
  return (
    <div>
      <h3 className="text-center my-3">Product Deyails With List</h3>
      <center>
        <table className="table w-75">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Qty and manage</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartData.data?.map((item) => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td><img width={100}  src={item.thumbnail}></img></td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button className="btn btn-primary">+</button>
                    <span className="mx-2"> {item.qty}</span>
                    <button className="btn btn-primary">-</button>
                  </td>
                  <td>{item.total}</td>
                </tr>
              );
            })}
          
          </tbody>
        </table>
        <div className="w-75">
          <h4 className="text-end">grand Totoal :- {cartData.grandTotal} </h4>
        </div>
      </center>
    </div>
  );
};

export default Cart;
