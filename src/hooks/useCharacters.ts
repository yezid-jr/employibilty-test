import { useEffect, useState } from "react"
import { getCharacters } from "@/services/api"
import { Character } from "@/types/character"

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getCharacters()
      .then(setCharacters)
      .catch(() => setError("Error loading characters"))
      .finally(() => setLoading(false))
  }, [])

  return { characters, loading, error }
}
