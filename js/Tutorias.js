function likePost(button) {
    const isLiked = button.classList.toggle("liked");

    const heartSpan = button.querySelector(".heart");
    heartSpan.style.color = isLiked ? "red" : "black";

    button.textContent = isLiked ? "¡Te gusta!" : "Me gusta";
    button.prepend(heartSpan); // Mantener el icono al inicio del texto

    button.style.backgroundColor = isLiked ? "#6f42c1" : "";
    button.style.color = isLiked ? "#fff" : "";
}
// Mostrar/ocultar la barra lateral en pantallas pequeñas
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.querySelector(".sidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });
});
