import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-10 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
              <span className="text-black font-black text-xs">SCF</span>
            </div>
            <span className="font-bold text-white">Fiel Torcedor</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs">
            Programa oficial de sócio-torcedor do Sport Club Corinthians Paulista.
          </p>
        </div>

        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-3">
            <span className="text-zinc-500 font-medium uppercase tracking-wider text-xs">Programa</span>
            <Link href="/planos" className="text-zinc-400 hover:text-white transition-colors">Planos</Link>
            <Link href="/jogos" className="text-zinc-400 hover:text-white transition-colors">Jogos</Link>
            <Link href="/beneficios" className="text-zinc-400 hover:text-white transition-colors">Benefícios</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-zinc-500 font-medium uppercase tracking-wider text-xs">Suporte</span>
            <Link href="/ajuda" className="text-zinc-400 hover:text-white transition-colors">Ajuda</Link>
            <Link href="/contato" className="text-zinc-400 hover:text-white transition-colors">Contato</Link>
            <Link href="/tutoriais" className="text-zinc-400 hover:text-white transition-colors">Tutoriais</Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-zinc-900 text-zinc-600 text-xs">
        © 2026 Sport Club Corinthians Paulista. Todos os direitos reservados.
      </div>
    </footer>
  )
}
