import React from 'react'

const Map = () => {
    const number=[2,3,4,5,6,7,8,9,0]
    const squre=number.map((c,i)=>i+c*c)
  return (
    <div>
        <div >
           {console.log(squre)}
        </div>
    </div>
  )
}

export default Map