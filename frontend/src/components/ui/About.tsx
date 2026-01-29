import { Target, Users, Award, BookOpen } from "lucide-react";

export default function About() {
    const features = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Foco no Seu Futuro",
            description: "Conectamos você diretamente com as melhores oportunidades de bolsas do mundo, alinhadas aos seus objetivos acadêmicos."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Comunidade Global",
            description: "Faça parte de uma rede internacional de estudantes que transformaram suas vidas através da educação."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Bolsas de Qualidade",
            description: "Parceiras com instituições renomadas, oferecemos bolsas em universidades de prestígio internacional."
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Suporte Completo",
            description: "Acompanhamento personalizado desde a candidatura até a conquista da sua bolsa de estudos dos sonhos."
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 sm:mb-20">
                    <h2 
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        Sobre Nós
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <p 
                            className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Somos uma plataforma dedicada a <span className="text-[#016EF8] font-semibold">democratizar o acesso à educação superior</span> de qualidade em todo o mundo.
                        </p>
                        <p 
                            className="text-base sm:text-lg text-gray-600 leading-relaxed"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Nossa missão é conectar estudantes talentosos com oportunidades de bolsas de estudo em universidades prestigiosas, removendo barreiras financeiras e geográficas que impedem o crescimento acadêmico e profissional.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300 group"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-[#016EF8]/10 rounded-full text-[#016EF8] group-hover:bg-[#016EF8] group-hover:text-white transition-colors duration-300">
                                    {feature.icon}
                                </div>
                            </div>
                            
                            <h3 
                                className="text-xl sm:text-2xl font-bold text-gray-800 mb-3"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                {feature.title}
                            </h3>
                            
                            <p 
                                className="text-sm sm:text-base text-gray-600 leading-relaxed"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="bg-linear-to-r from-[#016EF8] to-blue-600 rounded-2xl p-8 sm:p-12 text-white text-center">
                    <h3 
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        Nossos Resultados
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div>
                            <div 
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                5000+
                            </div>
                            <p 
                                className="text-sm sm:text-base lg:text-lg opacity-90"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Estudantes Beneficiados
                            </p>
                        </div>
                        
                        <div>
                            <div 
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                $50M+
                            </div>
                            <p 
                                className="text-sm sm:text-base lg:text-lg opacity-90"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Em Bolsas Concedidas
                            </p>
                        </div>
                        
                        <div>
                            <div 
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                95%
                            </div>
                            <p 
                                className="text-sm sm:text-base lg:text-lg opacity-90"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Taxa de Sucesso
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}