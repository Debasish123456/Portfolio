import React from "react";
import { motion } from "framer-motion";
import CardLayout from "../../Common/CardLayout";

const TechStackCard = ({ data }) => {
  return (
    <CardLayout>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-4 h-full relative card_stylings transition group text-center"
      >
        {/* Tech Stack Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute z-10 right-5 -top-6 w-16 h-16 bg-gradient-to-b from-gray-100 to-gray-300 border-[3px] border-green-400 rounded-full flex items-center justify-center shadow-md"
        >
          <img
            src={data?.image}
            alt={data?.name}
            className="w-12 h-12 object-contain"
            onError={(e) => (e.target.src = "/fallback-logo.png")}
          />
        </motion.div>

        {/* Tech Name */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-Snow font-bold text-lg mt-10"
        >
          {data?.name}
        </motion.div>

        {/* Tech Description - Always Visible on Mobile, Hover on Larger Screens */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xs text-LightGray italic mt-2 md:hidden block"
        >
          {data?.description}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-xs text-LightGray italic mt-2 hidden md:block opacity-0 group-hover:opacity-100"
        >
          {data?.description}
        </motion.div>

        {/* Learn More Button */}
        {data?.documentationURL && (
          <motion.a
            href={data.documentationURL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-3 inline-block px-4 py-2 text-xs font-semibold text-green-500 border border-green-500 rounded-md hover:bg-green-500 hover:text-white transition duration-300"
          >
            Learn More
          </motion.a>
        )}
      </motion.div>
    </CardLayout>
  );
};

export default TechStackCard;
