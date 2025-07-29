// File: app/layout.js

import Link from "next/link";
import "../styles/globals.css"; // Đảm bảo đường dẫn này đúng
import styles from "../styles/Layout.module.css"; // Đảm bảo đường dẫn này đúng

// Metadata này sẽ áp dụng cho toàn bộ trang web
export const metadata = {
  title: "My Awesome App",
  description: "A demo project using Next.js App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.navbarContainer}>
          {" "}
          {/* Ví dụ thêm class cho dễ style */}
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">About Us</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/login">Login</Link>{" "}
              {/* Đổi từ Logout sang Login cho hợp lý hơn */}
            </li>
          </ul>
        </div>

        {/* {children} là nơi nội dung của các file page.js khác sẽ được hiển thị */}
        <main className={styles.container}>{children}</main>
      </body>
    </html>
  );
}
