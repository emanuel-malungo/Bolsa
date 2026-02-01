"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, TrendingUp, Clock, Award, ChevronRight } from "lucide-react";
import ScholarshipCard from "@/components/ui/shared/ScholarshipCard";

export default function Dashboard() {
    // Dados mockados - em produção viriam de uma API
    const userName = "Emanuel";
    const [favorites, setFavorites] = useState<string[]>([]);

    const recommendedScholarships = [
        {
            id: "1",
            title: "Bolsa de Mestrado em Engenharia de Software",
            university: "University of Toronto",
            country: "Canadá",
            type: "Integral",
            deadline: "15 Mar 2024",
            value: "CAD $25,000/ano",
            compatibility: 95
        },
        {
            id: "2", 
            title: "Programa de Doutorado em Ciência da Computação",
            university: "MIT",
            country: "Estados Unidos",
            type: "Integral",
            deadline: "01 Abr 2024",
            value: "USD $45,000/ano",
            compatibility: 88
        },
        {
            id: "3",
            title: "Bolsa de Graduação em Tecnologia",
            university: "Technical University of Munich",
            country: "Alemanha", 
            type: "Parcial",
            deadline: "20 Mar 2024",
            value: "EUR $12,000/ano",
            compatibility: 82
        },
        {
            id: "4",
            title: "Mestrado em Inteligência Artificial",
            university: "University of Oxford",
            country: "Reino Unido",
            type: "Integral",
            deadline: "10 Abr 2024", 
            value: "GBP $30,000/ano",
            compatibility: 76
        },
        {
            id: "5",
            title: "Bolsa de Intercâmbio em Inovação",
            university: "KAIST",
            country: "Coreia do Sul",
            type: "Parcial",
            deadline: "25 Mar 2024",
            value: "KRW $15,000,000/ano",
            compatibility: 68
        }
    ];

    const handleToggleFavorite = (scholarshipId: string) => {
        setFavorites(prev => 
            prev.includes(scholarshipId) 
                ? prev.filter(id => id !== scholarshipId)
                : [...prev, scholarshipId]
        );
    };

    const stats = [
        { label: "Bolsas Compatíveis", value: "127", icon: Award, color: "text-green-600" },
        { label: "Aplicações Abertas", value: "89", icon: TrendingUp, color: "text-blue-600" },
        { label: "Prazo Esta Semana", value: "12", icon: Clock, color: "text-orange-600" },
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-[#016EF8] to-blue-600 rounded-2xl p-8 text-white">
                <div className="max-w-4xl">
                    <h1 
                        className="text-3xl sm:text-4xl font-bold mb-4"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        Olá, {userName} 👋
                    </h1>
                    <p 
                        className="text-lg opacity-90 mb-6"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        Encontramos várias bolsas que combinam com seu perfil. Vamos descobrir sua próxima oportunidade!
                    </p>
                    <Link
                        href="/user/explore"
                        className="inline-flex items-center bg-white text-[#016EF8] px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        <Search className="w-5 h-5 mr-2" />
                        Explorar Bolsas
                        <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p 
                                        className="text-sm text-gray-600 mb-1"
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    >
                                        {stat.label}
                                    </p>
                                    <p 
                                        className="text-2xl font-bold text-gray-900"
                                        style={{ fontFamily: 'var(--font-dancing)' }}
                                    >
                                        {stat.value}
                                    </p>
                                </div>
                                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Recommended Scholarships */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 
                        className="text-2xl font-bold text-gray-900"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        Bolsas Recomendadas Para Você
                    </h2>
                    <Link
                        href="/user/explore"
                        className="text-[#016EF8] hover:text-blue-700 font-semibold text-sm flex items-center transition-colors"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        Ver todas
                        <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendedScholarships.slice(0, 6).map((scholarship) => (
                        <ScholarshipCard
                            key={scholarship.id}
                            {...scholarship}
                            isFavorite={favorites.includes(scholarship.id)}
                            onToggleFavorite={handleToggleFavorite}
                            showCompatibility={true}
                        />
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 
                    className="text-lg font-bold text-gray-900 mb-4"
                    style={{ fontFamily: 'var(--font-dancing)' }}
                >
                    Ações Rápidas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link
                        href="/user/favorites"
                        className="flex flex-col items-center p-4 border border-gray-200 rounded-xl hover:border-[#016EF8] hover:bg-[#016EF8]/5 transition-colors"
                    >
                        <div className="p-3 bg-red-100 text-red-600 rounded-full mb-3">
                            <Award className="w-6 h-6" />
                        </div>
                        <span 
                            className="text-sm font-medium text-gray-900 text-center"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Meus Favoritos
                        </span>
                    </Link>
                    <Link
                        href="/user/compare"
                        className="flex flex-col items-center p-4 border border-gray-200 rounded-xl hover:border-[#016EF8] hover:bg-[#016EF8]/5 transition-colors"
                    >
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-full mb-3">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <span 
                            className="text-sm font-medium text-gray-900 text-center"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Comparar Bolsas
                        </span>
                    </Link>
                    <Link
                        href="/user/profile"
                        className="flex flex-col items-center p-4 border border-gray-200 rounded-xl hover:border-[#016EF8] hover:bg-[#016EF8]/5 transition-colors"
                    >
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-full mb-3">
                            <Clock className="w-6 h-6" />
                        </div>
                        <span 
                            className="text-sm font-medium text-gray-900 text-center"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Editar Perfil
                        </span>
                    </Link>
                    <Link
                        href="/user/explore?filter=urgent"
                        className="flex flex-col items-center p-4 border border-gray-200 rounded-xl hover:border-[#016EF8] hover:bg-[#016EF8]/5 transition-colors"
                    >
                        <div className="p-3 bg-orange-100 text-orange-600 rounded-full mb-3">
                            <Search className="w-6 h-6" />
                        </div>
                        <span 
                            className="text-sm font-medium text-gray-900 text-center"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Prazos Urgentes
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}