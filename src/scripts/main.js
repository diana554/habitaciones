/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

// Importamos el array de estancias
import { stays } from './stays.js';

document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery");
    const searchButton = document.getElementById("search");
    const locationInput = document.getElementById("location");
    const guestsSelect = document.getElementById("guests");
    const toggleButton = document.getElementById("toggleSearch");
    const searchContainer = document.getElementById("searchContainer");

    // Crear contenedor para adultos y niños (inicialmente oculto)
    const guestsContainer = document.createElement("div");
    guestsContainer.classList.add("hidden", "flex", "gap-2", "mt-2");
    guestsSelect.insertAdjacentElement("afterend", guestsContainer);

    const adultsInput = document.createElement("input");
    adultsInput.type = "number";
    adultsInput.id = "adults";
    adultsInput.min = "1";
    adultsInput.placeholder = "Adultos";
    adultsInput.classList.add("p-2", "border", "border-gray-300", "rounded-md");
    
    const childrenInput = document.createElement("input");
    childrenInput.type = "number";
    childrenInput.id = "children";
    childrenInput.min = "0";
    childrenInput.placeholder = "Niños";
    childrenInput.classList.add("p-2", "border", "border-gray-300", "rounded-md");
    
    guestsContainer.appendChild(adultsInput);
    guestsContainer.appendChild(childrenInput);

    if (!galleryContainer) {
        console.error("No se encontró el contenedor de la galería");
        return;
    }

    function renderStays(filteredStays) {
        galleryContainer.innerHTML = "";
        filteredStays.forEach(stay => {
            const stayCard = document.createElement("div");
            stayCard.classList.add("bg-white", "shadow-lg", "rounded-xl", "overflow-hidden", "p-4", "max-w-sm");
            stayCard.innerHTML = `
                <img src="${stay.photo}" alt="${stay.title}" class="w-full h-48 object-cover rounded-lg">
                <div class="p-2">
                    <div class="flex justify-between items-center">
                        <span class="text-xs uppercase ${stay.superHost ? 'text-red-500 font-bold' : 'text-gray-400'}">
                            ${stay.superHost ? 'SUPER HOST' : ''}
                        </span>
                        <span class="text-yellow-500 font-semibold">⭐ ${stay.rating}</span>
                    </div>
                    <h3 class="text-lg font-bold mt-1">${stay.title}</h3>
                    <p class="text-gray-600">📍 ${stay.city}, ${stay.country}</p>
                    <p class="text-gray-500">🛏 ${stay.beds ?? 'No especificado'} camas - 👤 ${stay.maxGuests} huéspedes</p>
                </div>
            `;
            galleryContainer.appendChild(stayCard);
        });
    }

    function filterStays() {
        const locationValue = locationInput.value.toLowerCase();
        const adultsValue = parseInt(adultsInput.value) || 0;
        const childrenValue = parseInt(childrenInput.value) || 0;
        const totalGuests = adultsValue + childrenValue;

        const filtered = stays.filter(stay => {
            const matchesLocation = locationValue ? stay.city.toLowerCase().includes(locationValue) || stay.country.toLowerCase().includes(locationValue) : true;
            const matchesTotalGuests = totalGuests ? stay.maxGuests >= totalGuests : true;
            return matchesLocation && matchesTotalGuests;
        });

        renderStays(filtered);
    }

    guestsSelect.addEventListener("change", () => {
        if (guestsSelect.value) {
            guestsContainer.classList.remove("hidden");
        } else {
            guestsContainer.classList.add("hidden");
        }
    });

    toggleButton.addEventListener("click", () => {
        searchContainer.classList.toggle("hidden");
    });

    searchButton.addEventListener("click", filterStays);
    renderStays(stays); // Renderiza todas las estancias al cargar la página
});

