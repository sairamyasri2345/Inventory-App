import React, { useState, useEffect } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  // Calculate outOfStockCount based on products data
  const outOfStockCount = Array.isArray(products) 
    ? products.filter(product => product.quantity === 0).length 
    : 0;

  useEffect(() => {
    fetch('https://inventory-app-admin-code.onrender.com/products')
      .then(response => response.json())
      .then(result => {
        // Extract the data array from the result object
        if (result && Array.isArray(result.data)) {
          setProducts(result.data);
        } else {
          console.error('Expected an array but got:', result);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
            <div className="text-white card bg-info mx-2">
              <div className="d-flex p-4 gap-3 ">
                <i className="bi bi-cart4"></i>
                <div>
                  <h4 className="Typography_Heading_H4">Total Products</h4>
                  <h4 className="Typography_Heading_H4">{products.length}</h4>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
            <div className="text-white card bg-danger mx-2">
              <div className="d-flex p-4 gap-3 mx-2">
                <div>
                  <i className="bi bi-cart-x"></i>
                </div>
                <div>
                  <h4 className="Typography_Heading_H4">Out Of Stock</h4>
                  <h4 className="Typography_Heading_H4">{outOfStockCount}</h4>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
