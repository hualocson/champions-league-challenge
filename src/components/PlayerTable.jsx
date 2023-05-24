import PlayerCard from './PlayerCard'

const PlayerTable = ({ players }) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {players.map(player => (
        <div key={player.id}>
          <PlayerCard {...player} />
        </div>
      ))}
    </div>
  )
}
export default PlayerTable
