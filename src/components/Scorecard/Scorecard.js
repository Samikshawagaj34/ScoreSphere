import { CircleMinus as IconCircleMinus, SquarePlus as IconSquarePlus } from 'lucide-react';
import React from 'react';

function Scorecard({score,increaseScore,decreaseScore,teamName,iswinner}) {
  return (
    
    
      <div className='bg-white m-5 w-auto md:w-1/3 rounded-lg' >
    <h2 className='text-2xl text-center my-4 border-b-2 pb-4 text-orange-600'> {teamName} {iswinner? "🏆" : ""} </h2>
    <h3 className='text-5xl text-center text-orange-600'>{score}</h3>

    <div className='flex justify-around mb-5 mt-4 md:mt-14'>
    <IconCircleMinus size={40}onClick={decreaseScore} />
    <IconSquarePlus size={40} onClick={increaseScore}/>
    </div>
   
</div>

  )
}

export default Scorecard