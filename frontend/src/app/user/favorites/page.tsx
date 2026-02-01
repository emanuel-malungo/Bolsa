"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Search, Filter, SlidersHorizontal, X } from "lucide-react";
import ScholarshipCard from "../../../components/ui/shared/ScholarshipCard";

export default function Favorites() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        type: "",
        country: "",
        value: ""
    });

    // Mock data de bolsas favoritadas
    const favoriteScholarships = [
        {
            id: "1",
            title: "Bolsa de Mestrado em Engenharia de Software",
            university: "University of Toronto",
            country: "Canadá",
            type: "Integral",
            deadline: "15 de Março de 2024",
            value: "CAD $25,000/ano",
            compatibility: 95,
            description: "Programa focado em desenvolvimento de sistemas distribuídos e IA."
        },
        {
            id: "2", 
            title: "PhD em Ciência da Computação",
            university: "MIT",
            country: "Estados Unidos",
            type: "Integral",
            deadline: "1 de Dezembro de 2023",
            value: "USD $35,000/ano",
            compatibility: 92,
            description: "Pesquisa em machine learning e algoritmos avançados."
        },
        {
            id: "3",
            title: "Mestrado em Data Science",
            university: "University of Melbourne",
            country: "Austrália",
            type: "Parcial",
            deadline: "30 de Janeiro de 2024",
            value: "AUD $15,000/ano",
            compatibility: 88,
            description: "Programa interdisciplinar com foco em big data e analytics."
        },
        {
            id: "4",
            title: "Bolsa Erasmus+ em Inteligência Artificial",
            university: "Technical University of Munich",
            country: "Alemanha",
            type: "Integral",
            deadline: "15 de Fevereiro de 2024",
            value: "EUR $18,000/ano",
            compatibility: 85,
            description: "Programa conjunto com universidades europeias de renome."
        }
    ];

    const handleRemoveFavorite = (scholarshipId: string) => {
        // Em produção, faria a remoção via API
        console.log("Removendo dos favoritos:", scholarshipId);
    };

    const filteredScholarships = favoriteScholarships.filter(scholarship => {
        const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             scholarship.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             scholarship.country.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesType = !filters.type || scholarship.type === filters.type;
        const matchesCountry = !filters.country || scholarship.country === filters.country;
        
        return matchesSearch && matchesType && matchesCountry;
    });

    const countries = Array.from(new Set(favoriteScholarships.map(s => s.country)));
    const types = Array.from(new Set(favoriteScholarships.map(s => s.type)));

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center">
                <h1 
                    className="text-4xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: 'var(--font-dancing)' }}
                >
                    Minhas Bolsas Favoritas
                </h1>
                <p 
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                >
                    Organize e acompanhe as bolsas que mais chamaram sua atenção
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                    <div className="flex items-center justify-center mb-3">
                        <Heart className="w-8 h-8 text-red-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'var(--font-dancing)' }}>
                        {favoriteScholarships.length}
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                        Bolsas Favoritadas
                    </div>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                    <div className="flex items-center justify-center mb-3">
                        <Search className="w-8 h-8 text-green-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'var(--font-dancing)' }}>
                        {Math.round(favoriteScholarships.reduce((acc, s) => acc + s.compatibility, 0) / favoriteScholarships.length)}%
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                        Compatibilidade Média
                    </div>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                    <div className="flex items-center justify-center mb-3">
                        <Filter className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'var(--font-dancing)' }}>
                        {favoriteScholarships.filter(s => s.type === 'Integral').length}
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                        Bolsas Integrais
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex flex-col lg:flex-row gap-4 mb-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Buscar por título, universidade ou país..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        />
                    </div>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        <SlidersHorizontal className="w-5 h-5 mr-2" />
                        Filtros
                    </button>
                </div>

                {/* Filtros expandidos */}
                {showFilters && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                Tipo de Bolsa
                            </label>
                            <select
                                value={filters.type}
                                onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                <option value="">Todos os tipos</option>
                                {types.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                País
                            </label>
                            <select
                                value={filters.country}
                                onChange={(e) => setFilters(prev => ({ ...prev, country: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                <option value="">Todos os países</option>
                                {countries.map(country => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-end">
                            <button
                                onClick={() => setFilters({ type: "", country: "", value: "" })}
                                className="w-full flex items-center justify-center px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                <X className="w-4 h-4 mr-2" />
                                Limpar Filtros
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Results */}
            {filteredScholarships.length > 0 ? (
                <>
                    <div className="flex items-center justify-between">
                        <h2 
                            className="text-xl font-bold text-gray-900"
                            style={{ fontFamily: 'var(--font-dancing)' }}
                        >
                            {filteredScholarships.length} bolsa{filteredScholarships.length !== 1 ? 's' : ''} encontrada{filteredScholarships.length !== 1 ? 's' : ''}
                        </h2>
                        <Link
                            href="/user/compare"
                            className="flex items-center px-4 py-2 bg-[#016EF8] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            <Filter className="w-4 h-4 mr-2" />
                            Comparar Todas
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredScholarships.map((scholarship) => (
                            <ScholarshipCard
                                key={scholarship.id}
                                scholarship={scholarship}
                                showCompatibility={true}
                                onToggleFavorite={handleRemoveFavorite}
                                isFavorite={true}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                    <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 
                        className="text-xl font-bold text-gray-900 mb-2"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        Nenhuma bolsa encontrada
                    </h3>
                    <p 
                        className="text-gray-600 mb-6"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        {searchTerm || Object.values(filters).some(f => f) 
                            ? "Tente ajustar seus filtros de busca" 
                            : "Você ainda não favoritou nenhuma bolsa"}
                    </p>
                    <Link
                        href="/user/explore"
                        className="inline-flex items-center px-6 py-3 bg-[#016EF8] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        <Search className="w-4 h-4 mr-2" />
                        Explorar Bolsas
                    </Link>
                </div>
            )}
        </div>
    );
}