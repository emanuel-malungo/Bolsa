import { Suspense } from "react";
import CompareContent from "./CompareContent";

export default function Compare() {
    return (
        <Suspense fallback={
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="text-center">
                    <div className="h-10 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
                </div>
            </div>
        }>
            <CompareContent />
        </Suspense>
    );
}