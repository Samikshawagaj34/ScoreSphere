import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Scorecard from '../../components/Scorecard/Scorecard';
import './Home.css';


function Home() {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [winner, setWinner] = useState(null);

    const MaxScore = 7;

    useEffect(()=>{
      if(score1<MaxScore && score2<MaxScore){

       return;
      }
      if(score1 === MaxScore){
        setWinner("Victory Giants🏆");
        toast.success("Victory Giants🏆 wins the match");
      }

      if(score2 === MaxScore){
        setWinner("Power Gladiators⚔️");
        toast.success("Power Gladiators⚔️ wins the match");
      }


    },[score1, score2]);
  return (
    <div className='bg-orange-50 min-h-screen p-10' >
        
        <h1 className='text-center text-3xl md:text-5xl py-4 md:py-10 border-2  border-orange-400 border-separate rounded-lg text-orange-600 bg-slate-50'>Score Sphere</h1>
       

        <div className='flex flex-col md:flex-row justify-center md:mt-10 '>
           <Scorecard score={score1} teamName="Victory Giants🏆" increaseScore={()=>{
            if(winner)return;setScore1(score1+1);}} 
                decreaseScore={()=>{
                  if(winner)return;
                  setScore1(score1-1);}}
                iswinner={winner === "Victory Giants🏆"}/>

           <Scorecard score={score2} teamName="Power Gladiators⚔️" 
              increaseScore={()=>{
                if(winner)return;setScore2(score2+1);}} decreaseScore={()=>{
                  if(winner)return;setScore2(score2-1);}}
              iswinner={winner === "Power Gladiators⚔️"}/>
            
        </div>
        {winner ?(
          <p className='text-center text-2xl mt-10 text-orange-600'>
            winner team is <b className='underline decoration-wavy'> {winner}..!!</b>click on reset to start a new game.
          </p>
        ) : null}

       <div className='flex justify-center mt-10'>
        <button className='bg-orange-600 px-10 py-3 text-4xl rounded-lg' onClick={()=>{
            setScore1(0);
            setScore2(0);
            setWinner(null);
        }}>Reset</button>
       </div>
        

        <Toaster/>
    </div>
  )
}

export default Home;