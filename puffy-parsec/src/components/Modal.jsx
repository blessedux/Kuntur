import React, { useState } from "react";

export default function Modal({ isOpen, destination, onClose }) {
  if (!isOpen) return null; // Don't render if the modal is not open

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Reserva tu viaje</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            ✖
          </button>
        </header>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Origen
            </label>
            <input
              id="origin"
              type="text"
              className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200"
              placeholder="Ingrese su origen"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Destino
            </label>
            <input
              id="destination"
              type="text"
              className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200"
              value={destination}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fecha
            </label>
            <input
              id="date"
              type="date"
              className="w-full border rounded-md p-2 focus:ring focus:ring-blue-200"
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => {
              const origin = document.getElementById("origin").value;
              const date = document.getElementById("date").value;
              if (!origin || !date) {
                alert("Por favor, complete todos los campos.");
                return;
              }
              const message = `Hola, me gustaría reservar un viaje desde ${origin} a ${destination} para la fecha ${date}.`;
              const waLink = `https://wa.me/your-phone-number?text=${encodeURIComponent(
                message
              )}`;
              window.open(waLink, "_blank");
              onClose();
            }}
          >
            Reservar
          </button>
        </form>
      </div>
    </div>
  );
}