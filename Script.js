//Code für Bildschrimgröße:
var größe = document.getElementById("Bildschrim");
var width = screen.width;
var height = screen.height;
var totalpixels = width * height;

größe.innerHTML = `Bildschrimgröße: ${width} x ${height}, Pixel: ${totalpixels}`;


//Internet Speed
function runSpeedTest() {
  const startTime = performance.now();
  fetch(
    "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg"
  )
    .then((response) => {
      const endTime = performance.now();
      const elapsedTime = endTime - startTime;
      const speedMbps =
        (response.headers.get("Content-Length") * 8) /
        (elapsedTime / 1000) /
        1000000;
      document.getElementById("result").innerText = `Downloadgeschwindigkeit: ${speedMbps.toFixed(2)} Mbps`;
    console.log(`Downloadgeschwindigkeit: ${speedMbps.toFixed(2)} Mbps`)

    })
    .catch((error) => {
      console.error("Error fetching test file:", error);
      document.getElementById("result").innerText =
        "Ein Fehler ist aufgetreten.";
    });
}


//Akku Test (Just for fun)
var Akkuprozent = document.getElementById("AkkuProzent");
var AkkuAufgeladen = document.getElementById("Wirdaufgeladen");
var AkkuLadezeit = document.getElementById("Aufladezeit");
var AkkuVerbrauch = document.getElementById("Akkuverbrauch");
