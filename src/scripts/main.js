/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

// importamos la galeria
import { stays } from './stays.js';

// le asignamos valor a las consonantes
document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery");
    const searchButton = document.getElementById("search");
    const locationInput = document.getElementById("location");
    const guestsSelect = document.getElementById("guests");
    const toggleButton = document.getElementById("toggleSearch");
    const searchContainer = document.getElementById("searchContainer");


    //----AJUSTE PARA DISPOSITIVOS MOVILES--------
    // Hacer que el botón + solo aparezca en dispositivos móviles
    toggleButton.classList.add("block", "md:hidden");
    // Ajustar tamaño del área de búsqueda en dispositivos móviles
    searchContainer.classList.add("w-full", "md:w-auto", "p-4", "bg-white", "shadow-md", "rounded-lg", "max-w-lg", "md:max-w-none", "flex", "flex-col", "gap-4");

    // Agregar opciones al select de huéspedes
    guestsSelect.innerHTML = `
        <option value="">Seleccionar huéspedes</option>
        <option value="custom">Especificar cantidad</option>
    `;

    // Crear contenedor para adultos y niños
    const guestsContainer = document.createElement("div");
    guestsContainer.classList.add("hidden", "flex", "gap-2", "mt-2", "flex-col", "md:flex-row");
    guestsSelect.insertAdjacentElement("afterend", guestsContainer);

    function createGuestInputs() {
        guestsContainer.innerHTML = ""; // Eliminar elementos previos para evitar duplicados

        const adultsInput = document.createElement("input");
        adultsInput.type = "number";
        adultsInput.name = "adults";
        adultsInput.min = "1";
        adultsInput.placeholder = "Adultos";
        adultsInput.classList.add("p-2", "border", "border-gray-300", "rounded-md", "w-full");
        
        const childrenInput = document.createElement("input");
        childrenInput.type = "number";
        childrenInput.name = "children";
        childrenInput.min = "0";
        childrenInput.placeholder = "Niños";
        childrenInput.classList.add("p-2", "border", "border-gray-300", "rounded-md", "w-full");
        
        guestsContainer.appendChild(adultsInput);
        guestsContainer.appendChild(childrenInput);
    }

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
        searchButton.innerHTML = "🔄 Buscando...";
        searchButton.disabled = true;

        setTimeout(() => {
            const locationValue = locationInput.value.toLowerCase();
            const adultsValue = parseInt(document.querySelector("input[name='adults']")?.value) || 0;
            const childrenValue = parseInt(document.querySelector("input[name='children']")?.value) || 0;
            const totalGuests = adultsValue + childrenValue;

            const filtered = stays.filter(stay => {
                const matchesLocation = locationValue ? stay.city.toLowerCase().includes(locationValue) || stay.country.toLowerCase().includes(locationValue) : true;
                const matchesTotalGuests = totalGuests ? stay.maxGuests >= totalGuests : true;
                return matchesLocation && matchesTotalGuests;
            });

            renderStays(filtered);
            searchButton.innerHTML = "🔍 Buscar";
            searchButton.disabled = false;
        }, 1000);
    }

    guestsSelect.addEventListener("change", () => {
        if (guestsSelect.value === "custom") {
            createGuestInputs();
            guestsContainer.classList.remove("hidden");
        } else {
            guestsContainer.classList.add("hidden");
        }
    });

    toggleButton.addEventListener("click", () => {
        searchContainer.classList.toggle("hidden");
        searchContainer.classList.toggle("w-full");
    });

    searchButton.addEventListener("click", filterStays);
    searchButton.addEventListener("mouseenter", () => {
        searchButton.classList.add("bg-gray", "scale-105", "transition", "duration-300");
    });
    
    searchButton.addEventListener("mouseleave", () => {
        searchButton.classList.remove("bg-gray", "scale-105");
    });

    renderStays(stays);
});

