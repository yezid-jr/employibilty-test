'use client';

import { useEffect, useMemo, useState } from 'react';
import { fetchCharacters } from '@/services/api';
import { Character } from '@/types/character';

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    try {
      setLoading(true);
      const data = await fetchCharacters();
      setCharacters(data.results);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredCharacters = useMemo(() => {
    return characters.filter(c => {
      const matchName = c.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchStatus =
        statusFilter === 'all' || c.status === statusFilter;

      return matchName && matchStatus;
    });
  }, [characters, search, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: characters.length,
      alive: characters.filter(c => c.status === 'Alive').length,
      dead: characters.filter(c => c.status === 'Dead').length,
      unknown: characters.filter(c => c.status === 'unknown').length,
    };
  }, [characters]);

  return {
    characters: filteredCharacters,
    stats,
    loading,
    error,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
  };
}
