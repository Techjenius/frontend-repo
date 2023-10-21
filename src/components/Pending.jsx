import React from 'react'
import Card from './Card'
import StatsCard from './StatsCard'
const Pending = () => {
  return (
 
    <div className="mt-5 flex flex-wrap lg:flex-nowrap justify-between gap-4">
        <Card />
        <StatsCard />
      </div>
  )
}

export default Pending