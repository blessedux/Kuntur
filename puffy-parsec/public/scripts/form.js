console.log("🔹 JavaScript Loaded");

document.addEventListener("DOMContentLoaded", function () {
  console.log("🔹 DOM Loaded");

  const form = document.getElementById("reservationForm");
  if (!form) {
    console.error("❌ Form element not found!");
    return;
  }

  console.log("✅ Form found");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("✅ Form submitted");

    const name = document.getElementById("name").value.trim();
    const origin = document.getElementById("origin").value.trim();
    const destination = document.getElementById("destination").value.trim();

    if (!name || !origin || !destination) {
      alert("⚠️ Por favor, completa todos los campos.");
      return;
    }

    // Generate WhatsApp message
    const message = `Hola, soy ${name}. Me gustaría reservar un viaje desde ${origin} a ${destination}.`;
    const waLink = `https://wa.me/56958374420?text=${encodeURIComponent(message)}`;

    console.log("🔹 WhatsApp Link:", waLink);

    // Open WhatsApp link in a new tab
    const newTab = window.open(waLink, "_blank");

    if (!newTab) {
      console.error("❌ Popup blocked! Please allow popups for this site.");
      alert("⚠️ No se pudo abrir WhatsApp. Por favor, permite las ventanas emergentes.");
    }
  });
});