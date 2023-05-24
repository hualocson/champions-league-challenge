const PositionSelection = ({ positions, selectedPosition, onChange }) => {
  const handlePositionChange = e => {
    const position = e.target.value
    onChange(position)
  }
  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="position" className="ttext-sm md:text-2xl lg:text-3xl font-bold">
        Position:
      </label>
      <select
        id="position"
        className="text-xs md:text-base lg:text-xl text-[#282a36] p-1 border-2 border-transparent rounded-md bg-[#f8f8f2] outline-none focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer flex flex-col capitalize font-bold"
        value={selectedPosition}
        onChange={handlePositionChange}
      >
        <option value="">
          All
        </option>
        {positions.map(position => (
          <option key={position} value={position} className="capitalize">
            {position}
          </option>
        ))}
      </select>
    </div>
  )
}

export default PositionSelection
