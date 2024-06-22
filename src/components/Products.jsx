import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // let componentMounted = true;

  // const dispatch = useDispatch();

  // const addProduct = (product) => {
  //   dispatch(addCart(product));
  // };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      // const response = await fetch("https://fakestoreapi.com/products/");
      // if (componentMounted) {
      //   setData(await response.json());
      //   setLoading(false);
      // }
      const response = await fetch("/products-1.json");
      const products = await response.json();
      setData(products);
      setLoading(false);

      // return () => {
      //   componentMounted = false;
      // };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        {/* Banner Skeleton */}
        <div className="hero border-1 pb-3">
          <div className="card bg-dark text-white font-bold border-0 mx-3">
            <Skeleton height={400} width="100%" />
            <div className="card-img-overlay d-flex align-items-center">
              <div className="container">
                <Skeleton height={60} width="80%" />
                <Skeleton height={30} width="60%" />
              </div>
            </div>
          </div>
        </div>
  
        {/* Product Skeletons */}
        <div className="container my-5 py-2">
          <div className="row">
            {[...Array(6)].map((_, index) => (
              <div className="col-md-4 col-lg-3 col-sm-6 py-3" key={index}>
                <div className="card">
                  <Skeleton height={200} />
                  <div className="card-body">
                    <Skeleton height={20} width="80%" />
                    <Skeleton height={20} width="60%" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {data.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100">
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt={product.title}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">R {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1 w-100">
                    View Now
                  </Link>
                  {/* <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
