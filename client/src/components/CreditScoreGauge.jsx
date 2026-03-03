import React from 'react';

const CreditScoreGauge = () => {
    return (
        <div className="relative w-full max-w-[600px] mx-auto flex flex-col items-center justify-center p-0 select-none">
            <img
                src="/Credit Score Check.png"
                alt="Credit Score Check"
                className="w-full h-auto drop-shadow-2xl rounded-2xl"
                loading="lazy"
            />
        </div>
    );
};

export default CreditScoreGauge;
