import Link from "next/link";
import { MapPin, Clock, DollarSign, Heart, ExternalLink, Star } from "lucide-react";

interface ScholarshipCardProps {
    id?: string;
    title?: string;
    university?: string;
    country?: string;
    type?: string;
    deadline?: string;
    value?: string;
    compatibility?: number;
    isFavorite?: boolean;
    onToggleFavorite?: (id: string) => void;
    showCompatibility?: boolean;
    scholarship?: {
        id: string;
        title: string;
        university: string;
        country: string;
        type: string;
        deadline: string;
        value: string;
        compatibility?: number;
    };
}

export default function ScholarshipCard(props: ScholarshipCardProps) {
    // Suporta ambos os formatos: propriedades individuais e objeto scholarship
    const {
        id: propId,
        title: propTitle,
        university: propUniversity,
        country: propCountry,
        type: propType,
        deadline: propDeadline,
        value: propValue,
        compatibility: propCompatibility,
        isFavorite = false,
        onToggleFavorite,
        showCompatibility = false,
        scholarship
    } = props;

    const id = scholarship?.id || propId || "";
    const title = scholarship?.title || propTitle || "";
    const university = scholarship?.university || propUniversity || "";
    const country = scholarship?.country || propCountry || "";
    const type = scholarship?.type || propType || "";
    const deadline = scholarship?.deadline || propDeadline || "";
    const value = scholarship?.value || propValue || "";
    const compatibility = scholarship?.compatibility || propCompatibility;
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
            <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                type === 'Integral' ? 'bg-green-100 text-green-800' :
                                type === 'Parcial' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'
                            }`} style={{ fontFamily: 'var(--font-poppins)' }}>
                                {type}
                            </span>
                            {showCompatibility && compatibility && (
                                <div className="flex items-center">
                                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                                    <span className="text-sm font-medium text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                                        {compatibility}% compatível
                                    </span>
                                </div>
                            )}
                        </div>
                        <h3 
                            className="text-lg font-bold text-gray-900 mb-2 line-clamp-2"
                            style={{ fontFamily: 'var(--font-dancing)' }}
                        >
                            {title}
                        </h3>
                        <p 
                            className="text-gray-600 mb-3"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            {university}
                        </p>
                    </div>
                    {onToggleFavorite && (
                        <button
                            onClick={() => onToggleFavorite(id)}
                            className={`p-2 rounded-lg transition-colors ${
                                isFavorite 
                                    ? 'text-red-500 hover:bg-red-50' 
                                    : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                            }`}
                        >
                            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                        </button>
                    )}
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        <span style={{ fontFamily: 'var(--font-poppins)' }}>{country}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                        <span style={{ fontFamily: 'var(--font-poppins)' }}>{deadline}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 col-span-2">
                        <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                        <span style={{ fontFamily: 'var(--font-poppins)' }}>{value}</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <Link
                        href={`/user/scholarship/${id}`}
                        className="flex-1 bg-[#016EF8] text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors text-center"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        Ver Detalhes
                    </Link>
                    <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-800 hover:border-gray-400 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}