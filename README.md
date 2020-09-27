![Black and White General Greeting Liberation Day Twitter Header](https://user-images.githubusercontent.com/38507456/86512535-65c7e580-be03-11ea-8833-eabacd5c92c3.png)

# Introduction 
J'étais fatigué de sortir et de voir quel temps il faisait dehors. Fatigué d'utiliser l'application météo de google.
Cette simple application météo n'affichera que la météo actuelle pour une zone donnée.

De plus, j'ai toujours voulu savoir comment fonctionne une consommation d'API REST.

Tout en apprenant le NodeJS, je voulais faire quelque chose de simple et de rapide. Ce projet, est une application web me permettant d'afficher la météo, la température ou l'humidité, le vent, les prévisions sur 1 semaine...

# Installation
Pour l'installation du projet tout est expliquer dans le **dossier chapitres**, puis le répertoire **installation** 

## Démarrage: 

# Ressources 
- OpenWeather [Infos](https://openweathermap.org/guide)
- Mapbox [Infos](https://docs.mapbox.com/api/search/#geocoding)

## L'état du projet
fonctionne



---
**Duplessi Geoffrey** 
> GitHub [@Grezor][1]
> Twitter [@Geoffrey_Dev][2]

[1]: https://github.com/Grezor
[2]: https://twitter.com/Geoffrey_Dev
 


 
<script>
    const ctx = document.getElementById('graph1').getContext('2d')
    const data = {
        labels: ['label1', 'label2','label3', 'label4'],
        datasets: [
        {
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            data:  [12, 19, 3, 5, 2, 3],
        },
        {
            data:  [10,2, 3, 20, 1, 8],
        }
        
        ]
    }
    const options = {

    }
    const config = {
        type: 'line',
        data: data, 
        options: options
    }
    const graph1 = new Chart(ctx, config)
</script> 


    <script>
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    </script>