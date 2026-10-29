document.addEventListener("DOMContentLoaded", () => {
  const batamCenter = [1.1185, 104.0485];
  const addBaseLayer = (map) => {
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    }).addTo(map);
  };

  const mapElement = document.getElementById("map");
  if (mapElement) {
    const map = L.map(mapElement, { zoomControl: false }).setView(
      batamCenter,
      11.5,
    );
    addBaseLayer(map);

    document
      .getElementById("custom-zoom-in")
      ?.addEventListener("click", () => map.zoomIn());
    document
      .getElementById("custom-zoom-out")
      ?.addEventListener("click", () => map.zoomOut());

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

    locations.forEach((location) => {
      L.marker(location.coords, {
        icon: createCustomMarker(
          location.name,
          location.color,
          location.icon,
        ),
      }).addTo(map);
    });
  }

  const climateMapElement = document.getElementById("climate-weather-map");
  if (climateMapElement) {
    const climateMap = L.map(climateMapElement, { zoomControl: false }).setView(
      batamCenter,
      12,
    );
    addBaseLayer(climateMap);

    L.circle(batamCenter, {
      radius: 5000,
      color: "#16a34a",
      weight: 1,
      fillColor: "#16a34a",
      fillOpacity: 0.08,
      dashArray: "5 6",
    }).addTo(climateMap);

    L.circleMarker(batamCenter, {
      radius: 6,
      color: "#15803d",
      fillColor: "#16a34a",
      fillOpacity: 1,
      weight: 2,
    })
      .bindTooltip("Batam", {
        permanent: true,
        direction: "top",
        offset: [0, -8],
      })
      .addTo(climateMap);

    L.circleMarker([1.13, 104.075], {
      radius: 6,
      color: "#1d4ed8",
      fillColor: "#2563eb",
      fillOpacity: 1,
      weight: 2,
    }).addTo(climateMap);

    document
      .getElementById("climate-zoom-in")
      ?.addEventListener("click", () => climateMap.zoomIn());
    document
      .getElementById("climate-zoom-out")
      ?.addEventListener("click", () => climateMap.zoomOut());
  }
});
