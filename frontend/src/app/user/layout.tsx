"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
    Home, 
    Search, 
    Heart, 
    GitCompare, 
    User, 
    Menu, 
    X, 
    Bell,
    LogOut 
} from "lucide-react";

interface UserLayoutProps {
    children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navigationItems = [
        { name: "Dashboard", href: "/user/dashboard", icon: Home },
        { name: "Explorar", href: "/user/explore", icon: Search },
        { name: "Favoritos", href: "/user/favorites", icon: Heart },
        { name: "Comparar", href: "/user/compare", icon: GitCompare },
        { name: "Perfil", href: "/user/profile", icon: User },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActive = (href: string) => pathname === href;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/user/dashboard" className="flex items-center">
                            <h1 
                                className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#016EF8] to-blue-600 bg-clip-text text-transparent"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                BOLSAS
                            </h1>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navigationItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                            isActive(item.href)
                                                ? 'text-[#016EF8] bg-[#016EF8]/10'
                                                : 'text-gray-600 hover:text-[#016EF8] hover:bg-gray-100'
                                        }`}
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    >
                                        <Icon className="w-4 h-4 mr-2" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Desktop Right Actions */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="p-2 text-gray-600 hover:text-[#016EF8] rounded-lg hover:bg-gray-100 transition-colors">
                                <Bell className="w-5 h-5" />
                            </button>
                            <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-100 transition-colors">
                                <LogOut className="w-4 h-4" />
                                <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-poppins)' }}>
                                    Sair
                                </span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200">
                        <div className="px-4 py-2 space-y-1">
                            {navigationItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                            isActive(item.href)
                                                ? 'text-[#016EF8] bg-[#016EF8]/10'
                                                : 'text-gray-600 hover:text-[#016EF8] hover:bg-gray-100'
                                        }`}
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    >
                                        <Icon className="w-4 h-4 mr-3" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-2 border-t border-gray-200 mt-2">
                                <button className="flex items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-gray-100 transition-colors">
                                    <LogOut className="w-4 h-4 mr-3" />
                                    Sair
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
        </div>
    );
}