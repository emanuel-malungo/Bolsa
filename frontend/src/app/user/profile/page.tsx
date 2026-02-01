"use client";

import { useState } from "react";
import { 
    User, 
    Mail, 
    Phone, 
    MapPin, 
    Calendar, 
    GraduationCap, 
    Award, 
    Edit3, 
    Save, 
    X,
    Camera,
    AlertCircle,
    CheckCircle,
    Lock,
    Trash2,
    Download
} from "lucide-react";

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState("personal");
    
    const [profileData, setProfileData] = useState({
        // Dados pessoais
        name: "João Silva Santos",
        email: "joao.silva@email.com",
        phone: "+55 (11) 99999-9999",
        birthDate: "1995-06-15",
        nationality: "Brasileira",
        address: "São Paulo, SP, Brasil",
        profilePicture: "/api/placeholder/150/150",
        
        // Dados acadêmicos
        education: "Bacharelado em Engenharia de Software",
        university: "Universidade de São Paulo",
        gpa: "8.5/10.0",
        graduationYear: "2023",
        previousEducation: "Ensino Médio Completo",
        
        // Idiomas
        languages: [
            { language: "Português", level: "Nativo", certificate: "" },
            { language: "Inglês", level: "Avançado", certificate: "IELTS 7.5" },
            { language: "Espanhol", level: "Intermediário", certificate: "" }
        ],
        
        // Preferências
        preferredCountries: ["Canadá", "Estados Unidos", "Reino Unido", "Austrália"],
        preferredPrograms: ["Mestrado", "PhD"],
        preferredAreas: ["Engenharia de Software", "Ciência da Computação", "Inteligência Artificial"],
        budgetRange: "USD $20,000 - $40,000/ano"
    });

    const [editData, setEditData] = useState(profileData);
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleEdit = () => {
        setIsEditing(true);
        setEditData(profileData);
    };

    const handleSave = () => {
        setProfileData(editData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditData(profileData);
        setIsEditing(false);
    };

    const handleLanguageAdd = () => {
        setEditData(prev => ({
            ...prev,
            languages: [...prev.languages, { language: "", level: "", certificate: "" }]
        }));
    };

    const handleLanguageRemove = (index: number) => {
        setEditData(prev => ({
            ...prev,
            languages: prev.languages.filter((_, i) => i !== index)
        }));
    };

    const exportProfile = () => {
        // Em produção, geraria um PDF do perfil
        console.log("Exportando perfil...");
    };

    const tabs = [
        { id: "personal", label: "Dados Pessoais", icon: User },
        { id: "academic", label: "Formação", icon: GraduationCap },
        { id: "languages", label: "Idiomas", icon: Award },
        { id: "preferences", label: "Preferências", icon: MapPin },
        { id: "security", label: "Segurança", icon: Lock }
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex flex-col sm:flex-row items-center lg:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="relative">
                            <img
                                src={profileData.profilePicture}
                                alt="Foto do perfil"
                                className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                            />
                            <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#016EF8] text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                <Camera className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="text-center sm:text-left">
                            <h1 
                                className="text-3xl font-bold text-gray-900 mb-2"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                {profileData.name}
                            </h1>
                            <div className="space-y-1">
                                <div className="flex items-center text-gray-600">
                                    <Mail className="w-4 h-4 mr-2" />
                                    <span style={{ fontFamily: 'var(--font-poppins)' }}>{profileData.email}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span style={{ fontFamily: 'var(--font-poppins)' }}>{profileData.address}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <GraduationCap className="w-4 h-4 mr-2" />
                                    <span style={{ fontFamily: 'var(--font-poppins)' }}>{profileData.education}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex space-x-3 mt-6 lg:mt-0">
                        <button
                            onClick={exportProfile}
                            className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Exportar
                        </button>
                        {!isEditing ? (
                            <button
                                onClick={handleEdit}
                                className="flex items-center px-4 py-2 bg-[#016EF8] text-white rounded-lg hover:bg-blue-700 transition-colors"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                <Edit3 className="w-4 h-4 mr-2" />
                                Editar
                            </button>
                        ) : (
                            <div className="flex space-x-2">
                                <button
                                    onClick={handleCancel}
                                    className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    <X className="w-4 h-4 mr-2" />
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    <Save className="w-4 h-4 mr-2" />
                                    Salvar
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="flex overflow-x-auto">
                    {tabs.map(tab => {
                        const IconComponent = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center px-6 py-4 whitespace-nowrap border-b-2 font-medium transition-colors ${
                                    activeTab === tab.id
                                        ? 'border-[#016EF8] text-[#016EF8] bg-blue-50'
                                        : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                <IconComponent className="w-4 h-4 mr-2" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="p-8">
                    {activeTab === "personal" && (
                        <div className="space-y-6">
                            <h2 
                                className="text-xl font-bold text-gray-900 mb-4"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                Dados Pessoais
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Nome Completo
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editData.name}
                                            onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            style={{ fontFamily: 'var(--font-poppins)' }}
                                        />
                                    ) : (
                                        <p className="text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>{profileData.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Email
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            value={editData.email}
                                            onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            style={{ fontFamily: 'var(--font-poppins)' }}
                                        />
                                    ) : (
                                        <p className="text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>{profileData.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Telefone
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="tel"
                                            value={editData.phone}
                                            onChange={(e) => setEditData(prev => ({ ...prev, phone: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            style={{ fontFamily: 'var(--font-poppins)' }}
                                        />
                                    ) : (
                                        <p className="text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>{profileData.phone}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Data de Nascimento
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="date"
                                            value={editData.birthDate}
                                            onChange={(e) => setEditData(prev => ({ ...prev, birthDate: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            style={{ fontFamily: 'var(--font-poppins)' }}
                                        />
                                    ) : (
                                        <p className="text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                                            {new Date(profileData.birthDate).toLocaleDateString('pt-BR')}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Nacionalidade
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editData.nationality}
                                            onChange={(e) => setEditData(prev => ({ ...prev, nationality: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            style={{ fontFamily: 'var(--font-poppins)' }}
                                        />
                                    ) : (
                                        <p className="text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>{profileData.nationality}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Endereço
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editData.address}
                                            onChange={(e) => setEditData(prev => ({ ...prev, address: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            style={{ fontFamily: 'var(--font-poppins)' }}
                                        />
                                    ) : (
                                        <p className="text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>{profileData.address}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "academic" && (
                        <div className="space-y-6">
                            <h2 
                                className="text-xl font-bold text-gray-900 mb-4"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                Formação Acadêmica
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Curso Atual/Concluído
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editData.education}
                                            onChange={(e) => setEditData(prev => ({ ...prev, education: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            style={{ fontFamily: 'var(--font-poppins)' }}
                                        />
                                    ) : (
                                        <p className="text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>{profileData.education}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Universidade
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editData.university}
                                            onChange={(e) => setEditData(prev => ({ ...prev, university: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            style={{ fontFamily: 'var(--font-poppins)' }}
                                        />
                                    ) : (
                                        <p className="text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>{profileData.university}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Média/GPA
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editData.gpa}
                                            onChange={(e) => setEditData(prev => ({ ...prev, gpa: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            style={{ fontFamily: 'var(--font-poppins)' }}
                                        />
                                    ) : (
                                        <p className="text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>{profileData.gpa}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Ano de Conclusão
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editData.graduationYear}
                                            onChange={(e) => setEditData(prev => ({ ...prev, graduationYear: e.target.value }))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            style={{ fontFamily: 'var(--font-poppins)' }}
                                        />
                                    ) : (
                                        <p className="text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>{profileData.graduationYear}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "languages" && (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 
                                    className="text-xl font-bold text-gray-900"
                                    style={{ fontFamily: 'var(--font-dancing)' }}
                                >
                                    Idiomas
                                </h2>
                                {isEditing && (
                                    <button
                                        onClick={handleLanguageAdd}
                                        className="flex items-center px-4 py-2 bg-[#016EF8] text-white rounded-lg hover:bg-blue-700 transition-colors"
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    >
                                        <User className="w-4 h-4 mr-2" />
                                        Adicionar Idioma
                                    </button>
                                )}
                            </div>
                            
                            <div className="space-y-4">
                                {(isEditing ? editData : profileData).languages.map((lang, index) => (
                                    <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                                                Idioma
                                            </label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={lang.language}
                                                    onChange={(e) => {
                                                        const newLanguages = [...editData.languages];
                                                        newLanguages[index].language = e.target.value;
                                                        setEditData(prev => ({ ...prev, languages: newLanguages }));
                                                    }}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                                />
                                            ) : (
                                                <p className="text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>{lang.language}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                                                Nível
                                            </label>
                                            {isEditing ? (
                                                <select
                                                    value={lang.level}
                                                    onChange={(e) => {
                                                        const newLanguages = [...editData.languages];
                                                        newLanguages[index].level = e.target.value;
                                                        setEditData(prev => ({ ...prev, languages: newLanguages }));
                                                    }}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                                >
                                                    <option value="">Selecionar</option>
                                                    <option value="Básico">Básico</option>
                                                    <option value="Intermediário">Intermediário</option>
                                                    <option value="Avançado">Avançado</option>
                                                    <option value="Fluente">Fluente</option>
                                                    <option value="Nativo">Nativo</option>
                                                </select>
                                            ) : (
                                                <p className="text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>{lang.level}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                                                Certificação
                                            </label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    placeholder="Ex: IELTS 7.5"
                                                    value={lang.certificate}
                                                    onChange={(e) => {
                                                        const newLanguages = [...editData.languages];
                                                        newLanguages[index].certificate = e.target.value;
                                                        setEditData(prev => ({ ...prev, languages: newLanguages }));
                                                    }}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                                />
                                            ) : (
                                                <p className="text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                                                    {lang.certificate || "Não informado"}
                                                </p>
                                            )}
                                        </div>

                                        {isEditing && (
                                            <div className="flex items-end">
                                                <button
                                                    onClick={() => handleLanguageRemove(index)}
                                                    className="w-full flex items-center justify-center px-3 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
                                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                                >
                                                    <Trash2 className="w-4 h-4 mr-2" />
                                                    Remover
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "preferences" && (
                        <div className="space-y-6">
                            <h2 
                                className="text-xl font-bold text-gray-900 mb-4"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                Preferências de Bolsas
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Países de Interesse
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {profileData.preferredCountries.map((country, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                                                style={{ fontFamily: 'var(--font-poppins)' }}
                                            >
                                                {country}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Tipos de Programa
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {profileData.preferredPrograms.map((program, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                                                style={{ fontFamily: 'var(--font-poppins)' }}
                                            >
                                                {program}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Áreas de Interesse
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {profileData.preferredAreas.map((area, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                                                style={{ fontFamily: 'var(--font-poppins)' }}
                                            >
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Orçamento Pretendido
                                    </label>
                                    <p className="text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        {profileData.budgetRange}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "security" && (
                        <div className="space-y-6">
                            <h2 
                                className="text-xl font-bold text-gray-900 mb-4"
                                style={{ fontFamily: 'var(--font-dancing)' }}
                            >
                                Segurança da Conta
                            </h2>
                            
                            <div className="max-w-md space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Senha Atual
                                    </label>
                                    <input
                                        type="password"
                                        value={passwordData.currentPassword}
                                        onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Nova Senha
                                    </label>
                                    <input
                                        type="password"
                                        value={passwordData.newPassword}
                                        onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        Confirmar Nova Senha
                                    </label>
                                    <input
                                        type="password"
                                        value={passwordData.confirmPassword}
                                        onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                    />
                                </div>

                                <button
                                    className="w-full flex items-center justify-center px-6 py-3 bg-[#016EF8] text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    <Lock className="w-4 h-4 mr-2" />
                                    Alterar Senha
                                </button>
                            </div>

                            <div className="pt-8 border-t border-gray-200">
                                <h3 
                                    className="text-lg font-bold text-red-600 mb-4"
                                    style={{ fontFamily: 'var(--font-dancing)' }}
                                >
                                    Zona de Perigo
                                </h3>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <div className="flex items-start">
                                        <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-red-800 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                                Excluir Conta
                                            </h4>
                                            <p className="text-red-700 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                                                Esta ação é permanente e não pode ser desfeita. Todos os seus dados serão removidos.
                                            </p>
                                            <button
                                                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                                style={{ fontFamily: 'var(--font-poppins)' }}
                                            >
                                                <Trash2 className="w-4 h-4 mr-2" />
                                                Excluir Conta
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}