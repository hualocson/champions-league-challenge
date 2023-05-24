const PositionTag = ({ position }) => {
  const colorVariants = {
    forward:
      'inline-block relative p-1 md:p-2 rounded-full text-sm md:text-xs lg:text-sm text-[#ff5555] font-semibold capitalize overflow-hidden before:bottom-0 before:left-0 before:absolute before:w-full before:h-full before:bg-current before:opacity-30',
    midfielder:
      'inline-block relative p-1 md:p-2 rounded-full text-sm md:text-xs lg:text-sm text-[#50fa7b] font-semibold capitalize overflow-hidden before:bottom-0 before:left-0 before:absolute before:w-full before:h-full before:bg-current before:opacity-30',
    defender:
      'inline-block relative p-1 md:p-2 rounded-full text-sm md:text-xs lg:text-sm text-[#8be9fd] font-semibold capitalize overflow-hidden before:bottom-0 before:left-0 before:absolute before:w-full before:h-full before:bg-current before:opacity-30',
    goalkeeper:
      'inline-block relative p-1 md:p-2 rounded-full text-sm md:text-xs lg:text-sm text-[#f1fa8c] font-semibold capitalize overflow-hidden before:bottom-0 before:left-0 before:absolute before:w-full before:h-full before:bg-current before:opacity-30'
  }

  return <span className={`${colorVariants[position.toLowerCase()]}`}>{position}</span>
}

export default PositionTag
