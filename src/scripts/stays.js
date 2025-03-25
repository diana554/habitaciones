/**
 * Un array de objetos que representa estancias en varias ciudades de Finlandia.
 * Cada objeto contiene detalles sobre una estancia específica, incluyendo:
 * 
 * @constant {Array<Object>} stays
 * @property {string} city - La ciudad donde se encuentra la estancia.
 * @property {string} country - El país donde se encuentra la estancia (siempre "Finlandia").
 * @property {boolean} superHost - Indica si el anfitrión es un superanfitrión.
 * @property {string} title - El título o descripción de la estancia.
 * @property {number} rating - La calificación de la estancia (sobre 5).
 * @property {number} maxGuests - El número máximo de huéspedes permitidos.
 * @property {string} type - El tipo de alojamiento (por ejemplo, "Apartamento entero", "Casa entera", "Habitación privada").
 * @property {number|null} beds - El número de camas disponibles (puede ser null si no se especifica).
 * @property {string} photo - Una URL a una foto del alojamiento.
 */
export const stays = [
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": false,
        "title": "Stylist apartment in center of the city",
        "rating": 4.4,
        "maxGuests": 3,
        "type": "Entire apartment",
        "beds": 2,
        "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
    },
    {
        "city": "Turku",
        "country": "Finland",
        "superHost": false,
        "title": "Nice apartment in center of Helsinki",
        "rating": 4.2,
        "maxGuests": 5,
        "type": "Entire apartment",
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": true,
        "title": "Arty interior in 1900 wooden house",
        "rating": 4.5,
        "maxGuests": 10,
        "type": "Entire house",
        "beds": 6,
        "photo": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": false,
        "title": "Apartment next to market spuare",
        "rating": 4.48,
        "maxGuests": 3,
        "type": "Entire apartment",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
        "city": "Turku",
        "country": "Finland",
        "superHost": true,
        "title": "Villa Aurora guest-house",
        "rating": 4.75,
        "maxGuests": 9,
        "type": "Entire house",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
    },
    {
        "city": "Vaasa",
        "country": "Finland",
        "superHost": true,
        "title": "A cosy family house",
        "rating": 4.95,
        "maxGuests": 6,
        "type": "Entire house",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    }
];
