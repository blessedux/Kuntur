console.log("✅ destinations.js loaded!");

document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ DOM Loaded - Initializing AOS");

  // ✅ Ensure AOS is loaded before initializing
  if (typeof AOS !== "undefined") {
    AOS.init();
    setTimeout(() => {
      console.log("🔹 Forcing AOS Reinitialization");
      AOS.refresh();
    }, 500);
  } else {
    console.error("❌ AOS is not defined! Make sure AOS is imported in Destinations.astro.");
  }

  // ✅ Attach event listeners to all destination cards
  document.querySelectorAll(".destination-card").forEach((card) => {
    card.addEventListener("click", function () {
      const origin = this.getAttribute("id");
      console.log(`🟢 Click detected on: ${origin}`);
      scrollToForm(origin);
    });
  });
});

// ✅ Move scrollToForm OUTSIDE `DOMContentLoaded` to ensure it's globally available
function scrollToForm(origin) {
  console.log(`🟢 Function Triggered: scrollToForm("${origin}")`);

  // ✅ Ensure the form section exists
  const formSection = document.getElementById("reservationForm");
  if (!formSection) {
    console.error("❌ Form section not found! Check if <form id='reservationForm'> exists.");
    return;
  }
  console.log("✅ Found the form section.");

  // ✅ Scroll smoothly to the form section
  formSection.scrollIntoView({ behavior: "smooth", block: "start" });
  console.log("🔹 Scrolling to the form section...");

  // ✅ Ensure "Origin" input exists
  const originInput = document.getElementById("origin");
  if (!originInput) {
    console.error("❌ Origin input field not found! Make sure <input id='origin'> exists in the form.");
    return;
  }
  console.log("✅ Found the origin input field.");

  // ✅ Pre-fill the "Origin" field
  originInput.value = origin;
  originInput.classList.remove("cursor-not-allowed", "bg-gray-100", "text-gray-400"); // Make it editable
  originInput.classList.add("text-gray-700", "bg-white"); // Update appearance

  console.log(`🎯 Origin field set to: ${origin}`);
}