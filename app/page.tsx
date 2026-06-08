import Link from 'next/link'
import GameCard from '@/components/GameCard'
import { games, daysUntil } from '@/lib/games'

export default function HomePage() {
  const nextGame = games[0]
  const moreGames = games.slice(1, 4)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800 py-20 px-4 text-center">
        <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">
          Programa Oficial do Corinthians
        </p>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
          Fiel Torcedor
        </h1>
        <p className="text-zinc-400 max-w-sm mx-auto text-base leading-relaxed">
          Compre seu ingresso, acompanhe os próximos jogos e viva o Timão de perto.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-10">
          <Link
            href="/jogos"
            className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-zinc-200 transition-colors text-sm"
          >
            Ver todos os jogos
          </Link>
          <Link
            href="/planos"
            className="border border-zinc-700 text-white font-semibold px-6 py-3 rounded-xl hover:border-zinc-500 transition-colors text-sm"
          >
            Conhecer planos
          </Link>
        </div>
      </section>

      {/* Próximo jogo */}
      {nextGame && (
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Próximo Jogo</h2>
            <span className="text-sm text-zinc-500">
              em {daysUntil(nextGame.date)} dias
            </span>
          </div>
          <div className="max-w-sm">
            <GameCard game={nextGame} />
          </div>
        </section>
      )}

      {/* Mais jogos */}
      {moreGames.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Mais jogos</h2>
            <Link
              href="/jogos"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {moreGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
