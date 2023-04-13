window.addEventListener("submit", (event) => {
    event.preventDefault();
  let mapInput = document.querySelector("#mapID").value;
  let mapOutput = document.querySelector(".map_output");

  console.log(mapInput);

  let csv = new XMLHttpRequest();
  csv.open("GET", "名前対訳 - シート4.csv", false);

  try {
    csv.send(null);
  } catch (err) {
    console.log(err);
  }
  let csvArray = [];

  let lines = csv.responseText.split(/\r\n|\n/);
  for (let i = 0; i < lines.length; ++i) {
    let cells = lines[i].split(",");
    if (cells.length != 1) {
      csvArray.push(cells);
    }
  }

  console.log(csvArray);

  const jamapname = Object.entries(csvArray);
  for (const value of jamapname) {
    console.log(value[1]);
    const mapIndex = value[1].indexOf(mapInput);
    console.log(mapIndex);

    if (mapIndex === 1) {
      return (mapOutput.textContent = value[1][0]);
    }
  }

  const enmapname = Object.entries(csvArray);
  for (const value of enmapname) {
    console.log(value[1]);
    const mapIndex = value[1].indexOf(mapInput);
    console.log(mapIndex);

    if (mapIndex === 0) {
      return (mapOutput.textContent = value[1][1]);
    }
  }

  if (mapInput === jamapname) {
    return (mapOutput.textContent = enmapname);
  }
  if (mapInput === enmapname) {
    return (mapOutput.textContent = jamapname);
  }
});
