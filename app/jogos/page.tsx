'use client'
import { useState } from 'react'
import GameCard from '@/components/GameCard'
import { games, Competition } from '@/lib/games'

type Filter = Competition | 'todos'

const filters: { label: string; value: Filter }[] = [
  { label: 'Todos', value: 'todos' },
  { label: 'Brasileirão', value: 'brasileirao' },
  { label: 'Copa do Brasil', value: 'copa-brasil' },
  { label: 'Libertadores', value: 'libertadores' },
]

export default function JogosPage() {
  const [filter, setFilter] = useState<Filter>('todos')

  const filtered = filter === 'todos'
    ? games
    : games.filter((g) => g.competition === filter)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Próximos Jogos</h1>
        <p className="text-zinc-400">Jogos em casa · Neo Química Arena</p>
      </div>

      {/* Filtros */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === f.value
                ? 'bg-white text-black'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-zinc-500">
          Nenhum jogo encontrado para essa competição.
        </div>
      )}
    </div>
  )
}
