const moon = {
  moon: () => {
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

    switch (phase) {
      case 0: phase = "New Moon"; break;
      // case 0: phase = "<img src='../public/img/moon/' alt='' style='width:100%; max-width: 500px'><br>"; break;
      case 1: phase = "Waxing Crescent Moon"; break;
      case 2: phase = "Quarter Moon"; break;
      case 3: phase = "Waxing Gibbous Moon"; break;
      case 4: phase = "Full Moon"; break;
      case 5: phase = "Waning Gibbous Moon"; break;
      case 6: phase = "Last Quarter Moon";
      case 7: phase = "Waning Crescent Moon"; break;
    }
    return phase;
    
  }
  
}

module.exports = moon;