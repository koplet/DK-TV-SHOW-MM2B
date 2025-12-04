document.getElementById("btn_scroll").addEventListener("click", function() {
  document.getElementById("down_scroll").scrollIntoView({
    behavior: "smooth"
  });
});
