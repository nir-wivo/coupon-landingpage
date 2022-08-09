function addDynamicLink() {
    const queryParams = new URLSearchParams(window.location.search);
    const score = queryParams.get("score");
    document.getElementsByClassName("score")[0].innerText = score;
    const name = queryParams.get("name");
    document.getElementsByClassName("name")[0].innerText = name;

  }
  addDynamicLink();
