import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "Sobre Nós", href: "/sobre" },
        { name: "Como Funciona", href: "/como-funciona" },
        { name: "Explorar Bolsas", href: "/explorar" },
    ];

    const categories = [
        { name: "Graduação", href: "/graduacao" },
        { name: "Pós-Graduação", href: "/pos-graduacao" },
        { name: "MBA", href: "/mba" },
        { name: "Doutorado", href: "/doutorado" },
    ];

    const support = [
        { name: "Central de Ajuda", href: "/ajuda" },
        { name: "Contato", href: "/contato" },
        { name: "FAQ", href: "/faq" },
        { name: "Política de Privacidade", href: "/privacidade" },
    ];

    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
        { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
        { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
        { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {/* Brand Section */}
                    <div className="xl:col-span-2">
                        <div className="mb-6">
                            <Link href="/" className="inline-block">
                                <h2 
                                    className="text-3xl font-bold text-white"
                                    style={{ fontFamily: 'var(--font-dancing)' }}
                                >
                                    BOLSAS
                                </h2>
                            </Link>
                        </div>
                        
                        <p 
                            className="text-gray-300 mb-6 leading-relaxed max-w-md"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Conectamos estudantes talentosos com as melhores oportunidades de bolsas de estudo em universidades de prestígio mundial.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail className="w-5 h-5 text-[#016EF8]" />
                                <span 
                                    className="text-sm"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    contato@bolsas.com
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone className="w-5 h-5 text-[#016EF8]" />
                                <span 
                                    className="text-sm"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    +55 (11) 9999-9999
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin className="w-5 h-5 text-[#016EF8]" />
                                <span 
                                    className="text-sm"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    São Paulo, Brasil
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 
                            className="text-lg font-semibold mb-4"
                            style={{ fontFamily: 'var(--font-dancing)' }}
                        >
                            Links Rápidos
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 
                            className="text-lg font-semibold mb-4"
                            style={{ fontFamily: 'var(--font-dancing)' }}
                        >
                            Categorias
                        </h3>
                        <ul className="space-y-3">
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <Link 
                                        href={category.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    >
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 
                            className="text-lg font-semibold mb-4"
                            style={{ fontFamily: 'var(--font-dancing)' }}
                        >
                            Suporte
                        </h3>
                        <ul className="space-y-3">
                            {support.map((item, index) => (
                                <li key={index}>
                                    <Link 
                                        href={item.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div className="text-center lg:text-left">
                            <h3 
                                className="text-xl font-semibold mb-2"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                Receba as melhores oportunidades
                            </h3>
                            <p 
                                className="text-gray-300 text-sm"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Cadastre-se e receba alertas sobre novas bolsas disponíveis
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-96">
                            <input 
                                type="email" 
                                placeholder="Seu melhor e-mail"
                                className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-[#016EF8] focus:outline-none flex-1"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            />
                            <button 
                                className="px-6 py-3 bg-[#016EF8] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Inscrever-se
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p 
                            className="text-gray-400 text-sm text-center sm:text-left"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            © 2026 Bolsas. Todos os direitos reservados.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, index) => (
                                <Link 
                                    key={index}
                                    href={social.href}
                                    className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}