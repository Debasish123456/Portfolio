import React from 'react'
import CardLayout from '../Common/CardLayout'

const Certi_Card = ({ data }) => {
    return (
        <CardLayout className="keepItEmpty">
            <div className="card_stylings transition px-6 py-8">

                {/* Certificate Image Frame */}
                <div className="w-full bg-DeepNightBlack rounded-lg overflow-hidden border-2 border-Green/30 shadow-lg">
                    <img 
                        src={data.image} 
                        alt={data.title} 
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Title + Year */}
                <div className="flex justify-between items-center mt-4">
                    <div className="text-[16px] text-Snow font-medium">
                        {data.title}
                    </div>
                    <div className="text-LightGray bg-DeepNightBlack px-3 py-1 rounded-full text-xs opacity-70">
                        {data.year}
                    </div>
                </div>

                {/* Issuer */}
                <div className="text-xs text-Green mt-1 font-medium italic">
                    {data.issuer}
                </div>

                {/* Description */}
                <div className="text-LightGray text-sm mt-3">
                    {data.detail}
                </div>
            </div>
        </CardLayout>
    )
}

export default Certi_Card
