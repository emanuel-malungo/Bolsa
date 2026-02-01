"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, ChevronLeft, User, GraduationCap, Globe, DollarSign, CheckCircle } from "lucide-react";
import Link from "next/link";

type FormData = {
    // Etapa 1 - Informações Básicas
    country: string;
    educationLevel: string;
    hasDiploma: string;
    
    // Etapa 2 - Área e Objetivo
    areasOfInterest: string[];
    studyCountries: string[];
    languages: string[];
    
    // Etapa 3 - Preferências Financeiras
    financialSituation: string;
};

export default function CreateProfile() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        country: "",
        educationLevel: "",
        hasDiploma: "",
        areasOfInterest: [],
        studyCountries: [],
        languages: [],
        financialSituation: ""
    });

    const totalSteps = 3;

    const handleInputChange = (field: keyof FormData, value: string | string[]) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleMultiSelect = (field: keyof FormData, value: string) => {
        const currentArray = formData[field] as string[];
        const newArray = currentArray.includes(value)
            ? currentArray.filter(item => item !== value)
            : [...currentArray, value];
        
        handleInputChange(field, newArray);
    };

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const canContinue = () => {
        switch (currentStep) {
            case 1:
                return formData.country && formData.educationLevel && formData.hasDiploma;
            case 2:
                return formData.areasOfInterest.length > 0 && formData.studyCountries.length > 0 && formData.languages.length > 0;
            case 3:
                return true; // Opcional
            default:
                return false;
        }
    };

    const handleFinish = () => {
        console.log("Profile completed:", formData);
        // Redirecionar para o dashboard
        router.push('/user/dashboard');
    };

    const countries = [
        "Brasil", "Portugal", "Angola", "Moçambique", "Cabo Verde", "Estados Unidos", 
        "Reino Unido", "Canadá", "Austrália", "França", "Alemanha", "Espanha", "Outros"
    ];

    const educationLevels = [
        { value: "ensino-medio", label: "Ensino Médio" },
        { value: "licenciatura", label: "Licenciatura" },
        { value: "mestrado", label: "Mestrado" },
        { value: "doutoramento", label: "Doutoramento" }
    ];

    const areasOfInterest = [
        "Tecnologia", "Saúde", "Engenharia", "Artes", "Ciências Sociais", 
        "Negócios", "Direito", "Educação", "Ciências Naturais", "Outros"
    ];

    const studyCountries = [
        "Estados Unidos", "Reino Unido", "Canadá", "Austrália", "Alemanha", 
        "França", "Holanda", "Suécia", "Singapura", "Japão", "Coreia do Sul", "Outros"
    ];

    const languages = [
        "Português", "Inglês", "Espanhol", "Francês", "Alemão", 
        "Italiano", "Mandarim", "Japonês", "Coreano", "Outros"
    ];

    const financialSituations = [
        { value: "baixa", label: "Baixa" },
        { value: "media", label: "Média" },
        { value: "alta", label: "Alta" }
    ];

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-[#016EF8]/10 rounded-full text-[#016EF8]">
                                    <User className="w-8 h-8" />
                                </div>
                            </div>
                            <h2 
                                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                Informações Básicas
                            </h2>
                            <p 
                                className="text-sm text-gray-600"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Essas informações ajudam a filtrar bolsas compatíveis.
                            </p>
                        </div>

                        {/* País de origem */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                                País de origem
                            </label>
                            <select
                                value={formData.country}
                                onChange={(e) => handleInputChange('country', e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#016EF8] focus:border-transparent text-sm"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                <option value="">Selecione seu país</option>
                                {countries.map(country => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                        </div>

                        {/* Nível de ensino */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                                Nível de ensino atual
                            </label>
                            <div className="grid grid-cols-1 gap-3">
                                {educationLevels.map(level => (
                                    <label key={level.value} className="flex items-center p-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                                        <input
                                            type="radio"
                                            name="educationLevel"
                                            value={level.value}
                                            checked={formData.educationLevel === level.value}
                                            onChange={(e) => handleInputChange('educationLevel', e.target.value)}
                                            className="mr-3 text-[#016EF8] focus:ring-[#016EF8]"
                                        />
                                        <span className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            {level.label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Já possui diploma */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                                Já possui diploma?
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <label className="flex items-center p-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                                    <input
                                        type="radio"
                                        name="hasDiploma"
                                        value="sim"
                                        checked={formData.hasDiploma === "sim"}
                                        onChange={(e) => handleInputChange('hasDiploma', e.target.value)}
                                        className="mr-3 text-[#016EF8] focus:ring-[#016EF8]"
                                    />
                                    <span className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Sim
                                    </span>
                                </label>
                                <label className="flex items-center p-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                                    <input
                                        type="radio"
                                        name="hasDiploma"
                                        value="nao"
                                        checked={formData.hasDiploma === "nao"}
                                        onChange={(e) => handleInputChange('hasDiploma', e.target.value)}
                                        className="mr-3 text-[#016EF8] focus:ring-[#016EF8]"
                                    />
                                    <span className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Não
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-[#016EF8]/10 rounded-full text-[#016EF8]">
                                    <GraduationCap className="w-8 h-8" />
                                </div>
                            </div>
                            <h2 
                                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                Área e Objetivo
                            </h2>
                            <p 
                                className="text-sm text-gray-600"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Pode selecionar mais de uma opção.
                            </p>
                        </div>

                        {/* Áreas de interesse */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                                Área(s) de interesse
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {areasOfInterest.map(area => (
                                    <label key={area} className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${
                                        formData.areasOfInterest.includes(area) 
                                            ? 'border-[#016EF8] bg-[#016EF8]/5' 
                                            : 'border-gray-300 hover:bg-gray-50'
                                    }`}>
                                        <input
                                            type="checkbox"
                                            checked={formData.areasOfInterest.includes(area)}
                                            onChange={() => handleMultiSelect('areasOfInterest', area)}
                                            className="mr-3 text-[#016EF8] focus:ring-[#016EF8]"
                                        />
                                        <span className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            {area}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* País(es) onde deseja estudar */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                                País(es) onde deseja estudar
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {studyCountries.map(country => (
                                    <label key={country} className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${
                                        formData.studyCountries.includes(country) 
                                            ? 'border-[#016EF8] bg-[#016EF8]/5' 
                                            : 'border-gray-300 hover:bg-gray-50'
                                    }`}>
                                        <input
                                            type="checkbox"
                                            checked={formData.studyCountries.includes(country)}
                                            onChange={() => handleMultiSelect('studyCountries', country)}
                                            className="mr-3 text-[#016EF8] focus:ring-[#016EF8]"
                                        />
                                        <span className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            {country}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Idiomas que domina */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                                Idioma(s) que domina
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {languages.map(language => (
                                    <label key={language} className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${
                                        formData.languages.includes(language) 
                                            ? 'border-[#016EF8] bg-[#016EF8]/5' 
                                            : 'border-gray-300 hover:bg-gray-50'
                                    }`}>
                                        <input
                                            type="checkbox"
                                            checked={formData.languages.includes(language)}
                                            onChange={() => handleMultiSelect('languages', language)}
                                            className="mr-3 text-[#016EF8] focus:ring-[#016EF8]"
                                        />
                                        <span className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            {language}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-[#016EF8]/10 rounded-full text-[#016EF8]">
                                    <DollarSign className="w-8 h-8" />
                                </div>
                            </div>
                            <h2 
                                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                Preferências Financeiras
                            </h2>
                            <p 
                                className="text-sm text-gray-600"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Isso nos ajuda a priorizar bolsas com maior cobertura financeira.
                            </p>
                            <p 
                                className="text-xs text-gray-500 mt-2"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                (Esta etapa é opcional)
                            </p>
                        </div>

                        {/* Situação financeira */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                                Situação financeira (opcional)
                            </label>
                            <div className="grid grid-cols-1 gap-3">
                                {financialSituations.map(situation => (
                                    <label key={situation.value} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${
                                        formData.financialSituation === situation.value 
                                            ? 'border-[#016EF8] bg-[#016EF8]/5' 
                                            : 'border-gray-300 hover:bg-gray-50'
                                    }`}>
                                        <input
                                            type="radio"
                                            name="financialSituation"
                                            value={situation.value}
                                            checked={formData.financialSituation === situation.value}
                                            onChange={(e) => handleInputChange('financialSituation', e.target.value)}
                                            className="mr-3 text-[#016EF8] focus:ring-[#016EF8]"
                                        />
                                        <span className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            {situation.label}
                                        </span>
                                    </label>
                                ))}
                                <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${
                                    formData.financialSituation === "" 
                                        ? 'border-[#016EF8] bg-[#016EF8]/5' 
                                        : 'border-gray-300 hover:bg-gray-50'
                                }`}>
                                    <input
                                        type="radio"
                                        name="financialSituation"
                                        value=""
                                        checked={formData.financialSituation === ""}
                                        onChange={(e) => handleInputChange('financialSituation', e.target.value)}
                                        className="mr-3 text-[#016EF8] focus:ring-[#016EF8]"
                                    />
                                    <span className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Prefiro não informar
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <Link href="/">
                        <h1 
                            className="text-3xl font-bold bg-gradient-to-r from-[#016EF8] to-blue-600 bg-clip-text text-transparent mb-6"
                            style={{ fontFamily: 'var(--font-dancing)' }}
                        >
                            BOLSAS
                        </h1>
                    </Link>
                    
                    {/* Barra de Progresso */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <span 
                                className="text-sm font-medium text-gray-700"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Etapa {currentStep} de {totalSteps}
                            </span>
                            <span 
                                className="text-sm text-gray-500"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                {Math.round((currentStep / totalSteps) * 100)}% completo
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                                className="bg-gradient-to-r from-[#016EF8] to-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Card Principal */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                    {renderStep()}
                </div>

                {/* Botões de Navegação */}
                <div className="flex justify-between items-center mt-8">
                    <button
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className={`flex items-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                            currentStep === 1
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Voltar
                    </button>

                    {currentStep === totalSteps ? (
                        <button
                            onClick={handleFinish}
                            className="flex items-center px-8 py-3 bg-[#016EF8] text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Ver bolsas recomendadas
                        </button>
                    ) : (
                        <button
                            onClick={nextStep}
                            disabled={!canContinue()}
                            className={`flex items-center px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                                canContinue()
                                    ? 'bg-[#016EF8] text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Continuar
                            <ChevronRight className="w-4 h-4 ml-2" />
                        </button>
                    )}
                </div>

                {/* Finalização */}
                {currentStep === totalSteps && (
                    <div className="text-center mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                        <div className="flex justify-center mb-3">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <p 
                            className="text-green-800 font-semibold"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Perfil completo! Agora podemos sugerir bolsas ideais para você.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}