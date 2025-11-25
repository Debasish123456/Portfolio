import { useState } from "react";
import { motion } from "framer-motion";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import Certi_Card from "../components/Certificates/Certi_Card"; // Certificate card component

function Certificates() {
  // Fetch certificates data from backend API
  const { isLoading, error, data } = useQuery("certificates", async () => {
    try {
      const res = await axios.get("api/certificates");
      return res.data;
    } catch (err) {
      console.error("Error fetching certificates:", err);
      return [];
    }
  });

  return (
    <BannerLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="px-4 pb-2 pt-10"
      >
        <div className="text-2xl text-Snow font-semibold mb-6">
          Certificates
        </div>

        {isLoading ? (
          // Show loading skeletons while fetching data
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <ParagraphSkeleton
                key={index}
                className="p-8 h-full w-full relative"
              />
            ))}
          </div>
        ) : error ? (
          // Show error message if fetch fails
          <p className="text-red-500">Failed to load certificates.</p>
        ) : (
          // Show certificate cards
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((cert, index) => (
              <motion.div
                key={cert.id || index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Certi_Card data={cert} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      <Footer />
    </BannerLayout>
  );
}

export default Certificates;
