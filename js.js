const link = document.querySelector(".index-open-search-form");
  let searchForm = document.querySelector(".index-search-form");
  let date = searchForm.querySelector("#search-form-date-arrival");

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