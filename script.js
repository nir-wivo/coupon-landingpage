function addDynamicLink() {
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get("name");
    document.getElementsByClassName("name")[0].innerText = name;
  }
  addDynamicLink();
