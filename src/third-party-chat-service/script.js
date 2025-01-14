const queryString = window.location.search;
document.getElementById("emails").innerHTML = decodeURIComponent(queryString.substring(1));