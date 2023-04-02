import Image from 'next/image'
import TeamCard from '../teamcard.js'

const api = 'http://127.0.0.1:8090/api';

async function getTeam(teamId){
  const res = await fetch(`${api}/collections/teams/records/${teamId}`, {
    next: {revalidate: 10},
  });
  const data = await res.json();
  return data;
}

export default async function TeamPage({ params }){
  const team = await getTeam(params.id);
  const {id, name, wins, losses, picture} = team || {};

  const src_url = `${api}/files/teams/${id}/${picture}`;

  return(
    <div>
      <h1>Team/{team.id}</h1>
      <div>
        <h3>{team.name}</h3>
        <TeamCard key={team.id} team={team} />
      </div>
    </div>
  );
}