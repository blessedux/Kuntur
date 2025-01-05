document.addEventListener("DOMContentLoaded", function () {
  console.log("🔹 DOM Loaded");

  const form = document.getElementById("reservationForm");
  if (!form) {
    console.error("❌ Form element not found!");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "Usuario";
    const origin = document.getElementById("origin");
    const destination = document.getElementById("destination");
    const dateInput = document.getElementById("date");

    if (!dateInput) {
      console.error("❌ Date input element not found!");
      return;
    }

    console.log("🔹 Selected Date:", dateInput.value); // Debugging log

    const selectedDate = dateInput.value || new Date().toISOString().split("T")[0];

    if (!selectedDate) {
      alert("❌ Por favor, selecciona una fecha para tu viaje.");
      return;
    }

    const originValue = origin?.value.trim() || "Punta Arenas";
    const destinationValue = destination?.value.trim() || "Ushuaia";

    if (!destinationValue) {
      alert("❌ Por favor, ingresa tu destino.");
      return;
    }

    const message = `Hola, soy ${name}. Me gustaría reservar un viaje desde ${originValue} a ${destinationValue} para la fecha ${selectedDate}.`;
    const waLink = `https://wa.me/56958374420?text=${encodeURIComponent(message)}`;

    console.log("🔹 WhatsApp Link:", waLink);

    const newTab = window.open(waLink, "_blank");

    if (!newTab) {
      console.error("❌ Popup blocked! Please allow popups for this site.");
      alert("⚠️ No se pudo abrir WhatsApp. Por favor, permite las ventanas emergentes.");
    }
  });
});