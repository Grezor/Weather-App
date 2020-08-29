
const ApiMapBox = {
    
    transformMapboxResponse: (feature) => {
       return {
            name: feature.place_name,
            feat: feature.type,
            coord: feature.center, 
            context_text: feature.context[0].text,
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

