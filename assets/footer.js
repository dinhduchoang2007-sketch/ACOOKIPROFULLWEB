/* ACOOKI — FOOTER DÙNG CHUNG cho mọi trang.
   Sửa thông tin công ty / liên hệ tại ĐÂY. Cần nạp sau assets/layout.js.
   Gọi ACK.bottom() trước các script cuối trang. */
(function () {
  var FOOTSUB = ACK.SUB;
  var BOTTOM = `<footer class="site">
<div class="wrap">
<div class="g">
<div>
<a class="foot-brand" href="index.html" aria-label="Acooki - Trang chủ"><img class="wm-img" src="assets/img/acooki-logo.png" alt="Acooki" width="900" height="323" /><span class="sr">Acooki</span></a>
<p class="co">CÔNG TY TNHH KỸ NGHỆ THỰC PHẨM TÂN BÌNH</p>
<p class="mst">Mã số thuế: 0317097110</p>
<p>
Thương hiệu nước mắm Việt, ủ chượp truyền thống, nguyên chất từ
biển cả.
</p>
</div>
<div>
<h4>Khám phá</h4>
<ul>
<li><a href="index.html">Trang chủ</a></li>
<li><a href="gioi-thieu.html">Giới thiệu</a></li><li><a href="chung-nhan.html">Chứng nhận</a></li>
<li><a href="san-pham.html">Sản phẩm</a></li>
<li><a href="tin-tuc.html">Tin tức</a></li>
<li><a href="lien-he.html">Liên hệ</a></li>
</ul>
</div>
<div>
<h4>Sản phẩm</h4><ul>${FOOTSUB}</ul>
</div>
<div>
<h4>Liên hệ</h4>
<div class="ct">
<svg class="ico" aria-hidden="true"><use href="#i-phone" /></svg
><a href="tel:0937959472">0937959472</a>
</div>
<div class="ct">
<svg class="ico" aria-hidden="true"><use href="#i-office" /></svg
><span>Địa chỉ: Số 34 Đường Nguyễn Thị Se, ấp Bầu Sim, Xã Củ Chi, TP. Hồ Chí Minh</span>
</div>
<div class="ct">
<svg class="ico" aria-hidden="true"><use href="#i-factory" /></svg
><span>3 nhà máy tại huyện Củ Chi, TP.HCM</span>
</div>
</div>
</div>
<div class="cp">
<span
>© 2026 ACOOKI - Công ty TNHH Kỹ Nghệ Thực Phẩm Tân Bình. Bảo lưu mọi quyền.</span
><span>Gia vị của mọi nhà</span>
</div>
</div>
</footer>
<div class="fl">
      <a class="p" href="tel:0937959472" aria-label="Gọi hotline"
        ><svg class="ico" aria-hidden="true"><use href="#i-phone" /></svg></a
      ><a
        class="m"
        href="https://zalo.me/0937959472"
        target="_blank"
        rel="noopener"
        aria-label="Chat Zalo"
        ><svg class="ico zalo" aria-hidden="true" viewBox="0 0 48 48"><text x="24" y="31" text-anchor="middle">Zalo</text></svg></a
      ><button class="t" aria-label="Lên đầu trang">Top</button>
    </div>`;

  ACK.bottom = function () { document.write(BOTTOM); };
})();
