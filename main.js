function saludar() {
    alert("Hola desde feature-mensaje");
}

function cambiarMensaje() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "¡El mensaje cambió desde commit de práctica!";
}

function cambiarColor() {
    const mensaje = document.getElementById("mensaje");
    mensaje.style.color = "green";
}

function cambiarFooter() {
    const footer = document.getElementById("footer");
    footer.textContent = "Texto del footer cambiado dinámicamente";
}
