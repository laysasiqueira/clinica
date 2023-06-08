<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Exemplo de Mapa</title>
  <!-- Inclua o arquivo CSS da biblioteca Leaflet -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
  <style>
    #mapid {
      height: 400px;
    }
  </style>
</head>
<body>
  <h2>Localização da clínica</h2>
  <div id="mapid"></div>

  <!-- Inclua o arquivo JavaScript da biblioteca Leaflet -->
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
  <script>
    // Aqui você pode inserir o código JavaScript fornecido anteriormente

    var map;

    function initializeMap() {
      // Coordenadas da localização fixa
      var latitude = 39.2214;
      var longitude = -8.6874;

      if (map === undefined) {
        map = L.map('mapid').setView([latitude, longitude], 13);
      } else {
        map.remove();
        map = L.map('mapid').setView([latitude, longitude], 13);
      }

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([latitude, longitude]).addTo(map)
        .bindPopup('A clínica fica aqui!')
        .openPopup();
    }

    initializeMap();
  </script>
</body>
</html>
