'use client'

import { Card } from "../components/ui/Card"
import { useCharacters } from "@/hooks/useCharacters"

export default function HomePage() {
  const { characters, loading, error } = useCharacters()

  if (loading) return <p>Cargando...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="bg-red-500">
      {characters.map(char => (
        <Card
          key={char.id}
          title={char.name}
          description={char.status}
          imageUrl={char.image}
          onClick={() => console.log(char.name)}
        />
      ))}
    </div>
  )
}
