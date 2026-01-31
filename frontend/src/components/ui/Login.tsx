"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui seria a lógica de autenticação
        console.log("Login attempt:", formData);
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
                            Entrar na sua conta
                        </h2>
                        <p 
                            className="text-base text-gray-600"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            Continue sua jornada para encontrar a bolsa ideal
                        </p>
                    </div>

                    {/* Formulário */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
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
                                    className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#016EF8] focus:border-transparent transition-all duration-200 text-sm"
                                    style={{ fontFamily: 'var(--font-poppins)' }}
                                    placeholder="seu@email.com"
                                />
                            </div>
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
                                    autoComplete="current-password"
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="block w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#016EF8] focus:border-transparent transition-all duration-200 text-sm"
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
                        </div>

                        {/* Esqueceu a senha */}
                        <div className="text-right">
                            <Link 
                                href="/forgot-password"
                                className="text-sm text-[#016EF8] hover:text-blue-700 transition-colors duration-200"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Esqueceu a senha?
                            </Link>
                        </div>

                        {/* Botão Entrar */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm font-semibold text-white bg-[#016EF8] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#016EF8] transition-all duration-200 hover:shadow-xl"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Entrar
                            </button>
                        </div>

                        {/* Link para criar conta */}
                        <div className="text-center">
                            <p 
                                className="text-sm text-gray-600"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                                Não tem uma conta?{" "}
                                <Link 
                                    href="/register"
                                    className="text-[#016EF8] hover:text-blue-700 font-semibold transition-colors duration-200"
                                >
                                    Criar conta
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}