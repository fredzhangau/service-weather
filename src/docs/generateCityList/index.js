const xlsx = require("xlsx");
const fs = require("fs");

/**
 * Read from a .xlsx file with city name, state, and country information.
 * Parse the spreadsheet into a JSON array by looping through the rows.
 */
function getCityJson() {
  const wb = xlsx.readFile("./au.xlsx");
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const cities = xlsx.utils.sheet_to_json(sheet);

  const json = [];
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    json.push({
      name: city["city"],
      state: city["state"],
      country: city["country"],
    });
  }

  fs.writeFileSync("./cities.json", JSON.stringify(json));
}

getCityJson();
