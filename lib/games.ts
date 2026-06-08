export type GameStatus = 'open' | 'soon' | 'sold_out' | 'members_only'
export type Competition = 'brasileirao' | 'copa-brasil' | 'libertadores' | 'sul-americana' | 'outros'

export interface Game {
  id: string
  date: string
  opponent: string
  opponentInitials: string
  competition: Competition
  competitionLabel: string
  stadium: string
  status: GameStatus
  priceFrom?: number
  round?: string
}

const STADIUM = 'Neo Química Arena'

export const games: Game[] = [
  {
    id: '1',
    date: '2026-06-15T16:00:00',
    opponent: 'Flamengo',
    opponentInitials: 'FLA',
    competition: 'brasileirao',
    competitionLabel: 'Brasileirão Série A',
    stadium: STADIUM,
    status: 'open',
    priceFrom: 60,
    round: 'Rodada 10',
  },
  {
    id: '2',
    date: '2026-06-22T20:00:00',
    opponent: 'Atlético Mineiro',
    opponentInitials: 'CAM',
    competition: 'copa-brasil',
    competitionLabel: 'Copa do Brasil',
    stadium: STADIUM,
    status: 'open',
    priceFrom: 50,
    round: 'Oitavas de Final',
  },
  {
    id: '3',
    date: '2026-07-05T18:30:00',
    opponent: 'São Paulo',
    opponentInitials: 'SPFC',
    competition: 'brasileirao',
    competitionLabel: 'Brasileirão Série A',
    stadium: STADIUM,
    status: 'soon',
    round: 'Rodada 13',
  },
  {
    id: '4',
    date: '2026-07-12T16:00:00',
    opponent: 'Palmeiras',
    opponentInitials: 'PAL',
    competition: 'brasileirao',
    competitionLabel: 'Brasileirão Série A',
    stadium: STADIUM,
    status: 'soon',
    round: 'Rodada 15',
  },
  {
    id: '5',
    date: '2026-07-19T20:00:00',
    opponent: 'Fluminense',
    opponentInitials: 'FLU',
    competition: 'libertadores',
    competitionLabel: 'Copa Libertadores',
    stadium: STADIUM,
    status: 'members_only',
    priceFrom: 80,
    round: 'Quartas de Final',
  },
  {
    id: '6',
    date: '2026-08-02T16:00:00',
    opponent: 'Grêmio',
    opponentInitials: 'GRE',
    competition: 'brasileirao',
    competitionLabel: 'Brasileirão Série A',
    stadium: STADIUM,
    status: 'soon',
    round: 'Rodada 18',
  },
  {
    id: '7',
    date: '2026-08-16T20:00:00',
    opponent: 'Internacional',
    opponentInitials: 'INT',
    competition: 'brasileirao',
    competitionLabel: 'Brasileirão Série A',
    stadium: STADIUM,
    status: 'soon',
    round: 'Rodada 20',
  },
  {
    id: '8',
    date: '2026-09-06T16:00:00',
    opponent: 'Botafogo',
    opponentInitials: 'BOT',
    competition: 'brasileirao',
    competitionLabel: 'Brasileirão Série A',
    stadium: STADIUM,
    status: 'soon',
    round: 'Rodada 23',
  },
]

export const competitionColors: Record<Competition, string> = {
  brasileirao: 'bg-green-700',
  'copa-brasil': 'bg-blue-700',
  libertadores: 'bg-yellow-600',
  'sul-americana': 'bg-orange-700',
  outros: 'bg-zinc-600',
}

export const statusConfig: Record<GameStatus, { label: string; className: string }> = {
  open: {
    label: 'Venda aberta',
    className: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
  },
  soon: {
    label: 'Em breve',
    className: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  },
  sold_out: {
    label: 'Esgotado',
    className: 'bg-red-500/20 text-red-400 border border-red-500/30',
  },
  members_only: {
    label: 'Só sócios',
    className: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  },
}

export function daysUntil(dateStr: string): number {
  const date = new Date(dateStr)
  const now = new Date()
  return Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
}

export function formatGameDate(dateStr: string) {
  const date = new Date(dateStr)
  return {
    day: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
    time: date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    weekday: date.toLocaleDateString('pt-BR', { weekday: 'short' }),
    monthYear: date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }),
  }
}
