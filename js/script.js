 const link = document.querySelector(".search-btn");
   const searchForm = document.querySelector(".search-form");
   const date = searchForm.querySelector("#search-form-date-arrival");

  link.addEventListener("click", function(event) {
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
