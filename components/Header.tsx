'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`transition-colors ${
        pathname === href ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
      }`}
    >
      {label}
    </Link>
  )

  return (
    <header className="bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0">
            <span className="text-black font-black text-xs">SCF</span>
          </div>
          <span className="font-bold text-lg tracking-wide text-white">Fiel Torcedor</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLink('/jogos', 'Jogos')}
          {navLink('/planos', 'Planos')}
          {navLink('/ajuda', 'Ajuda')}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/entrar"
            className="hidden md:block text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Entrar
          </Link>
          <Link
            href="/cadastrar"
            className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors"
          >
            Associar-se
          </Link>

          <button
            className="md:hidden p-2 flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800 px-4 py-4 flex flex-col gap-4 text-sm bg-black">
          <Link href="/jogos" className="text-zinc-300 hover:text-white" onClick={() => setMenuOpen(false)}>Jogos</Link>
          <Link href="/planos" className="text-zinc-300 hover:text-white" onClick={() => setMenuOpen(false)}>Planos</Link>
          <Link href="/ajuda" className="text-zinc-300 hover:text-white" onClick={() => setMenuOpen(false)}>Ajuda</Link>
          <Link href="/entrar" className="text-zinc-300 hover:text-white" onClick={() => setMenuOpen(false)}>Entrar</Link>
        </div>
      )}
    </header>
  )
}
