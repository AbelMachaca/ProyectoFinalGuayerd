const credenciales = {
  email: "estudiante@guayerd.com",
  password: "123456",
};

if (localStorage.getItem("logged")) window.location.href = "map.html";

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let userEmail = form.elements.email.value;
  let userPassword = form.elements.password.value;

  if (
    credenciales.email === userEmail &&
    credenciales.password === userPassword
  ) {
    localStorage.setItem("logged", true);
    window.location.href = "map.html";
  } else {
    alert("Credenciales introducidas inválidas.");
  }
});
