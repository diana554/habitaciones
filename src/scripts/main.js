/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

// Importamos el array de estancias
import { stays } from './stays.js';

// Seleccionamos el contenedor donde se mostrará la galería
document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery");
    
    // Verificamos si el contenedor existe
    if (!galleryContainer) {
        console.error("No se encontró el contenedor de la galería");
        return;
    }
    
    // Generamos la galería de estancias
    stays.forEach(stay => {
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
});
