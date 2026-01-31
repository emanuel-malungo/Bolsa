"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header 
            className={`top-0 z-50 w-full transition-all duration-300 ${
                isScrolled 
                    ? 'sticky bg-white border-b border-gray-200 shadow-sm' 
                    : 'absolute bg-transparent'
            }`}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                <div className="flex items-center justify-between gap-4 sm:gap-8">
                    <div className="flex items-center gap-6 sm:gap-8 lg:gap-12">
                        <Link href="/" className="flex items-center gap-2">
                            <h1 
                                className={`text-xl sm:text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                                    isScrolled 
                                        ? 'bg-linear-to-r from-[#016EF8] to-blue-600 bg-clip-text text-transparent' 
                                        : 'text-white drop-shadow-lg'
                                }`} 
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                BOLSAS
                            </h1>
                        </Link>

                        <ul className="hidden md:flex items-center gap-4 lg:gap-8" style={{ fontFamily: 'var(--font-poppins)' }}>
                            <li>
                                <Link href="/" className={`font-medium transition-colors duration-200 text-sm lg:text-base ${
                                    isScrolled 
                                        ? 'text-gray-700 hover:text-[#016EF8]' 
                                        : 'text-white hover:text-blue-200'
                                }`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className={`font-medium transition-colors duration-200 text-sm lg:text-base ${
                                    isScrolled 
                                        ? 'text-gray-700 hover:text-[#016EF8]' 
                                        : 'text-white hover:text-blue-200'
                                }`}>
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link href="#institutions" className={`font-medium transition-colors duration-200 text-sm lg:text-base ${
                                    isScrolled 
                                        ? 'text-gray-700 hover:text-[#016EF8]' 
                                        : 'text-white hover:text-blue-200'
                                }`}>
                                    Instituições
                                </Link>
                            </li>
                            <li>
                                <Link href="#scholarships" className={`font-medium transition-colors duration-200 text-sm lg:text-base ${
                                    isScrolled 
                                        ? 'text-gray-700 hover:text-[#016EF8]' 
                                        : 'text-white hover:text-blue-200'
                                }`}>
                                    Bolsas
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className={`font-medium transition-colors duration-200 text-sm lg:text-base ${
                                    isScrolled 
                                        ? 'text-gray-700 hover:text-[#016EF8]' 
                                        : 'text-white hover:text-blue-200'
                                }`}>
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMobileMenu}
                        className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                            isScrolled 
                                ? 'text-gray-700 hover:bg-gray-100' 
                                : 'text-white hover:bg-white/10'
                        }`}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div className="hidden md:flex items-center gap-2 sm:gap-3 lg:gap-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                        <Link 
                            href="/login"
                            className={`px-3 sm:px-4 lg:px-6 py-2 lg:py-2.5 border-2 rounded-full font-semibold transition-colors duration-200 text-xs sm:text-sm lg:text-base ${
                                isScrolled 
                                    ? 'text-[#016EF8] border-[#016EF8] hover:bg-[#016EF8] hover:text-white' 
                                    : 'text-white border-white hover:bg-white hover:text-gray-800'
                            }`}
                        >
                            Entrar
                        </Link>
                        <Link 
                            href="/register"
                            className="px-3 sm:px-4 lg:px-6 py-2 lg:py-2.5 bg-[#016EF8] text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg text-xs sm:text-sm lg:text-base"
                        >
                            Criar Conta
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`} onClick={toggleMobileMenu}>
                <div className={`absolute top-0 right-0 bg-[#016EF8] w-80 h-full shadow-2xl transform transition-transform duration-300 ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`} onClick={(e) => e.stopPropagation()}>
                    
                    {/* Close Button */}
                    <div className="flex justify-end p-4">
                        <button 
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-6 pt-4">
                        <nav className="space-y-6" style={{ fontFamily: 'var(--font-poppins)' }}>
                            <Link 
                                href="/" 
                                className="block text-white hover:text-blue-100 font-medium text-lg transition-colors duration-200 py-2 border-b border-blue-400/20"
                                onClick={toggleMobileMenu}
                            >
                                Home
                            </Link>
                            <Link 
                                href="#about" 
                                className="block text-white hover:text-blue-100 font-medium text-lg transition-colors duration-200 py-2 border-b border-blue-400/20"
                                onClick={toggleMobileMenu}
                            >
                                Sobre
                            </Link>
                            <Link 
                                href="#institutions" 
                                className="block text-white hover:text-blue-100 font-medium text-lg transition-colors duration-200 py-2 border-b border-blue-400/20"
                                onClick={toggleMobileMenu}
                            >
                                Instituições
                            </Link>
                            <Link 
                                href="#scholarships" 
                                className="block text-white hover:text-blue-100 font-medium text-lg transition-colors duration-200 py-2 border-b border-blue-400/20"
                                onClick={toggleMobileMenu}
                            >
                                Bolsas
                            </Link>
                            <Link 
                                href="#contact" 
                                className="block text-white hover:text-blue-100 font-medium text-lg transition-colors duration-200 py-2 border-b border-blue-400/20"
                                onClick={toggleMobileMenu}
                            >
                                Contato
                            </Link>
                        </nav>
                        
                        <div className="mt-10 space-y-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                            <Link 
                                href="/login"
                                className="block w-full px-6 py-3 text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-[#016EF8] transition-colors duration-200 text-center"
                                onClick={toggleMobileMenu}
                            >
                                Entrar
                            </Link>
                            <Link 
                                href="/register"
                                className="block w-full px-6 py-3 bg-white text-[#016EF8] rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-md hover:shadow-lg text-center"
                                onClick={toggleMobileMenu}
                            >
                                Criar Conta
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}