'use client';

import { useCharacters } from '@/hooks/useCharacters';
import { DashboardStats } from './../components/dashboard/DashboardStast';
import { DashboardFilters } from '../components/dashboard/DashboardFilters';
import { CharacterGrid } from '../components/dashboard/CharacterGrid';
import  LoadingState  from '@/app/components/ui/LoadingState';

export default function DashboardPage() {
  const {
    characters,
    stats,
    loading,
    error,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
  } = useCharacters();

  if (loading) return <LoadingState />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container-fluid p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <DashboardStats stats={stats} />

      <DashboardFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        total={characters.length}
      />

      <CharacterGrid characters={characters} />
    </div>
  );
}
