const link = document.querySelector(".search-btn");
const searchForm = document.querySelector(".search-form");
const date = searchForm.querySelector("#search-form-date-arrival");
const checkin = searchForm.querySelector("[id=search-form-date-arrival]");
const checkout = searchForm.querySelector("[id=search-form-date-departure]");
const adults = searchForm.querySelector("[adult-amount]");
const show = searchForm.querySelector("search-form-send-btn");

var isStorageSupport = true
var storage = "";

try {
  storage = localStorage.getItem("checkin");
  storage = localStorage.getItem("checkout");
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (event) {
  event.preventDefault();
  if (searchForm.classList.contains("search-form-visible")) {
    searchForm.classList.add("search-form-invisible");
    searchForm.classList.remove("search-form-visible");
  } else {
    searchForm.classList.add("search-form-visible");
    searchForm.classList.remove("search-form-invisible");
  };
  date.focus();
});


searchForm.addEventListener("submit", function (evt) {
  if (!checkin.value || !checkout.value || !adults.value) {
    evt.preventDefault();
    searchForm.classList.remove("modal-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("checkin", checkin.value);
      localStorage.setItem("checkout", checkout.value);
      localStorage.setItem("adults", adults.value);
    }
  }
});






