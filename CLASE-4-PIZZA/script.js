const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const email = document.querySelector("#email").value;
  const cantidad = document.querySelector("#cantidad").value;
  const tamaño = document.querySelector("input[name=tamaño]:checked");
  const mensaje = document.querySelector("#mensaje");

  if (nombre === "") {
    mensaje.textContent = "El nombre es obligatorio.";
    return;
  }

  if (email === "") {
    mensaje.textContent = "El email es obligatorio.";
    return;
  }

  mensaje.textContent = `Pedido recibido, ${nombre}. ${cantidad} pizza/s. Te confirmamos a ${email}.`;
});
