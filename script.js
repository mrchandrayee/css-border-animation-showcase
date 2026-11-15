const replay = document.getElementById("replay");
replay.addEventListener("click", () => {
  const elements = document.querySelectorAll(".demo, .demo::before");
  document.querySelectorAll(".demo").forEach((element) => {
    element.style.animation = "none";
    void element.offsetWidth;
    element.style.animation = "";
  });
  replay.textContent = "Replayed ✓";
  window.setTimeout(() => { replay.textContent = "Replay animations ↻"; }, 1100);
});
