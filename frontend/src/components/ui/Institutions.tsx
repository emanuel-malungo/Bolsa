import { GraduationCap, Building, Globe } from "lucide-react";

export default function Institutions() {
    const institutions = [
        {
            name: "Harvard University",
            icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10" />,
            country: "Estados Unidos"
        },
        {
            name: "Oxford University",
            icon: <Building className="w-8 h-8 sm:w-10 sm:h-10" />,
            country: "Reino Unido"
        },
        {
            name: "MIT",
            icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10" />,
            country: "Estados Unidos"
        },
        {
            name: "Stanford University",
            icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10" />,
            country: "Estados Unidos"
        },
        {
            name: "Cambridge University",
            icon: <Building className="w-8 h-8 sm:w-10 sm:h-10" />,
            country: "Reino Unido"
        },
        {
            name: "University of Toronto",
            icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10" />,
            country: "Canadá"
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        Principais Instituições
                    </h2>
                    <p 
                        className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        Conecte-se com as melhores universidades do mundo e transforme seu futuro acadêmico
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {institutions.map((institution, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover:scale-105 transform transition-transform duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-[#016EF8]/10 rounded-full text-[#016EF8] group-hover:bg-[#016EF8] group-hover:text-white transition-colors duration-300">
                                    {institution.icon}
                                </div>
                            </div>
                            
                            <h3 
                                className="text-xl sm:text-2xl font-bold text-gray-800 mb-2"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                {institution.name}
                            </h3>
                            
                            <p 
                                className="text-sm sm:text-base text-gray-600"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                {institution.country}
                            </p>
                            
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <button 
                                    className="text-[#016EF8] hover:text-blue-700 font-medium text-sm sm:text-base transition-colors duration-200"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    Ver Bolsas Disponíveis →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 sm:mt-16">
                    <button 
                        className="px-8 py-4 bg-[#016EF8] text-white rounded-full font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        Ver Todas as Instituições
                    </button>
                </div>
            </div>
        </section>
    );
}