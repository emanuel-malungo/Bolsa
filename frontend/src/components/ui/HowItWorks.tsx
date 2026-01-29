import { UserCheck, Search, FileText, GraduationCap } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            icon: <UserCheck className="w-8 h-8" />,
            step: "01",
            title: "Crie Sua Conta",
            description: "Cadastre-se gratuitamente e complete seu perfil acadêmico com suas informações e objetivos educacionais."
        },
        {
            icon: <Search className="w-8 h-8" />,
            step: "02", 
            title: "Encontre Bolsas",
            description: "Use nosso sistema de busca inteligente para descobrir bolsas que combinam com seu perfil e interesses."
        },
        {
            icon: <FileText className="w-8 h-8" />,
            step: "03",
            title: "Candidate-se",
            description: "Envie sua candidatura diretamente pela plataforma com orientação especializada em cada etapa."
        },
        {
            icon: <GraduationCap className="w-8 h-8" />,
            step: "04",
            title: "Realize Seus Sonhos",
            description: "Receba sua aprovação e comece sua jornada acadêmica na universidade dos seus sonhos!"
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 sm:mb-20">
                    <h2 
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        Como Funciona
                    </h2>
                    <p 
                        className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        Transformamos o complexo processo de busca por bolsas em uma jornada simples e eficiente. 
                        Siga estes passos e esteja mais perto da sua educação internacional.
                    </p>
                </div>

                {/* Steps */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {steps.map((step, index) => (
                            <div 
                                key={index}
                                className="relative group"
                            >
                                {/* Connection Line (hidden on mobile) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-300 z-0 transform translate-x-3">
                                        <div className="h-full bg-[#016EF8] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                                    </div>
                                )}

                                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center relative z-10 group-hover:scale-105 transform">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 left-4 bg-[#016EF8] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                        {step.step}
                                    </div>

                                    {/* Icon */}
                                    <div className="flex justify-center mb-4">
                                        <div className="p-4 bg-[#016EF8]/10 rounded-full text-[#016EF8] group-hover:bg-[#016EF8] group-hover:text-white transition-colors duration-300">
                                            {step.icon}
                                        </div>
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 
                                        className="text-xl sm:text-2xl font-bold text-gray-800 mb-4"
                                        style={{ fontFamily: 'var(--font-dancing)' }}
                                    >
                                        {step.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p 
                                        className="text-sm sm:text-base text-gray-600 leading-relaxed"
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 sm:mt-20">
                    <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg max-w-4xl mx-auto">
                        <h3 
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
                            style={{ fontFamily: 'var(--font-dancing)' }}
                        >
                            Pronto para Começar?
                        </h3>
                        <p 
                            className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Junte-se a milhares de estudantes que já encontraram suas bolsas de estudo através da nossa plataforma.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                className="px-8 py-4 bg-[#016EF8] text-white rounded-full font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Começar Agora
                            </button>
                            <button 
                                className="px-8 py-4 border-2 border-[#016EF8] text-[#016EF8] rounded-full font-semibold text-base sm:text-lg hover:bg-[#016EF8] hover:text-white transition-colors duration-200"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Saiba Mais
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}