const autocompletes = document.querySelectorAll('.autocomplete')
/**
 * Jour J
 * @param {int} lat 
 * @param {int} lon 
 */
async function callWeatherApi(lat, lon) {
  const response = await fetch(`http://127.0.0.1:3000/api/weather/today?lat=${lat}&lon=${lon}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  const result = await response.json()
  document.location = `/?lat=${result.coord.lat}&lon=${result.coord.lon}`
}
/**
 * 7 Days
 * @param {int} lat 
 * @param {int} lon 
 */
async function call7DaysWeatherApi(lat, lon) {
  const response = await fetch(`http://127.0.0.1:3000/api/weather/sevendays?lat=${lat}&lon=${lon}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  const result = await response.json()
  document.location = `/sevendays?lat=${result.lat}&lon=${result.lon}`
}
/**
 * 
 * @param {*} lat 
 * @param {*} lon 
 */
async function call7DaysWeatherApicharts(lat, lon) {
  const response = await fetch(`http://127.0.0.1:3000/api/weather/chartdays?lat=${lat}&lon=${lon}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  const result = await response.json()
  document.location = `/chartdays?lat=${result.lat}&lon=${result.lon}`
}
/**
 * 
 * @param {*} primary 
 * @param {*} secondary 
 */
function makeResult(primary, secondary) {
  const result = document.createElement('div')
  result.classList.add('autocomplete-result')

  const primaryLine = document.createElement('strong')
  primaryLine.textContent = primary

  const secondaryLine = document.createElement('em')
  secondaryLine.textContent = secondary

  result.appendChild(primaryLine)
  result.appendChild(secondaryLine)

  return result
}
/**
 * function autocomplete input
 * @param {*} autocomplete 
 */
function processAutocomplete(autocomplete) {
  const autocompleteType = autocomplete.dataset.type
  const autocompleteInput = autocomplete.querySelector('.autocomplete-input')
  const autocompleteResults = autocomplete.querySelector('.autocomplete-results')

  async function onAutocompleteInputKeyUp(event) {
    if (autocompleteInput.value.length < 3) {
      autocompleteResults.classList.add('hidden')
      return null;
    }

    const response = await fetch('http://127.0.0.1:3000/api/weather/search', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        search: autocompleteInput.value
      })
    })

    const results = await response.json()

    if (!('features' in results)) {
      return null
    }

    /**
     * @typedef Feature
     * @property {string} text
     * @property {string} place_name
     * @property {{coordinates: number[]}} geometry
     */

    autocompleteResults.innerHTML = ''
    results.features.forEach((feature) => {
      /** @var {Feature} feature */

      /** @var {any} autocomplateResult */
      const autocompleteResult = makeResult(feature.text, feature.place_name)

      autocompleteResult.addEventListener('click', async () => {
        autocompleteInput.value = feature.text
        autocompleteResults.classList.add('hidden')

        const coord = feature.geometry.coordinates

        if (autocompleteType === 'oneday') {
          await callWeatherApi(coord[1], coord[0])
        }
        
        if (autocompleteType === 'sevenday') {
          await call7DaysWeatherApi(coord[1], coord[0])
        }

        if (autocompleteType === 'chartdays') {
          await call7DaysWeatherApicharts(coord[1], coord[0])
        }
      })

      autocompleteResults.appendChild(autocompleteResult)
    })

    autocompleteResults.classList.remove('hidden')
  }

  autocompleteInput.addEventListener('keyup', onAutocompleteInputKeyUp)
}

autocompletes.forEach(processAutocomplete)
