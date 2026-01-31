import { GraduationCap, Building, Globe, BookOpen, Users, Award } from "lucide-react";

export default function Institutions() {
    const institutions = [
        {
            name: "Harvard University",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            name: "Oxford University",
            icon: <Building className="w-6 h-6" />
        },
        {
            name: "MIT",
            icon: <Globe className="w-6 h-6" />
        },
        {
            name: "Stanford University",
            icon: <BookOpen className="w-6 h-6" />
        },
        {
            name: "Cambridge University",
            icon: <Users className="w-6 h-6" />
        },
        {
            name: "University of Toronto",
            icon: <Award className="w-6 h-6" />
        },
        {
            name: "Yale University",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            name: "Princeton University",
            icon: <Building className="w-6 h-6" />
        }
    ];

    return (
        <section id="institutions" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        Principais Instituições
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-6xl mx-auto">
                    {institutions.map((institution, index) => (
                        <div 
                            key={index}
                            className="flex items-center gap-3 bg-gray-50 hover:bg-[#016EF8] hover:text-white px-4 py-3 rounded-full transition-all duration-300 group cursor-pointer"
                        >
                            <div className="text-[#016EF8] group-hover:text-white transition-colors duration-300">
                                {institution.icon}
                            </div>
                            
                            <span 
                                className="text-gray-700 group-hover:text-white font-medium text-sm sm:text-base transition-colors duration-300"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                {institution.name}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button 
                        className="px-8 py-3 bg-[#016EF8] text-white rounded-full font-semibold text-base hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        Ver Todas as Instituições
                    </button>
                </div>
            </div>
        </section>
    );
}