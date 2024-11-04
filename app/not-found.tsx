import React from "react";
import ThreeBackground from "@/components/error_pages/404canvas";

const NotFoundPage: React.FC = () => {
    return (
    <div className="w-full h-screen flex flex-col items-center">
        <div className="absolute top-0 left-0 w-full h-full">
            <ThreeBackground />
        </div>
        <div className="z-10 mt-40 ml-10 sm:ml-0">
            <h1 className="text-6xl font-bold text-fore">Lost in Space!</h1>
            <h1 className="text-4xl font-bold text-fore">404</h1>
            <p className="text-lg text-fore">Page not found</p>
        </div>
    </div>
    )
}

export default NotFoundPage;