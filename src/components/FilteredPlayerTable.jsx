import { useState } from 'react'
import PositionSelection from './PositionSelection'
import PlayerTable from './PlayerTable'
import FormField from './FormField'

const FilteredPlayerTable = ({ players }) => {
  const [selectedPosition, setSelectedPosition] = useState('')
  const [searchText, setSearchText] = useState('')

  const positions = ['forward', 'midfielder', 'defender', 'goalkeeper']
  const handlePositionChange = position => {
    setSelectedPosition(position)
  }

  const handleSearchChange = e => {
    setSearchText(e.target.value)
  }

  const getFilteredPlayers = () => {
    if (!searchText && !selectedPosition) return players
    if (!searchText && selectedPosition) {
      return players.filter(player =>
        player.positions.includes(selectedPosition)
      )
    }
    if (searchText && !selectedPosition) {
      return players.filter(player => {
        const searchResult =
          player.name.toLowerCase().includes(searchText.toLowerCase()) ||
          player.team.toLowerCase().includes(searchText.toLowerCase())
        return searchResult
      })
    }
    return players.filter(player => {
      const matchesPosition = player.positions.includes(selectedPosition)
      const searchResult = player.name
        .toLowerCase()
        .includes(searchText.toLowerCase())
      return matchesPosition && searchResult
    })
  }

  const filteredPlayers = getFilteredPlayers()
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full lg:mb-3 flex-grow gap-8 mb-2 items-start">
        <h2 className="text-sm md:text-2xl lg:text-3xl font-bold">Players</h2>
        <FormField
          labelName=""
          type="text"
          name="text"
          placeholder="Search something..."
          value={searchText}
          handleChange={handleSearchChange}
        />
        <PositionSelection
          positions={positions}
          selectedPosition={selectedPosition}
          onChange={handlePositionChange}
        />
      </div>

      <div className="flex flex-col items-start gap-2 w-full">
        {searchText && (
          <h2 className="font-medium text-xl mb-3">
            Showing Results for{' '}
            <span className="text-[#bd93f9] ">{searchText}</span>:
          </h2>
        )}
        {filteredPlayers.length > 0 ? (
          <PlayerTable players={filteredPlayers} />
        ) : (
          <h2 className="font-bold text-xl">No results found</h2>
        )}
      </div>
    </div>
  )
}

export default FilteredPlayerTable
