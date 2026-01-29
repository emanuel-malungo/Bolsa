"use client";

import { MapPin, Calendar, DollarSign, Users, Star } from "lucide-react";
import { useState } from "react";

export default function ExploreScholarships() {
    const [selectedCategory, setSelectedCategory] = useState("Todas");

    const categories = [
        "Todas", "Graduação", "Pós-Graduação", "MBA", "Doutorado"
    ];

    const scholarships = [
        {
            title: "Bolsa de Excelência Harvard",
            university: "Harvard University",
            location: "Estados Unidos",
            value: "100% das taxas",
            deadline: "15 Mar 2026",
            students: "50 vagas",
            category: "Graduação",
            description: "Bolsa integral para estudantes de alto desempenho acadêmico em todas as áreas.",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1605297014398-e63c19c8d6c8?w=400&h=300&fit=crop"
        },
        {
            title: "Oxford Merit Scholarship",
            university: "Oxford University", 
            location: "Reino Unido",
            value: "£25,000/ano",
            deadline: "01 Abr 2026",
            students: "30 vagas",
            category: "Pós-Graduação",
            description: "Bolsa de mérito para estudantes de pós-graduação em ciências e humanidades.",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop"
        },
        {
            title: "MIT Innovation Grant",
            university: "MIT",
            location: "Estados Unidos", 
            value: "$40,000/ano",
            deadline: "20 Mar 2026",
            students: "25 vagas",
            category: "Doutorado",
            description: "Bolsa para estudantes de doutorado em tecnologia e inovação.",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop"
        },
        {
            title: "Stanford Leadership Program",
            university: "Stanford University",
            location: "Estados Unidos",
            value: "85% das taxas", 
            deadline: "10 Abr 2026",
            students: "40 vagas",
            category: "MBA",
            description: "Programa de liderança para futuros executivos e empreendedores.",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=300&fit=crop"
        },
        {
            title: "Cambridge Research Fellowship",
            university: "Cambridge University",
            location: "Reino Unido",
            value: "£30,000/ano",
            deadline: "25 Mar 2026", 
            students: "20 vagas",
            category: "Doutorado",
            description: "Bolsa para pesquisadores em início de carreira acadêmica.",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop"
        },
        {
            title: "Toronto Global Scholar",
            university: "University of Toronto",
            location: "Canadá",
            value: "CAD 20,000/ano",
            deadline: "05 Abr 2026",
            students: "60 vagas", 
            category: "Graduação",
            description: "Bolsa para estudantes internacionais de graduação em diversas áreas.",
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=400&h=300&fit=crop"
        },
        {
            title: "Yale Excellence Award",
            university: "Yale University",
            location: "Estados Unidos",
            value: "75% das taxas",
            deadline: "18 Mar 2026",
            students: "35 vagas",
            category: "Graduação", 
            description: "Programa de excelência acadêmica para estudantes de graduação.",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
        },
        {
            title: "Princeton Research Grant",
            university: "Princeton University",
            location: "Estados Unidos",
            value: "$35,000/ano",
            deadline: "28 Mar 2026",
            students: "28 vagas",
            category: "Doutorado",
            description: "Bolsa para pesquisa avançada em ciências exatas e humanas.",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
        }
    ];

    const filteredScholarships = selectedCategory === "Todas" 
        ? scholarships 
        : scholarships.filter(scholarship => scholarship.category === selectedCategory);

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        Explorar Bolsas
                    </h2>
                    <p 
                        className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        Descubra oportunidades incríveis de bolsas de estudo em universidades renomadas ao redor do mundo.
                    </p>
                </div>

                {/* Filter Categories */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-colors duration-200 ${
                                selectedCategory === category
                                    ? 'bg-[#016EF8] text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Scholarships Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8xl mx-auto">
                    {filteredScholarships.map((scholarship, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] transform"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={scholarship.image}
                                    alt={scholarship.university}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-[#016EF8] px-3 py-1 rounded-full text-xs font-semibold">
                                        {scholarship.category}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                            </div>

                            <div className="p-6">
                                {/* Header */}
                                <div className="mb-4">
                                    <h3 
                                        className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#016EF8] transition-colors duration-200 line-clamp-2"
                                        style={{ fontFamily: 'var(--font-dancing)' }}
                                    >
                                        {scholarship.title}
                                    </h3>
                                    <p 
                                        className="text-sm text-gray-600 font-medium mb-2"
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    >
                                        {scholarship.university}
                                    </p>
                                    
                                    {/* Rating */}
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i < Math.floor(scholarship.rating) 
                                                        ? 'text-yellow-400 fill-current' 
                                                        : 'text-gray-300'
                                                }`}
                                            />
                                        ))}
                                        <span 
                                            className="text-xs text-gray-600 ml-1"
                                            style={{ fontFamily: 'var(--font-poppins)' }}
                                        >
                                            {scholarship.rating}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p 
                                    className="text-xs text-gray-600 mb-4 leading-relaxed line-clamp-3"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    {scholarship.description}
                                </p>

                                {/* Info Grid */}
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-1 text-gray-600">
                                            <MapPin className="w-3 h-3 text-[#016EF8]" />
                                            <span style={{ fontFamily: 'var(--font-poppins)' }}>
                                                {scholarship.location}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-600">
                                            <DollarSign className="w-3 h-3 text-[#016EF8]" />
                                            <span style={{ fontFamily: 'var(--font-poppins)' }}>
                                                {scholarship.value}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-1 text-gray-600">
                                            <Calendar className="w-3 h-3 text-[#016EF8]" />
                                            <span style={{ fontFamily: 'var(--font-poppins)' }}>
                                                {scholarship.deadline}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-600">
                                            <Users className="w-3 h-3 text-[#016EF8]" />
                                            <span style={{ fontFamily: 'var(--font-poppins)' }}>
                                                {scholarship.students}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button 
                                    className="w-full bg-[#016EF8] text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg text-sm"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    Candidatar-se
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-12 sm:mt-16">
                    <button 
                        className="px-8 py-4 border-2 border-[#016EF8] text-[#016EF8] rounded-full font-semibold text-base sm:text-lg hover:bg-[#016EF8] hover:text-white transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        Ver Mais Bolsas
                    </button>
                </div>
            </div>
        </section>
    );
}