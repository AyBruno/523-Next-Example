'use client'
import Image from 'next/image'

const api = 'http://127.0.0.1:8090/api';

export default function TeamCard({team}) {
  const {id, name, wins, losses, picture} = team || {};
  const src_url = `${api}/files/teams/${id}/${picture}`;

  return (
      <div className="teamCard">
        <Image
          src = {src_url}
          alt = {`${name} logo`}
          width = {150}
          height = {150}
        />
        <p className="record">{wins} - {losses}</p>
      </div>
  )
}