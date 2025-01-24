/*document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".scroll-animation");

  const onScroll = () => {
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100 && rect.bottom >= 0) {
        el.classList.add("show");
      } else {
        el.classList.remove("show");
      }
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll(); //Ejecutar para comprobar la posición inicial
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".scroll-animation-2");

  const onScroll = () => {
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcular el porcentaje de visibilidad del elemento
      const visiblePercent = Math.max(
        0,
        Math.min(1, 1 - (rect.top - 220) / windowHeight) // Ajusta el 100 según necesites
      );

      // Ajustar opacidad y posición basado en el porcentaje de visibilidad
      el.style.opacity = visiblePercent;
      el.style.transform = `translateY(${10 * (1 - visiblePercent)}px)`;
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll(); // Ejecutar para comprobar la posición inicial
});*/

/*FORMATO DE LO MISMO Y MEJOR CONFIG*/

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements1 = document.querySelectorAll(".scroll-animation");
  const animatedElements2 = document.querySelectorAll(".scroll-animation-2");

  const onScroll = () => {
    animatedElements1.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100 && rect.bottom >= 0) {
        el.classList.add("show");
      } else {
        el.classList.remove("show");
      }
    });

    animatedElements2.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcular el porcentaje de visibilidad del elemento
      const visiblePercent = Math.max(
        0,
        Math.min(1, 1 - (rect.top - 220) / windowHeight) // Ajusta el 100 según necesites
      );

      // Ajustar opacidad y posición basado en el porcentaje de visibilidad
      el.style.opacity = visiblePercent;
      el.style.transform = `translateY(${10 * (1 - visiblePercent)}px)`;
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll(); // Ejecutar para comprobar la posición inicial
});

//FUNCIÓN JAVASCRIPT PARA MANDAR AL WHATSAPP CON LA FOTO Y PRECIO DEL PRODUCTO INTERESADO

// Configurar número de WhatsApp de la empresa
/*const numeroWhatsApp = "";*/

// Agregar funcionalidad al botón
/*document.querySelectorAll(".boton-whatsapp").forEach((boton) => {
  boton.addEventListener("click", () => {
    const tarjeta = boton.closest(".card-con-precio");
    const nombreProducto = tarjeta.querySelector(".text-title").innerText;
    const descripcionProducto = tarjeta.querySelector(".text-body").innerText;
    const precioProducto =
      tarjeta.querySelector(".text-title + span").innerText;

    // Generar mensaje dinámico
    const mensaje =
      `¡Hola! Estoy interesado en el siguiente producto:%0A%0A` +
      `*Nombre:* ${nombreProducto}%0A` +
      `*Descripción:* ${descripcionProducto}%0A` +
      `*Precio:* ${precioProducto}%0A%0A` +
      `¿Está disponible?`;

    // Crear enlace de WhatsApp
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    // Abrir enlace en una nueva pestaña
    window.open(enlaceWhatsApp, "_blank");
  });
});*/

// Configurar número de WhatsApp de la empresa
const numeroWhatsApp = "+5493794790084"; // Cambia este número por el de tu empresa

// Función para manejar el clic en los botones
document.querySelectorAll(".boton-whatsapp").forEach((boton) => {
  boton.addEventListener("click", () => {
    const tarjeta = boton.closest(".card-con-precio");
    const nombreProducto = tarjeta
      .querySelector(".text-title")
      .textContent.trim();
    const descripcionProducto = tarjeta
      .querySelector(".text-body")
      .textContent.trim();
    const precioProducto = tarjeta
      .querySelector(".card-footer .text-title")
      .textContent.trim();

    // Generar mensaje dinámico
    const mensaje = encodeURIComponent(
      `¡Hola! Estoy interesado en el siguiente producto:\n\n` +
        `*Nombre:* ${nombreProducto}\n` +
        `*Descripción:* ${descripcionProducto}\n` +
        `*Precio:* ${precioProducto}\n\n` +
        `¿Está disponible?`
    );

    // Crear enlace de WhatsApp
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    // Abrir enlace en una nueva pestaña
    window.open(enlaceWhatsApp, "_blank");
  });
});
