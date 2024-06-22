// import React, { useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addCart } from "../redux/action";
// import { Footer, Navbar } from "../components";

// const Product = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const dispatch = useDispatch();

//   const addProduct = (product) => {
//     dispatch(addCart(product));
//   };

//   useEffect(() => {
//     const getProduct = async () => {
//       setLoading(true);
//       const response = await fetch("/products.json");
//       const products = await response.json();
//       const selectedProduct = products.find((p) => p.id === parseInt(id));
//       setProduct(selectedProduct);
//       setLoading(false);
//     };
//     getProduct();
//   }, [id]);

//   const Loading = () => {
//     return (
//       <>
//         <div className="container my-5 py-2">
//           <div className="row">
//             <div className="col-md-6 py-3">
//               <Skeleton height={400} width={400} />
//             </div>
//             <div className="col-md-6 py-5">
//               <Skeleton height={30} width={250} />
//               <Skeleton height={90} />
//               <Skeleton height={40} width={70} />
//               <Skeleton height={50} width={110} />
//               <Skeleton height={120} />
//               <Skeleton height={40} width={110} inline={true} />
//               <Skeleton className="mx-3" height={40} width={110} />
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };

//   const ShowProduct = () => {
//     if (!product) return null;

//     return (
//       <>
//         <div className="container my-5 py-2">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 py-3">
//               <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                   {product.images.map((image, index) => (
//                     <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
//                       <img className="d-block w-100" src={image} alt={`${product.title} ${index + 1}`} />
//                     </div>
//                   ))}
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
//                   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                   <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
//                   <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                   <span className="visually-hidden">Next</span>
//                 </button>
//               </div>
//             </div>
//             <div className="col-md-6 col-md-6 py-5">
//               <h4 className="text-uppercase text-muted">{product.category}</h4>
//               <h1 className="display-5">{product.title}</h1>
//               <p className="lead">
//                 {product.rating && product.rating.rate} <i className="fa fa-star"></i>
//               </p>
//               <h3 className="display-6 my-4">R{product.price}</h3>
//               <p className="lead">{product.description}</p>
//               <button
//                 className="btn btn-outline-dark w-100"
//                 onClick={() => addProduct(product)}
//               >
//                 Add to Cart
//               </button>
//               {/* <Link to="/cart" className="btn btn-dark mx-3">
//                 Go to Cart
//               </Link> */}
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Product;

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch("/products.json");
      const products = await response.json();
      const selectedProduct = products.find((p) => p.id === parseInt(id));
      setProduct(selectedProduct);
      setSelectedImage(selectedProduct?.images[0]); // Set initial selected image
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    if (!product) return null;

    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={selectedImage}
                alt={product.title}
                style={{ maxHeight: "400px" }}
              />
              <div className="d-flex mt-3 gap-2">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className={`img-thumbnail me-2 ${image === selectedImage ? "border border-primary" : ""}`}
                    style={{ height: "100px", cursor: "pointer" }}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate} <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 my-4">R{product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark w-100"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
