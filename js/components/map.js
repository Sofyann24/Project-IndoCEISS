document.addEventListener("DOMContentLoaded", () => {
  // 1. Setup Titik Tengah Peta (Batam Center) & Matikan Control +/- Bawaan Leaflet
  const map = L.map("map", { zoomControl: false }).setView(
    [1.1185, 104.0485],
    11.5,
  );

  // 2. Load Tile Maps Ringan & Bersih (CartoDB Voyager)
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    },
  ).addTo(map);

  // 3. Sambungkan Tombol Zoom Custom Lo dengan Fungsi Zoom Milik Leaflet
  document
    .getElementById("custom-zoom-in")
    .addEventListener("click", () => map.zoomIn());
  document
    .getElementById("custom-zoom-out")
    .addEventListener("click", () => map.zoomOut());

  // 4. Custom Icon/Marker CSS HTML Supaya Sesuai Desain Maket Lo
  const createCustomMarker = (labelText, colorClass, iconClass) => {
    return L.divIcon({
      className: "leaflet-custom-marker-wrapper",
      html: `
              <div class="map-floating-pin">
                <i class="${iconClass} ${colorClass}"></i>
                <span>${labelText}</span>
              </div>
            `,
      iconSize: [160, 40],
      iconAnchor: [20, 20],
    });
  };

  // 5. Plot Titik Pin Lokasi Asli Batam Sesuai Gambar Maket
  const locations = [
    {
      name: "Nongsa Beach",
      coords: [1.1852, 104.1015],
      color: "text-green",
      icon: "fa-solid fa-location-dot",
    },
    {
      name: "Turi Beach Resort",
      coords: [1.183, 104.135],
      color: "text-pink",
      icon: "fa-solid fa-location-dot",
    },
    {
      name: "Batam Zoo Paradise",
      coords: [1.1274, 104.015],
      color: "text-green",
      icon: "fa-solid fa-location-dot",
    },
    {
      name: "Rumah Sakit Bhayangkara Batam",
      coords: [1.109, 104.061],
      color: "text-red",
      icon: "fa-solid fa-square-h",
    },
    {
      name: "Hang Nadim International Airport",
      coords: [1.1215, 104.1185],
      color: "text-blue",
      icon: "fa-solid fa-plane",
    },
    {
      name: "Mall Botania 2",
      coords: [1.1118, 104.095],
      color: "text-orange",
      icon: "fa-solid fa-star",
    },
  ];

  locations.forEach((loc) => {
    L.marker(loc.coords, {
      icon: createCustomMarker(loc.name, loc.color, loc.icon),
    }).addTo(map);
  });
});
