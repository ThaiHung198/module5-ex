// File: app/login/page.js

// Bước 1: Đánh dấu đây là một Client Component để có thể sử dụng hook
"use client";

// Bước 2: Import useRouter từ 'next/navigation' thay vì 'next/router'
import { useRouter } from "next/navigation";
import styles from "../../styles/Login.module.css"; // Bước 3: Cập nhật đường dẫn import CSS

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (event) => {
    // Ngăn form submit và tải lại trang một cách mặc định
    event.preventDefault();

    // Logic xác thực người dùng có thể thêm ở đây
    // Ví dụ: gọi API, kiểm tra username/password

    // Sau khi đăng nhập thành công, chuyển hướng về trang chủ
    router.push("/");
  };

  return (
    // Bước 4: Thay đổi tất cả các thuộc tính 'class' thành 'className'
    <div className={styles.wrapper}>
      <div className={styles.formContent}>
        <h2>Login</h2>
        {/* Sử dụng sự kiện onSubmit của form cho đúng ngữ nghĩa */}
        <form onSubmit={handleLogin}>
          <input
            className={styles.input}
            type="text"
            id="login"
            name="login"
            placeholder="Username" // Sửa lại placeholder cho rõ ràng
          />
          <input
            className={styles.input}
            type="password" // Đổi type thành "password" để ẩn ký tự
            id="password"
            name="password" // Sửa lại name cho đúng
            placeholder="Password"
          />
          <button
            type="submit" // Đổi type thành "submit" để kích hoạt sự kiện onSubmit của form
            className={styles.button}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
