import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import { Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Portfolio = () => {

    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))
    return (
        <BannerLayout>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">

            {
    isLoading ? 
        ['s1', 's2', 's3', 's4'].map((key) => (
            <ImageAndParagraphSkeleton key={key} className="w-full object-cover" />
        ))
    :
        data?.map((item, index) => (
            <PortfolioCard key={item.id || `portfolio-${index}`} data={item} />
        ))
}



            </div >
            <Footer />
        </BannerLayout >
    );
};

export default Portfolio;
