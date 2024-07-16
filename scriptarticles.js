function toggleList(id) {
    var list = document.getElementById(id);
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }

  function showList(id) {
    var list = document.getElementById(id);
    list.style.display = "block";
  }
  
  function hideList(id) {
    var list = document.getElementById(id);
    list.style.display = "none";
  }
  