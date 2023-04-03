'use client'

import Image from 'next/image'
import TeamCard from '../teamcard.js'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

const api = 'http://127.0.0.1:8090/api';

// async function getTeam(teamId){
//   const res = await fetch(`${api}/collections/teams/records/${teamId}`, {
//     next: {revalidate: 10},
//   });
//   const data = await res.json();
//   return data;
// }

export default function TeamPage({ params }){

  const query = useSearchParams();
  const vals = Array.from(query.values());
  const [wins, setWins] = useState(parseInt(vals[1]));
  const [losses, setLosses] = useState(parseInt(vals[2]));

  const team = {id: params.id, name: vals[0], wins: wins, losses: losses, picture:vals[3]}

  return(
    <>
    <div>
      <h1>Team/{params.id}</h1>
      <div>
        <h3>{team.name}</h3>
        <TeamCard team={team}/>
      </div>
      <button onClick={()=>setWins(wins+1)}>+win</button>
      {team.name !== "UNC" &&
      <>
        <button onClick={()=>setWins(wins-1)}>-win</button>
        <button onClick={()=>setLosses(losses+1)}>+loss</button>
        <button onClick={()=>setLosses(losses-1)}>-loss</button>
      </>
      }
    </div>
    </>
  );
}