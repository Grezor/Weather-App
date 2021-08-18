const moon = {
  functionMoon: () => {
    var year = new Date().getFullYear(),
      month = new Date().getMonth(),
      day = new Date().getDate();

    if (month < 3) {
      year--;
      month += 12;
    }

    ++month;

    days = 365.25 * year + 30.6 * month + day - 694039.09; // correspond au nombre total de jours écoulés
    days /= 29.53; // cycles de la lune 29.5 jours
    phase = parseInt(days, 10);
    days -= phase;
    phase = Math.round(days * 8);
    phase = phase & 7;

    return phase;
  },
};

module.exports = moon;
