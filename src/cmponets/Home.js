import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { addtocart } from "../Slice/counterSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [data, setData] = useState(null);
  // get all products
  const dispatch = useDispatch()
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        // handle success
        setData(response.data);
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="my-5">
          <div className="row">
            {data != null &&
              data.products?.map((item, index) => {
                return (
                  <div className="col-3 my-3" key={index}>
                    <div className="card px-2">
                      <img
                        className=" toimg"
                        src={item.thumbnail}
                      />

                      <div className="card-body">
                        <li className="my-2">{item.title}</li>
                        <li className="my-2">${item.price}</li>
                        <div className="d-flex justify-content-between">
                          <Link className="btn btn-warning" to="/cart">
                            Go to cart
                          </Link>
                          <button className="btn btn-primary" onClick={()=>{dispatch(addtocart(item))}}>
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
