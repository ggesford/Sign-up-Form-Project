document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("blur", () => {
    input.classList("touched");
  });
});
