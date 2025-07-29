// src/App.jsx

import React from "react";
import { Formik } from "formik";
import "./App.css";

// Bước 4: Tạo function App
export default function App() {
  // Khởi tạo biến REGEX
  const REGEX = {
    name: /^[a-zA-Z\s]+$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^(0|\+84)\d{9}$/,
  };

  // Khởi tạo hàm handleValidate (trong Formik, đây là prop `validate`)
  const handleValidate = (values) => {
    const errors = {}; // Khai báo biến errors mang giá trị khởi tạo bằng {}

    // Sử dụng hàm if để kiểm tra form đã có name và name này đã có giá trị hay chưa
    if (!values.name) {
      errors.name = "Required";
    }

    // Sử dụng hàm if... else if để kiểm tra form đã có email và email này đã có giá trị hay chưa
    if (!values.email) {
      // Nếu form chưa có email hoặc email chưa có giá trị
      errors.email = "Required";
    } else if (!REGEX.email.test(values.email)) {
      // Nếu form đã có email và email đã có giá trị thì dùng REGEX
      errors.email = "Invalid email address";
    }

    // Sử dụng hàm if để kiểm tra form đã có phone và phone này đã có giá trị hay chưa
    if (!values.phone) {
      errors.phone = "Required";
    }
    // Optional: Thêm validate định dạng cho phone
    // else if (!REGEX.phone.test(values.phone)) {
    //   errors.phone = 'Invalid phone number';
    // }

    return errors;
  };

  // Khởi tạo hàm handleSubmit (trong Formik, đây là prop `onSubmit`)
  const handleSubmit = (values, { resetForm }) => {
    // Sử dụng hàm alert để thông báo
    alert("Thêm liên hệ thành công");
    // Reset form sau khi submit thành công
    resetForm();
  };

  return (
    <div>
      <h1>Contact form</h1>
      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "" }}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {/* Hiển thị lỗi chỉ khi người dùng đã chạm vào ô input và có lỗi */}
              {errors.name && touched.name && (
                <div className="error-message">{errors.name}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone && touched.phone && (
                <div className="error-message">{errors.phone}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
