import Image from 'next/image'
import Link from 'next/link'
import TeamCard from './teamcard.js'

const api = 'http://127.0.0.1:8090/api';

async function getTeams(){
  const res = await fetch(`${api}/collections/teams/records`);
  const data = await res.json();
  return data?.items;
}

export default async function TeamsPage(){     
  const teams = await getTeams(); 
  return(
    <div>
      <h1>ACC Teams</h1>
      <div className = "cards">
        {teams?.map((team) => {
          return( 
            <Link href={`/teams/${team.id}`}>
              <TeamCard key={team.id} team={team} />
            </Link>
          ) 
        })};
      </div>
    </div>
  )
}
