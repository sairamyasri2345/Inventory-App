import React, { useState, useEffect } from "react";
import "./productModal.css";

const EmpProduct = ({
  show,
  handleClose,
  handleApplyProduct,
  productNames,
  employeeId,
  editMode,
  currentProduct,
  userData
}) => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [startDate, setStartDate] = useState("");

  useEffect(() => {
    if (editMode && currentProduct) {
      setProductName(currentProduct.productName);
      setStartDate(currentProduct.startDate);
      setQuantity(currentProduct.quantity);
    } else {
      setProductName("");
      setQuantity("");
      setStartDate("");
    }
  }, [editMode, currentProduct]);

  const onSave = (e) => {
    e.preventDefault();
    if (parseInt(quantity, 10) <= 0) {
      alert('Quantity must be greater than 0.');
      return;
    }

    const formData = {
      productName,
      employeeId,
      employeeName: userData.uname,
      quantity: parseInt(quantity, 10),
      startDate,
    };

    handleApplyProduct(formData);
  };

  return (
    <div className={`product-container ${show ? "d-flex" : "d-none"}`}>
      <div className="custom-modal-content">
        <div className="custom-modal-header">
          <h4>{editMode ? 'Edit Product' : 'Apply Product'}</h4>
          <span className="custom-modal-close" onClick={handleClose}>
            &times;
          </span>
        </div>
        <div className="custom-modal-body">
          <form>
            <div className="form-group">
              <label>Employee Name</label>
              <input
                type="text"
                value={userData?.uname || ""}
                readOnly
                placeholder="Employee Name"
              />
            </div>
            <div className="form-group">
              <label>Product Name</label>
              <select
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="form-select"
              >
                <option value="">Select Product</option>
                {productNames.map((product, index) => (
                  <option key={index} value={product}>
                    {product}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="mm/dd/yyyy"
                className="form-control"
              />
            </div>
            <div className="d-flex justify-content-end gap-3">
              <button className="btn btn-secondary" onClick={handleClose}>
                Cancel
              </button>
              <button className="btn btn-success" onClick={onSave}>
                {editMode ? 'Update' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpProduct;
