import React from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function DraftPickCard({ displaySide, isVoting }) {
  let champion = {
    id: 0,
    name: 'Demo'
  }

  return (
    <div
      className={classNames(
        'overflow-hidden relative rounded-sm group w-60 h-24',
        displaySide === 'left'
          ? 'shadow-pick_card_left'
          : 'shadow-pick_card_right'
      )}
    >
      {champion.id > 0 ? (
        <>
          <div className="relative">
            <img
              className="w-full h-24 object-cover object-top scale-110 group-hover:scale-100 transition-all duration-500"
              src="/ahri.jpg"
            />
          </div>
          <div
            className={classNames(
              'absolute px-2 z-20 bottom-0 left-0 w-full  bg-grayscale-800 group-hover:bg-grayscale-600 transition-all duration-500 ease-out'
            )}
          >
            <span
              className={classNames(
                'block text-base font-bold text-primary-500  transition-all duration-300',
                displaySide === 'left'
                  ? 'text-right group-hover:translate-x-[-5px]'
                  : 'text-left group-hover:translate-x-[5px]'
              )}
            >
              {champion.name}
            </span>
          </div>
        </>
      ) : (
        <div
          className={`relative w-full h-24 bg-grayscale-600 flex items-center justify-center`}
        >
          {isVoting && (
            <>
              <span className="block text-base font-bold text-primary-500  transition-all duration-300">
                Voting ...
              </span>
              <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-success-200 animate-run_l_r"></span>
              <span className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-transparent to-success-200 animate-run_t_b animation-delay-1000"></span>
              <span className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-transparent to-success-200 animate-run_r_l"></span>
              <span className="absolute bottom-0 left-0 h-full w-[3px] bg-gradient-to-t from-transparent to-success-200 animate-run_b_t animation-delay-1000"></span>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default DraftPickCard
