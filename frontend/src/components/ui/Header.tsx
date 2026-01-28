import Link from "next/link";

export default function Header() {
    return (
        <header className="">
            <nav className="container mx-auto">
                <div className="flex items-center gap-8" >
                    <h1 className="">BOLSAS</h1>

                    <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Sobre</Link>
                    </li>
                    <li>
                        <Link href="/about">Como Funciona</Link>
                    </li>
                       <li>
                        <Link href="/about">Explorar Bolsas</Link>
                    </li>
                   </ul>
                </div>

                <div>
                    <button>
                        Entrar
                    </button>
                    <button>
                        Criar Conta
                    </button>
                </div>
            </nav>
        </header>
    )
}