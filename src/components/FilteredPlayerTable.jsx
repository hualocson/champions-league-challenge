import { useState } from 'react'
import PositionSelection from './PositionSelection'
import PlayerTable from './PlayerTable'

const FilteredPlayerTable = ({ players }) => {
  const [selectedPosition, setSelectedPosition] = useState('')
  const positions = ['forward', 'midfielder', 'defender', 'goalkeeper']
  const handlePositionChange = position => {
    setSelectedPosition(position)
  }

  const filteredPlayers = selectedPosition
    ? players.filter(player => player.positions.includes(selectedPosition))
    : players

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center justify-between w-full lg:mb-3">
        <h2 className="text-sm md:text-2xl lg:text-4xl font-bold">Players</h2>
        <PositionSelection
          positions={positions}
          selectedPosition={selectedPosition}
          onChange={handlePositionChange}
        />
      </div>
      <PlayerTable players={filteredPlayers} />
    </div>
  )
}

export default FilteredPlayerTable
