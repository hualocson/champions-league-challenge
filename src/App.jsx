// import './App.css'
import FilteredPlayerTable from './components/FilteredPlayerTable'
const playerArray = [
  {
    id: 1,
    name: 'Erling Haaland',
    positions: ['forward'],
    team: 'Manchester City',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/07/Erling_Haaland_2023_%28cropped%29.jpg'
  },
  {
    id: 2,
    name: 'Thibaut Courtois',
    positions: ['goalkeeper'],
    team: 'Real Madrid',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/c4/Courtois_2018_%28cropped%29.jpg'
  },
  {
    id: 3,
    name: 'Lionel Messi',
    positions: ['forward', 'midfielder'],
    team: 'Paris Saint-Germain',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
  },
  {
    id: 4,
    name: 'Cristiano Ronaldo',
    positions: ['forward'],
    team: 'Manchester United',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg'
  },
  {
    id: 5,
    name: 'Kylian Mbappe',
    positions: ['forward'],
    team: 'Paris Saint-Germain',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg'
  },
  {
    id: 6,
    name: 'Kevin De Bruyne',
    positions: ['midfielder'],
    team: 'Manchester City',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/40/Kevin_De_Bruyne_201807091.jpg'
  },
  {
    id: 7,
    name: 'Sergio Ramos',
    positions: ['defender'],
    team: 'Paris Saint-Germain',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/83/Sergio_Ramos_Euro_2012_vs_France_01.jpg'
  }
  // Add more player objects here...
]
const App = () => {
  return (
    <div className="w-full min-h-screen p-10 text-[#f8f8f2] bg-gradient-to-t from-[#282a36] to-[#44475a]">
      <FilteredPlayerTable players={playerArray} />
    </div>
  )
}

export default App
