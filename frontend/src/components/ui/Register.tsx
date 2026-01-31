"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import Link from "next/link";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState<{[key: string]: string}>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Limpar erro do campo quando o usuário começar a digitar
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors: {[key: string]: string} = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Nome é obrigatório";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }

        if (!formData.password) {
            newErrors.password = "Senha é obrigatória";
        } else if (formData.password.length < 6) {
            newErrors.password = "Senha deve ter pelo menos 6 caracteres";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirmação de senha é obrigatória";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Senhas não coincidem";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Aqui seria a lógica de registro
            console.log("Register attempt:", formData);
            // Após sucesso, redirecionar para tela de criação de perfil
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/">
                        <h1 
                            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#016EF8] to-blue-600 bg-clip-text text-transparent"
                            style={{ fontFamily: 'var(--font-dancing)' }}
                        >
                            BOLSAS
                        </h1>
                    </Link>
                </div>

                {/* Card */}
                <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10">
                    {/* Título e Subtítulo */}
                    <div className="text-center mb-8">
                        <h2 
                            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
                            style={{ fontFamily: 'var(--font-dancing)' }}
                        >
                            Crie sua conta gratuitamente
                        </h2>
                        <p 
                            className="text-base text-gray-600"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Leva menos de 1 minuto
                        </p>
                    </div>

                        {/* Formulário */}
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            {/* Nome completo */}
                            <div>
                                <label 
                                    htmlFor="fullName" 
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    Nome completo
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className={`block w-full pl-12 pr-4 py-2.5 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 text-sm ${
                                            errors.fullName 
                                                ? 'border-red-300 focus:ring-red-500 focus:border-transparent' 
                                                : 'border-gray-300 focus:ring-[#016EF8] focus:border-transparent'
                                        }`}
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                        placeholder="Seu nome completo"
                                    />
                                </div>
                                {errors.fullName && (
                                    <p className="mt-1 text-sm text-red-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        {errors.fullName}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label 
                                    htmlFor="email" 
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    Email
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`block w-full pl-12 pr-4 py-2.5 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 text-sm ${
                                            errors.email 
                                                ? 'border-red-300 focus:ring-red-500 focus:border-transparent' 
                                                : 'border-gray-300 focus:ring-[#016EF8] focus:border-transparent'
                                        }`}
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                        placeholder="seu@email.com"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Senha */}
                            <div>
                                <label 
                                    htmlFor="password" 
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    Senha
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="new-password"
                                        required
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className={`block w-full pl-12 pr-12 py-2.5 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 text-sm ${
                                            errors.password 
                                                ? 'border-red-300 focus:ring-red-500 focus:border-transparent' 
                                                : 'border-gray-300 focus:ring-[#016EF8] focus:border-transparent'
                                        }`}
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Confirmar Senha */}
                            <div>
                                <label 
                                    htmlFor="confirmPassword" 
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    Confirmar senha
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        autoComplete="new-password"
                                        required
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className={`block w-full pl-12 pr-12 py-2.5 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 text-sm ${
                                            errors.confirmPassword 
                                                ? 'border-red-300 focus:ring-red-500 focus:border-transparent' 
                                                : 'border-gray-300 focus:ring-[#016EF8] focus:border-transparent'
                                        }`}
                                        style={{ fontFamily: 'var(--font-poppins)' }}
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="mt-1 text-sm text-red-600" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>

                            {/* Botão Criar Conta */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-[#016EF8] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#016EF8] transition-all duration-200 hover:shadow-xl"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    Criar conta
                                </button>
                            </div>

                            {/* Mensagem de Confiança */}
                            <div className="text-center">
                                <p 
                                    className="text-xs text-gray-500 mb-4"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    Seus dados são usados apenas para sugerir bolsas compatíveis.
                                </p>
                            </div>

                            {/* Link para login */}
                            <div className="text-center">
                                <p 
                                    className="text-sm text-gray-600"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                >
                                    Já tem uma conta?{" "}
                                    <Link 
                                        href="/login"
                                        className="text-[#016EF8] hover:text-blue-700 font-semibold transition-colors duration-200"
                                    >
                                        Entrar
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
}