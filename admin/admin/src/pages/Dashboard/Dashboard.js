import React from "react";
import "./Dashboard.css";

const Dashboard = ({ products }) => {
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
                  <h4 className="Typography_Heading_H4">{products.length}</h4>
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
