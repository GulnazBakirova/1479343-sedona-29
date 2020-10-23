 const link = document.querySelector(".search-btn");
   const searchForm = document.querySelector(".search-form");
   const date = searchForm.querySelector("#search-form-date-arrival");
   const checkin = link.querySelector("[id=search-form-date-arrival]");
 const checkout = link.querySelector("[id=search-form-date-departure]");
 const adults = link.querySelector("[adult-amount]");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    if (searchForm.classList.contains("search-form-visible")) {
      searchForm.classList.add("search-form-invisible");
      searchForm.classList.remove("search-form-visible");
    } else {
      searchForm.classList.add("search-form-visible");
      searchForm.classList.remove("search-form-invisible");
    };
     if (!checkin.value || !checkout.value || !adults.value) {
 evt.preventDefault();
searchForm.classList.add("modal-error");
 }
    date.focus();
  });


