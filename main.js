const { header } = require("express/lib/request");

const faqHeader = document.querySelectorAll(".faq-container .faq-header");

faqHeader.forEach((header, i) => {
header.addEventListener("click", () => {
    header.nextElementSibling.classList.toggle("active");
});
});