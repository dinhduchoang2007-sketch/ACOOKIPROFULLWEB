/* ACOOKI — HEADER DÙNG CHUNG cho mọi trang (thanh liên hệ + menu).
   Sửa menu / tên công ty / hotline tại ĐÂY, tất cả các trang tự cập nhật.
   Cần nạp sau assets/layout.js. Gọi ACK.top() ngay sau <body>. */
(function () {
  var SUB = ACK.SUB, ON = ACK.ON;
  var TOP = `<svg width="0" height="0" style="position: absolute" aria-hidden="true">
<defs>
<symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 20.500s-8-4.800-8-10.800A4.500 4.500 0 0 1 12 7a4.500 4.500 0 0 1 8 2.700c0 6-8 10.800-8 10.800z" /></symbol>
<symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></symbol>
<symbol id="i-phone" viewBox="0 0 24 24">
<path
d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
/>
</symbol>
<symbol id="i-mail" viewBox="0 0 24 24">
<rect x="3" y="5" width="18" height="14" rx="2" />
<path d="m3 7 9 6 9-6" />
</symbol>
<symbol id="i-pin" viewBox="0 0 24 24">
<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.800 12 21 12 21z" />
<circle cx="12" cy="9.5" r="2.5" />
</symbol>
<symbol id="i-factory" viewBox="0 0 24 24">
<path d="M3 21V10l6 3V10l6 3V6h3v15z" />
<path d="M7 17h2M12 17h2" />
</symbol>
<symbol id="i-office" viewBox="0 0 24 24">
<path d="M5 21V4h9v17M14 9h5v12M3 21h18M8 8h3M8 12h3M8 16h3" />
</symbol>
<symbol id="i-check" viewBox="0 0 24 24">
<path d="m5 12.500 4.500 4.500L19 7.500" />
</symbol>
<symbol id="i-chat" viewBox="0 0 24 24">
<path d="M4 5h16v11H9l-5 4z" />
</symbol>
<symbol id="i-doc" viewBox="0 0 24 24">
<path d="M6 3h8l4 4v14H6z" />
<path d="M14 3v4h4M9 12h6M9 16h6" />
</symbol>
<symbol id="i-handshake" viewBox="0 0 24 24">
<path d="m3 11 4-4 4 2 4-2 6 5-5 6-3-1-3 2-3-2-4-1z" />
</symbol>
<symbol id="i-bottle" viewBox="0 0 24 24">
<path d="M10 2h4v4l2 3v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9l2-3z" />
<path d="M8 13h8" />
</symbol>
</defs>
</svg>
<a class="skip" href="#main">Bỏ qua điều hướng</a>
<div class="util">
<div class="wrap">
<span>CÔNG TY TNHH KỸ NGHỆ THỰC PHẨM TÂN BÌNH · Nhà máy tại Củ Chi, TP.HCM</span>
<div class="util-r">
<a href="tel:0937959472"
><svg class="ico" aria-hidden="true"><use href="#i-phone" /></svg
>Hotline 0937959472</a
>
</div>
</div>
</div>
<header class="site">
<div class="wrap nav-bar">
<a class="brand" href="index.html" aria-label="Acooki - Trang chủ"
><img class="wm-img" src="assets/img/acooki-logo.png" alt="Acooki" width="900" height="323" /><span class="sr">Acooki</span></a>
<nav class="main" id="menu" aria-label="Điều hướng chính">
<ul>
<li><a href="index.html"${ON.home}>Trang chủ</a></li>
<li><a href="gioi-thieu.html"${ON.about}>Giới thiệu</a></li>
<li><a href="chung-nhan.html"${ON.cert}>Chứng nhận</a></li>
<li>
<a href="san-pham.html"${ON.shop}>Sản phẩm</a>
<ul class="sub">${SUB}</ul>
</li>
<li><a href="tin-tuc.html"${ON.news}>Tin tức</a></li>
<li><a href="lien-he.html"${ON.contact}>Liên hệ</a></li>
</ul>
</nav>
<a class="btn nav-cta" href="lien-he.html">Làm đại lý / NPP</a>
<button
class="burger"
aria-label="Mở menu"
aria-expanded="false"
aria-controls="menu"
>
<i></i><i></i><i></i>
</button>
</div>
</header>`;
  ACK.top = function () { document.write(TOP); };
})();
