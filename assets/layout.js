/* ACOOKI — cấu hình dùng chung (danh mục, trang hiện tại) + tải trước trang.
   Header: assets/header.js · Footer: assets/footer.js */

(function () {
  // danh mục sản phẩm: id, tên hiển thị  (thêm nhóm mới = thêm 1 dòng)
  var CATS = [
    ["nuoc-mam", "Nước mắm Vị Ngư"],
    ["nhi-ngu", "Nước mắm Nhĩ Ngư"],
    ["hat-nem", "Hạt nêm Acook"],
    ["panda", "Hạt nêm Panda Cook"],
    ["nuoc-tuong", "Nước tương Soya"],
    ["sa-te", "Sa tế Acook"],
    ["tuong", "Tương ớt & tương xay"],
    ["nuoc-giat", "Nước giặt Amatic"],
    ["rua-chen", "Nước rửa chén Chanh"]
  ];
  var esc = function (s) { return s.replace(/&/g, "&amp;"); };
  var li = function (c) { return '<li><a href="san-pham.html#' + c[0] + '">' + esc(c[1]) + "</a></li>"; };
  var SUB = CATS.map(li).join("");
  var FOOTSUB = SUB;

  // trang hiện tại -> mục menu sáng
  var f = (location.pathname.split("/").pop() || "index.html").replace(".html", "");
  var cur = f === "" || f === "index" ? "home" : f === "gioi-thieu" ? "about" : f === "chung-nhan" ? "cert"
    : f === "san-pham" || f.indexOf("sp-") === 0 ? "shop" : f === "tin-tuc" || f.indexOf("bai-viet") === 0 ? "news"
    : f === "lien-he" ? "contact" : "";
  var ON = {};
  ["home", "about", "cert", "shop", "news", "contact"].forEach(function (k) {
    ON[k] = k === cur ? ' class="on" aria-current="page"' : "";
  });


  // chia sẻ cấu hình cho header.js / footer.js
  window.ACK = { cats: CATS, SUB: SUB, ON: ON, esc: esc };

  // tải trước trang khi người dùng rê chuột / chạm vào liên kết -> chuyển trang gần như tức thì
  try {
    if (HTMLScriptElement.supports && HTMLScriptElement.supports("speculationrules")) {
      var s = document.createElement("script");
      s.type = "speculationrules";
      s.textContent = JSON.stringify({ prefetch: [{ source: "document", where: { selector_matches: "a[href$='.html'], a[href*='.html#']" }, eagerness: "moderate" }] });
      document.head.appendChild(s);
    }
  } catch (e) {}
})();
