import Link from "next/link";
import heroImage from "@/assets/images/hero-image-bg.jpg"

export default function Hero() {
    return (
        <section 
            className="relative w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ 
                backgroundImage: `url(${heroImage.src})`,
                height: '100vh',
                minHeight: '600px'
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 text-center text-white">
                <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
                    <h1 
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            Transforme Seu Futuro
                        </span>
                        <br />
                        <span className="text-white">
                            com Bolsas de Estudo
                        </span>
                    </h1>
                    
                    <p 
                        className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl lg:max-w-2xl mx-auto text-gray-100 px-4"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        Descubra milhares de oportunidades de bolsas de estudo em universidades 
                        de todo o mundo. Realize seus sonhos acadêmicos sem se preocupar com custos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8 px-4">
                        <Link 
                            href="/explorar" 
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#016EF8] text-white rounded-full font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl text-center"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Explorar Bolsas
                        </Link>
                        <Link 
                            href="/como-funciona" 
                            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-gray-800 transition-colors duration-200 text-center"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Como Funciona
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 max-w-xs sm:max-w-2xl mx-auto px-4">
                        <div className="text-center">
                            <div 
                                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                500+
                            </div>
                            <div 
                                className="text-xs sm:text-sm text-gray-200 mt-1"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Universidades
                            </div>
                        </div>
                        <div className="text-center">
                            <div 
                                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                1000+
                            </div>
                            <div 
                                className="text-xs sm:text-sm text-gray-200 mt-1"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Bolsas Disponíveis
                            </div>
                        </div>
                        <div className="text-center">
                            <div 
                                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                50+
                            </div>
                            <div 
                                className="text-xs sm:text-sm text-gray-200 mt-1"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Países
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
  