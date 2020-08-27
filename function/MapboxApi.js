// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
// import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


const ApiMapBox = {
    
    transformMapboxResponse: (features) => {
       return {
            name: features.place_name,
            feat: features.type,
            coord: features.center, 
            context_text: features.context[0].text,
        }
    },
  
    responseMapbox: (MapboxResponse) => {
        if (!MapboxResponse.features) {
            return {
                mapbox: null,
                error: 'Erreur'
            }
        }
        
        const mapbox = {
            dailies: MapboxResponse.features.map(ApiMapBox.transformMapboxResponse)
        }

        return {
            mapbox,
            error: null
        }
    }
}

module.exports = ApiMapBox

