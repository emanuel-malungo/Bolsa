"use client";

import { useState } from "react";
import { Search, Filter, SlidersHorizontal, X } from "lucide-react";
import ScholarshipCard from "@/components/ui/shared/ScholarshipCard";

export default function ExploreScholarships() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [favorites, setFavorites] = useState<string[]>([]);
    
    const [filters, setFilters] = useState({
        country: "",
        level: "",
        area: "",
        type: "",
        deadline: ""
    });

    // Dados mockados - em produção viriam de uma API
    const allScholarships = [
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
        },
        {
            id: "6",
            title: "Programa de Pesquisa em Medicina",
            university: "University of Sydney",
            country: "Austrália",
            type: "Integral",
            deadline: "05 Mai 2024",
            value: "AUD $35,000/ano",
            compatibility: 71
        }
    ];

    const handleToggleFavorite = (scholarshipId: string) => {
        setFavorites(prev => 
            prev.includes(scholarshipId) 
                ? prev.filter(id => id !== scholarshipId)
                : [...prev, scholarshipId]
        );
    };

    const handleFilterChange = (key: string, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const clearFilters = () => {
        setFilters({
            country: "",
            level: "",
            area: "",
            type: "",
            deadline: ""
        });
    };

    const filteredScholarships = allScholarships.filter(scholarship => {
        const matchesSearch = searchTerm === "" || 
            scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            scholarship.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
            scholarship.country.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCountry = filters.country === "" || scholarship.country === filters.country;
        const matchesType = filters.type === "" || scholarship.type === filters.type;

        return matchesSearch && matchesCountry && matchesType;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 
                    className="text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'var(--font-dancing)' }}
                >
                    Explorar Bolsas
                </h1>
                <p 
                    className="text-gray-600"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                >
                    Descubra oportunidades de estudo em universidades de todo o mundo
                </p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Search Bar */}
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#016EF8] focus:border-transparent"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                            placeholder="Buscar por curso, universidade ou país..."
                        />
                    </div>

                    {/* Filter Button */}
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors lg:min-w-max"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        <SlidersHorizontal className="w-5 h-5 mr-2" />
                        Filtros
                    </button>
                </div>

                {/* Filters Panel */}
                {showFilters && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            {/* País */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                    País
                                </label>
                                <select
                                    value={filters.country}
                                    onChange={(e) => handleFilterChange('country', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#016EF8]"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    <option value="">Todos os países</option>
                                    <option value="Estados Unidos">Estados Unidos</option>
                                    <option value="Canadá">Canadá</option>
                                    <option value="Reino Unido">Reino Unido</option>
                                    <option value="Alemanha">Alemanha</option>
                                    <option value="Austrália">Austrália</option>
                                    <option value="Coreia do Sul">Coreia do Sul</option>
                                </select>
                            </div>

                            {/* Nível */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                    Nível
                                </label>
                                <select
                                    value={filters.level}
                                    onChange={(e) => handleFilterChange('level', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#016EF8]"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    <option value="">Todos os níveis</option>
                                    <option value="Graduação">Graduação</option>
                                    <option value="Mestrado">Mestrado</option>
                                    <option value="Doutorado">Doutorado</option>
                                    <option value="Pós-Doutorado">Pós-Doutorado</option>
                                </select>
                            </div>

                            {/* Área */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                    Área
                                </label>
                                <select
                                    value={filters.area}
                                    onChange={(e) => handleFilterChange('area', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#016EF8]"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    <option value="">Todas as áreas</option>
                                    <option value="Tecnologia">Tecnologia</option>
                                    <option value="Engenharia">Engenharia</option>
                                    <option value="Medicina">Medicina</option>
                                    <option value="Ciências">Ciências</option>
                                    <option value="Negócios">Negócios</option>
                                </select>
                            </div>

                            {/* Tipo */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                    Tipo de Bolsa
                                </label>
                                <select
                                    value={filters.type}
                                    onChange={(e) => handleFilterChange('type', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#016EF8]"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    <option value="">Todos os tipos</option>
                                    <option value="Integral">Integral</option>
                                    <option value="Parcial">Parcial</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={clearFilters}
                                className="text-[#016EF8] hover:text-blue-700 font-medium text-sm transition-colors"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Limpar filtros
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Results */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <p 
                        className="text-gray-600"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        {filteredScholarships.length} bolsas encontradas
                    </p>
                </div>

                {filteredScholarships.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredScholarships.map((scholarship) => (
                            <ScholarshipCard
                                key={scholarship.id}
                                {...scholarship}
                                isFavorite={favorites.includes(scholarship.id)}
                                onToggleFavorite={handleToggleFavorite}
                                showCompatibility={true}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                            <Search className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 
                            className="text-lg font-bold text-gray-900 mb-2"
                            style={{ fontFamily: 'var(--font-dancing)' }}
                        >
                            Nenhuma bolsa encontrada
                        </h3>
                        <p 
                            className="text-gray-600"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Tente ajustar seus filtros ou termos de busca
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}