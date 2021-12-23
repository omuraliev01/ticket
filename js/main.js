let qrcode = new QRCode(document.querySelector('#qrcode'), {
  text: "https://www.aviasales.ru/search/WAW2412FRU1?request_source=expired_search&payment_method=all",
  width: 250,
  height: 250,
  colorDark : "#000000",
  colorLight : "#ffffff",
  correctLevel : QRCode.CorrectLevel.H
});