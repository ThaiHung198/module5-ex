// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. Khai báo mảng chứa danh sách các loại quả
const fruits = [
  'Apple',
  'Banana',
  'Orange',
  'Apricot',
  'Black rowan',
  'Cranberry'
];

// 2. Lấy phần tử DOM có id là 'root' từ file index.html
const rootElement = document.getElementById('root');

// 3. Tạo một "root" cho ứng dụng React
const root = ReactDOM.createRoot(rootElement);

// 4. Render nội dung JSX vào root
// Chúng ta sử dụng hàm .map() để lặp qua mảng fruits và tạo ra một thẻ <li> cho mỗi phần tử
root.render(
  <div>
    <h1>List of fruits</h1>
    <ul>
      {
        fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </ul>
  </div>
);