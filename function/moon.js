const moon = {

  functionMoon: () => {
    var year = new Date().getFullYear(),
        month = new Date().getMonth(),
        day = new Date().getDate();


    if(month < 3 ){
      year--;
      month += 12;
    }

    ++month;

    jd = 365.25 * year + 30.6 * month + day - 694039.09;
    jd /= 29.53;
    phase = parseInt(jd, 10);
    jd -= phase; 
    phase = Math.ceil(jd * 8); 
    phase = phase & 7; 
    console.log(phase)
    return phase;
  }
}

module.exports = moon;