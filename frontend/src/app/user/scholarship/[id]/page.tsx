"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
    ArrowLeft, 
    Heart, 
    ExternalLink, 
    Calendar, 
    MapPin, 
    DollarSign, 
    Clock, 
    Users, 
    CheckCircle,
    AlertCircle,
    FileText,
    Star
} from "lucide-react";

export default function ScholarshipDetail() {
    const params = useParams();
    const scholarshipId = params.id;
    const [isFavorite, setIsFavorite] = useState(false);

    // Mock data - em produção viria de uma API baseada no ID
    const scholarship = {
        id: scholarshipId,
        title: "Bolsa de Mestrado em Engenharia de Software",
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
        description: "Programa de mestrado em Engenharia de Software focado em desenvolvimento de sistemas distribuídos e inteligência artificial.",
        benefits: [
            "Mensalidade integral coberta",
            "Ajuda de custo mensal de CAD $1,500",
            "Seguro saúde incluído",
            "Acesso à biblioteca e laboratórios",
            "Mentoria com professores renomados"
        ],
        requirements: [
            "Diploma de graduação em área relacionada",
            "GPA mínimo de 3.5/4.0",
            "IELTS 7.0 ou TOEFL 100+",
            "Carta de motivação",
            "2 cartas de recomendação",
            "Portfólio de projetos"
        ],
        documents: [
            "Diploma de graduação (traduzido)",
            "Histórico acadêmico oficial",
            "Certificado de proficiência em inglês",
            "Carta de motivação (máx. 1000 palavras)",
            "2 cartas de recomendação acadêmica",
            "CV atualizado",
            "Portfólio de projetos de software"
        ],
        process: [
            { step: 1, title: "Inscrição online", description: "Preencher formulário no site da universidade", deadline: "15 Mar 2024" },
            { step: 2, title: "Envio de documentos", description: "Upload de todos os documentos necessários", deadline: "20 Mar 2024" },
            { step: 3, title: "Entrevista", description: "Entrevista online com comitê de seleção", deadline: "10 Abr 2024" },
            { step: 4, title: "Resultado", description: "Comunicação do resultado final", deadline: "30 Abr 2024" }
        ],
        tips: [
            "Prepare-se para a entrevista estudando sobre a universidade e o programa",
            "Destaque experiências práticas na carta de motivação",
            "Solicite cartas de recomendação com antecedência",
            "Certifique-se de que todos os documentos estão traduzidos"
        ],
        website: "https://www.utoronto.ca/graduate-programs"
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Link
                    href="/user/explore"
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar para explorar
                </Link>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-colors ${
                            isFavorite 
                                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        <Heart className={`w-4 h-4 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                        {isFavorite ? 'Favoritado' : 'Salvar'}
                    </button>
                </div>
            </div>

            {/* Main Info Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                                    scholarship.type === 'Integral' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`} style={{ fontFamily: 'var(--font-poppins)' }}>
                                    {scholarship.type}
                                </span>
                                <div className="flex items-center">
                                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                                    <span className="text-sm font-medium text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        {scholarship.compatibility}% compatível
                                    </span>
                                </div>
                            </div>
                            <h1 
                                className="text-3xl font-bold text-gray-900 mb-4"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                {scholarship.title}
                            </h1>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-gray-600">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span style={{ fontFamily: 'var(--font-poppins)' }}>{scholarship.university}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <span style={{ fontFamily: 'var(--font-poppins)' }}>
                                        {scholarship.city}, {scholarship.country}
                                    </span>
                                </div>
                            </div>
                            <p 
                                className="text-gray-700 leading-relaxed"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                {scholarship.description}
                            </p>
                        </div>
                    </div>

                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                            <DollarSign className="w-6 h-6 mx-auto text-green-600 mb-2" />
                            <div className="text-lg font-bold text-gray-900" style={{ fontFamily: 'var(--font-dancing)' }}>
                                {scholarship.value}
                            </div>
                            <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                                Valor anual
                            </div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                            <Clock className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                            <div className="text-lg font-bold text-gray-900" style={{ fontFamily: 'var(--font-dancing)' }}>
                                {scholarship.duration}
                            </div>
                            <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                                Duração
                            </div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                            <Calendar className="w-6 h-6 mx-auto text-orange-600 mb-2" />
                            <div className="text-lg font-bold text-gray-900" style={{ fontFamily: 'var(--font-dancing)' }}>
                                {scholarship.deadline}
                            </div>
                            <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                                Prazo final
                            </div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                            <Users className="w-6 h-6 mx-auto text-purple-600 mb-2" />
                            <div className="text-lg font-bold text-gray-900" style={{ fontFamily: 'var(--font-dancing)' }}>
                                {scholarship.startDate}
                            </div>
                            <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                                Início
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={scholarship.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center bg-[#016EF8] text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Acessar Site Oficial
                        </a>
                        <Link
                            href={`/user/compare?scholarship=${scholarship.id}`}
                            className="flex items-center justify-center border border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Comparar Bolsa
                        </Link>
                    </div>
                </div>
            </div>

            {/* Detailed Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* O que a bolsa cobre */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h2 
                        className="text-xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        O que a bolsa cobre
                    </h2>
                    <ul className="space-y-3">
                        {scholarship.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                    {benefit}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Requisitos */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h2 
                        className="text-xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        Requisitos
                    </h2>
                    <ul className="space-y-3">
                        {scholarship.requirements.map((requirement, index) => (
                            <li key={index} className="flex items-start">
                                <AlertCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                    {requirement}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Documentos necessários */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h2 
                        className="text-xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        Documentos necessários
                    </h2>
                    <ul className="space-y-3">
                        {scholarship.documents.map((document, index) => (
                            <li key={index} className="flex items-start">
                                <FileText className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                    {document}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Dicas práticas */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h2 
                        className="text-xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        Dicas práticas
                    </h2>
                    <ul className="space-y-3">
                        {scholarship.tips.map((tip, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-[#016EF8] mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                    {tip}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Process Timeline */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 
                    className="text-xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: 'var(--font-dancing)' }}
                >
                    Passo a passo do processo
                </h2>
                <div className="space-y-6">
                    {scholarship.process.map((step, index) => (
                        <div key={step.step} className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div className="w-8 h-8 bg-[#016EF8] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    {step.step}
                                </div>
                                {index < scholarship.process.length - 1 && (
                                    <div className="w-px h-8 bg-gray-300 mt-2"></div>
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 
                                    className="font-bold text-gray-900 mb-1"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                    {step.description}
                                </p>
                                <p className="text-sm text-[#016EF8] font-medium" style={{ fontFamily: 'var(--font-poppins)' }}>
                                    Até {step.deadline}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}