"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
    Plus, 
    X, 
    Search, 
    Check, 
    Calendar, 
    DollarSign, 
    Clock,
    MapPin,
    ExternalLink,
    Download
} from "lucide-react";

interface Scholarship {
    id: string;
    title: string;
    university: string;
    country: string;
    city: string;
    type: string;
    deadline: string;
    startDate: string;
    duration: string;
    value: string;
    totalValue: string;
    compatibility: number;
    description: string;
    benefits: string[];
    requirements: string[];
    website: string;
}

export default function Compare() {
    const searchParams = useSearchParams();
    const [selectedScholarships, setSelectedScholarships] = useState<Scholarship[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showAddDialog, setShowAddDialog] = useState(false);

    // Mock data
    const allScholarships: Scholarship[] = [
        {
            id: "1",
            title: "Mestrado em Engenharia de Software",
            university: "University of Toronto",
            country: "Canadá",
            city: "Toronto",
            type: "Integral",
            deadline: "15 de Março de 2024",
            startDate: "Setembro de 2024",
            duration: "2 anos",
            value: "CAD $25,000/ano",
            totalValue: "CAD $50,000",
            compatibility: 95,
            description: "Programa focado em desenvolvimento de sistemas distribuídos e IA.",
            benefits: [
                "Mensalidade integral coberta",
                "Ajuda de custo mensal",
                "Seguro saúde incluído",
                "Acesso à biblioteca"
            ],
            requirements: [
                "Diploma de graduação",
                "GPA mínimo de 3.5",
                "IELTS 7.0+",
                "Carta de motivação"
            ],
            website: "https://www.utoronto.ca"
        },
        {
            id: "2",
            title: "PhD em Ciência da Computação",
            university: "MIT",
            country: "Estados Unidos",
            city: "Cambridge",
            type: "Integral",
            deadline: "1 de Dezembro de 2023",
            startDate: "Setembro de 2024",
            duration: "4-5 anos",
            value: "USD $35,000/ano",
            totalValue: "USD $140,000",
            compatibility: 92,
            description: "Pesquisa em machine learning e algoritmos avançados.",
            benefits: [
                "Mensalidade integral coberta",
                "Stipend para pesquisa",
                "Seguro saúde premium",
                "Laboratórios avançados"
            ],
            requirements: [
                "Mestrado em área relacionada",
                "GPA mínimo de 3.7",
                "TOEFL 100+",
                "Proposta de pesquisa"
            ],
            website: "https://www.mit.edu"
        },
        {
            id: "3",
            title: "Mestrado em Data Science",
            university: "University of Melbourne",
            country: "Austrália",
            city: "Melbourne",
            type: "Parcial",
            deadline: "30 de Janeiro de 2024",
            startDate: "Julho de 2024",
            duration: "1.5 anos",
            value: "AUD $15,000/ano",
            totalValue: "AUD $22,500",
            compatibility: 88,
            description: "Programa interdisciplinar com foco em big data e analytics.",
            benefits: [
                "50% da mensalidade coberta",
                "Acesso à biblioteca",
                "Suporte acadêmico",
                "Networking events"
            ],
            requirements: [
                "Diploma de graduação",
                "GPA mínimo de 3.0",
                "IELTS 6.5+",
                "Portfolio de projetos"
            ],
            website: "https://www.unimelb.edu.au"
        }
    ];

    useEffect(() => {
        const scholarshipParam = searchParams.get('scholarship');
        if (scholarshipParam) {
            const scholarship = allScholarships.find(s => s.id === scholarshipParam);
            if (scholarship) {
                setSelectedScholarships([scholarship]);
            }
        }
    }, [searchParams]);

    const handleAddScholarship = (scholarship: Scholarship) => {
        if (selectedScholarships.length < 3 && !selectedScholarships.find(s => s.id === scholarship.id)) {
            setSelectedScholarships(prev => [...prev, scholarship]);
        }
        setShowAddDialog(false);
    };

    const handleRemoveScholarship = (scholarshipId: string) => {
        setSelectedScholarships(prev => prev.filter(s => s.id !== scholarshipId));
    };

    const availableScholarships = allScholarships.filter(s => 
        !selectedScholarships.find(selected => selected.id === s.id) &&
        (s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         s.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
         s.country.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const exportComparison = () => {
        // Em produção, geraria um PDF ou exportaria os dados
        console.log("Exportando comparação...");
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center">
                <h1 
                    className="text-4xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: 'var(--font-dancing)' }}
                >
                    Comparar Bolsas
                </h1>
                <p 
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                >
                    Compare até 3 bolsas lado a lado para tomar a melhor decisão
                </p>
            </div>

            {/* Add Scholarships Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 
                        className="text-xl font-bold text-gray-900"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        Bolsas Selecionadas ({selectedScholarships.length}/3)
                    </h2>
                    <div className="flex gap-3">
                        {selectedScholarships.length > 0 && (
                            <button
                                onClick={exportComparison}
                                className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Exportar
                            </button>
                        )}
                        {selectedScholarships.length < 3 && (
                            <button
                                onClick={() => setShowAddDialog(true)}
                                className="flex items-center px-4 py-2 bg-[#016EF8] text-white rounded-lg hover:bg-blue-700 transition-colors"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Adicionar Bolsa
                            </button>
                        )}
                    </div>
                </div>

                {selectedScholarships.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Plus className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-600 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                            Nenhuma bolsa selecionada para comparação
                        </p>
                        <button
                            onClick={() => setShowAddDialog(true)}
                            className="inline-flex items-center px-6 py-3 bg-[#016EF8] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            Adicionar Primeira Bolsa
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {selectedScholarships.map((scholarship, index) => (
                            <div key={scholarship.id} className="bg-gray-50 rounded-xl p-4 relative">
                                <button
                                    onClick={() => handleRemoveScholarship(scholarship.id)}
                                    className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                                
                                <div className="pr-8">
                                    <h3 
                                        className="font-bold text-gray-900 mb-2 line-clamp-2"
                                        style={{ fontFamily: 'var(--font-dancing)' }}
                                    >
                                        {scholarship.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        {scholarship.university}
                                    </p>
                                    <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        {scholarship.city}, {scholarship.country}
                                    </p>
                                    <div className="text-lg font-bold text-[#016EF8]" style={{ fontFamily: 'var(--font-dancing)' }}>
                                        {scholarship.value}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Slots vazios */}
                        {Array.from({ length: 3 - selectedScholarships.length }).map((_, index) => (
                            <div
                                key={`empty-${index}`}
                                className="border-2 border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors"
                                onClick={() => setShowAddDialog(true)}
                            >
                                <div className="text-center">
                                    <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-500 text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Adicionar Bolsa
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Comparison Table */}
            {selectedScholarships.length > 1 && (
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="text-left p-4 font-semibold text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Características
                                    </th>
                                    {selectedScholarships.map(scholarship => (
                                        <th key={scholarship.id} className="text-center p-4 font-semibold text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            {scholarship.title.length > 30 ? `${scholarship.title.slice(0, 30)}...` : scholarship.title}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-200">
                                    <td className="p-4 font-medium text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        <MapPin className="w-4 h-4 inline mr-2" />
                                        Universidade
                                    </td>
                                    {selectedScholarships.map(scholarship => (
                                        <td key={scholarship.id} className="p-4 text-center text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            {scholarship.university}
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-t border-gray-200 bg-gray-50">
                                    <td className="p-4 font-medium text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        <MapPin className="w-4 h-4 inline mr-2" />
                                        Localização
                                    </td>
                                    {selectedScholarships.map(scholarship => (
                                        <td key={scholarship.id} className="p-4 text-center text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            {scholarship.city}, {scholarship.country}
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-t border-gray-200">
                                    <td className="p-4 font-medium text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        <DollarSign className="w-4 h-4 inline mr-2" />
                                        Valor Anual
                                    </td>
                                    {selectedScholarships.map(scholarship => (
                                        <td key={scholarship.id} className="p-4 text-center font-semibold text-green-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            {scholarship.value}
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-t border-gray-200 bg-gray-50">
                                    <td className="p-4 font-medium text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        <DollarSign className="w-4 h-4 inline mr-2" />
                                        Valor Total
                                    </td>
                                    {selectedScholarships.map(scholarship => (
                                        <td key={scholarship.id} className="p-4 text-center font-semibold text-green-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            {scholarship.totalValue}
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-t border-gray-200">
                                    <td className="p-4 font-medium text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        <Clock className="w-4 h-4 inline mr-2" />
                                        Duração
                                    </td>
                                    {selectedScholarships.map(scholarship => (
                                        <td key={scholarship.id} className="p-4 text-center text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            {scholarship.duration}
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-t border-gray-200 bg-gray-50">
                                    <td className="p-4 font-medium text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        <Calendar className="w-4 h-4 inline mr-2" />
                                        Prazo Final
                                    </td>
                                    {selectedScholarships.map(scholarship => (
                                        <td key={scholarship.id} className="p-4 text-center text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            {scholarship.deadline}
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-t border-gray-200">
                                    <td className="p-4 font-medium text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Tipo de Bolsa
                                    </td>
                                    {selectedScholarships.map(scholarship => (
                                        <td key={scholarship.id} className="p-4 text-center" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                                                scholarship.type === 'Integral' 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {scholarship.type}
                                            </span>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-t border-gray-200 bg-gray-50">
                                    <td className="p-4 font-medium text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Compatibilidade
                                    </td>
                                    {selectedScholarships.map(scholarship => (
                                        <td key={scholarship.id} className="p-4 text-center">
                                            <div className="flex items-center justify-center">
                                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br from-blue-500 to-purple-600">
                                                    {scholarship.compatibility}%
                                                </div>
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-t border-gray-200">
                                    <td className="p-4 font-medium text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Site Oficial
                                    </td>
                                    {selectedScholarships.map(scholarship => (
                                        <td key={scholarship.id} className="p-4 text-center">
                                            <a
                                                href={scholarship.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-[#016EF8] hover:text-blue-700 font-medium"
                                                style={{ fontFamily: 'var(--font-poppins)' }}
                                            >
                                                <ExternalLink className="w-4 h-4 mr-1" />
                                                Acessar
                                            </a>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Add Scholarship Dialog */}
            {showAddDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h3 
                                    className="text-xl font-bold text-gray-900"
                                    style={{ fontFamily: 'var(--font-dancing)' }}
                                >
                                    Adicionar Bolsa para Comparação
                                </h3>
                                <button
                                    onClick={() => setShowAddDialog(false)}
                                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="mb-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Buscar bolsas..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    />
                                </div>
                            </div>

                            <div className="max-h-96 overflow-y-auto space-y-3">
                                {availableScholarships.length > 0 ? (
                                    availableScholarships.map(scholarship => (
                                        <div
                                            key={scholarship.id}
                                            onClick={() => handleAddScholarship(scholarship)}
                                            className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
                                        >
                                            <h4 
                                                className="font-semibold text-gray-900 mb-1"
                                                style={{ fontFamily: 'var(--font-poppins)' }}
                                            >
                                                {scholarship.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                                {scholarship.university} • {scholarship.country}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-[#016EF8]" style={{ fontFamily: 'var(--font-poppins)' }}>
                                                    {scholarship.value}
                                                </span>
                                                <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-poppins)' }}>
                                                    {scholarship.compatibility}% compatível
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8">
                                        <Search className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                        <p className="text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            Nenhuma bolsa encontrada
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}