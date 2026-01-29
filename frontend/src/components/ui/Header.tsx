import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <nav className="container mx-auto px-4 py-4 sm:py-3">
                <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="flex items-center gap-2">
                            <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-[#016EF8] to-blue-600 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-dancing)' }}>
                                BOLSAS
                            </h1>
                        </Link>

                        <ul className="hidden md:flex items-center gap-8" style={{ fontFamily: 'var(--font-poppins)' }}>
                            <li>
                                <Link href="/" className="text-gray-700 hover:text-[#016EF8] font-medium transition-colors duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-gray-700 hover:text-[#016EF8] font-medium transition-colors duration-200">
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-700 hover:text-[#016EF8] font-medium transition-colors duration-200">
                                    Como funciona
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-700 hover:text-[#016EF8] font-medium transition-colors duration-200">
                                    Explorar bolsas
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                        <button className="px-4 sm:px-6 py-2.5 text-[#016EF8] border-2 border-[#016EF8] rounded-full font-semibold hover:bg-[#016EF8] hover:text-white transition-colors duration-200">
                            Entrar
                        </button>
                        <button className="px-4 sm:px-6 py-2.5 bg-[#016EF8] text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg">
                            Criar Conta
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}