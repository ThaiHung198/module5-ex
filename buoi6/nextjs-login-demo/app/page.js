// File: app/page.js

import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the main page of our application.</p>

      {/* Giữ lại code gốc của bạn nếu muốn */}
      <div style={{ marginTop: "2rem" }}>
        <Image
          src="/next.svg" // Giả sử file này nằm trong thư mục /public
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </div>
    </div>
  );
}
