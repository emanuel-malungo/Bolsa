"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Como posso me candidatar a uma bolsa de estudos?",
            answer: "Primeiro, crie sua conta gratuita na nossa plataforma. Complete seu perfil acadêmico com suas informações, objetivos e histórico educacional. Nossa ferramenta de busca inteligente irá sugerir bolsas que combinam com seu perfil. Você pode então se candidatar diretamente através da plataforma."
        },
        {
            question: "Quais são os requisitos para conseguir uma bolsa?",
            answer: "Os requisitos variam de acordo com cada bolsa e instituição. Geralmente incluem histórico acadêmico, proficiência em inglês (TOEFL/IELTS), cartas de recomendação, ensaio pessoal e documentação financeira. Nossa equipe fornece orientação específica para cada oportunidade."
        },
        {
            question: "A plataforma é realmente gratuita?",
            answer: "Sim! Nossa plataforma é 100% gratuita para estudantes. Não cobramos nenhuma taxa de inscrição, candidatura ou comissão sobre bolsas conquistadas. Nossa missão é democratizar o acesso à educação superior internacional."
        },
        {
            question: "Quanto tempo leva para receber uma resposta da candidatura?",
            answer: "O tempo de resposta varia de acordo com a instituição e o tipo de bolsa. Geralmente, o processo pode levar de 4 a 12 semanas. Nossa equipe mantém você atualizado sobre o status da sua candidatura e fornece estimativas realistas para cada oportunidade."
        },
        {
            question: "Posso me candidatar a várias bolsas ao mesmo tempo?",
            answer: "Absolutamente! Recomendamos que você se candidate a múltiplas bolsas para aumentar suas chances de sucesso. Nossa plataforma facilita o gerenciamento de várias candidaturas e prazos simultaneamente."
        },
        {
            question: "Vocês oferecem suporte para preparação de documentos?",
            answer: "Sim! Oferecemos orientação completa para preparação de documentos, incluindo revisão de ensaios pessoais, dicas para cartas de recomendação e preparação para entrevistas. Nossa equipe especializada está aqui para maximizar suas chances de sucesso."
        },
        {
            question: "Quais países e universidades estão disponíveis?",
            answer: "Trabalhamos com universidades em mais de 25 países, incluindo Estados Unidos, Reino Unido, Canadá, Austrália, Alemanha, França, e muitos outros. Nossa rede inclui instituições de prestígio como Harvard, Oxford, MIT, Stanford, Cambridge e centenas de outras universidades reconhecidas mundialmente."
        },
        {
            question: "Posso alterar minha candidatura depois de enviada?",
            answer: "Depende da política de cada instituição. Algumas permitem atualizações antes do prazo final, enquanto outras não. Recomendamos revisar cuidadosamente todos os documentos antes do envio. Nossa equipe pode ajudá-lo a verificar se há possibilidade de alterações após o envio."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
                        style={{ fontFamily: 'var(--font-dancing)' }}
                    >
                        Perguntas Frequentes
                    </h2>
                    <p 
                        className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        Esclareça suas dúvidas sobre o processo de candidatura e nossa plataforma
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="mb-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                            >
                                <h3 
                                    className="text-base sm:text-lg font-semibold text-gray-800 pr-4"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-[#016EF8]" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-[#016EF8]" />
                                    )}
                                </div>
                            </button>
                            
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index 
                                        ? 'max-h-96 opacity-100' 
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pb-5">
                                    <p 
                                        className="text-sm sm:text-base text-gray-600 leading-relaxed"
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    >
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p 
                        className="text-base sm:text-lg text-gray-600 mb-6"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        Não encontrou a resposta que procurava?
                    </p>
                    <button 
                        className="px-8 py-3 bg-[#016EF8] text-white rounded-full font-semibold text-base hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        Entre em Contato
                    </button>
                </div>
            </div>
        </section>
    );
}