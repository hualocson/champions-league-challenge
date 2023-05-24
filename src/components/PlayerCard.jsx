import React from 'react'
import PositionTag from './PositionTag'

const PlayerCard = ({ name, positions, team, image }) => {
  return (
    <div className="relative group rounded-xl overflow-hidden">
      <div
        className="relative shadow-card transition-all duration-500 before:bottom-[-100px] before:left-0
    before:absolute before:w-full before:h-full before:z-10 before:bg-gradient-to-t before:from-[#6272a4] before:from-20% md:before:from-35% lg:before:from-25% before:to-transparent aspect-[3/4] group-hover:before:bottom-0
    before:transition-all before:duration-500
    "
      >
        <img
          className="w-full h-full object-cover transition-all  duration-500 group-hover:translate-y-[-20px] group-hover:blur-[1px]"
          src={image}
          alt={name}
        />
      </div>
      <div className="absolute z-20 bottom-0 left-0 w-full h-full flex flex-col  p-2 justify-end gap-1 lg:gap-2 lg:p-4">
        <p className="text-sm md:text-3xl lg:text-3xl font-bold text-[#f8f8f2]">
          {name}
        </p>
        <p className="text-gray-200 text-xs md:text-xl lg:text-2xl mb-1">
          {team}
        </p>
        <ul className="flex gap-2 items-center">
          {positions.map((position, index) => (
            <li key={index} className="flex items-center">
              <PositionTag position={position} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PlayerCard
