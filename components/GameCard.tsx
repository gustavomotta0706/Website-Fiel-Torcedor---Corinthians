import Link from 'next/link'
import { Game, competitionColors, statusConfig, formatGameDate } from '@/lib/games'

export default function GameCard({ game }: { game: Game }) {
  const { day, time, weekday } = formatGameDate(game.date)
  const status = statusConfig[game.status]
  const compColor = competitionColors[game.competition]
  const canBuy = game.status === 'open' || game.status === 'members_only'

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all hover:shadow-lg hover:shadow-black/40">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full text-white ${compColor}`}>
          {game.competitionLabel}
        </span>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${status.className}`}>
          {status.label}
        </span>
      </div>

      {/* Teams */}
      <div className="px-4 py-6 flex items-center justify-between gap-3">
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center border-2 border-zinc-700">
            <span className="text-white font-black text-xs">COR</span>
          </div>
          <span className="text-sm font-semibold text-white text-center leading-tight">Corinthians</span>
        </div>

        <div className="flex flex-col items-center gap-0.5 shrink-0">
          <span className="text-zinc-500 text-xs font-medium uppercase tracking-widest">vs</span>
          <span className="text-white font-bold text-xl">{day}</span>
          <span className="text-zinc-400 text-xs capitalize">{weekday}</span>
          <span className="text-zinc-400 text-xs">{time}h</span>
        </div>

        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center border-2 border-zinc-700">
            <span className="text-zinc-300 font-black text-xs">{game.opponentInitials}</span>
          </div>
          <span className="text-sm font-semibold text-white text-center leading-tight">{game.opponent}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between text-xs text-zinc-500 mb-3">
          <span className="truncate">📍 {game.stadium}</span>
          {game.round && <span className="ml-2 shrink-0">{game.round}</span>}
        </div>

        <div className="flex items-center justify-between gap-2">
          <div>
            {game.priceFrom ? (
              <span className="text-sm text-zinc-300">
                A partir de{' '}
                <span className="text-white font-bold">R$ {game.priceFrom}</span>
              </span>
            ) : (
              <span className="text-sm text-zinc-500">Preço em breve</span>
            )}
          </div>

          {canBuy ? (
            <Link
              href={`/jogos/${game.id}`}
              className="bg-white text-black text-sm font-bold px-5 py-2 rounded-lg hover:bg-zinc-200 transition-colors shrink-0"
            >
              Comprar
            </Link>
          ) : (
            <button
              disabled
              className="bg-zinc-800 text-zinc-500 text-sm font-semibold px-5 py-2 rounded-lg cursor-not-allowed shrink-0"
            >
              {game.status === 'sold_out' ? 'Esgotado' : 'Em breve'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
