import Image from 'next/image'
import Link from 'next/link'

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
          return <TeamCard key={team.id} team={team} />;
        })}
      </div>
    </div>
  )
}

function TeamCard({team}) {
  const {id, name, wins, losses, picture} = team || {};
  let src_url = `${api}/files/teams/${id}/${picture}`;

  return (
    <Link href={`/teams/${id}`}>
      <div className="teamCard">
        <Image
          src = {src_url}
          alt = {`${name} logo`}
          width = {150}
          height = {150}
        />
        <p className="record">{wins} - {losses}</p>
      </div>
    </Link>
  )
}