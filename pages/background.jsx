import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

function Background() {
    const { isLoading, error, data } = useQuery("background", () =>
        axios
            .get("api/background")
            .then(({ data }) => data)
            .catch((error) =>
                console.error("Error fetching background data:", error)
            )
    );

    return (
        <BannerLayout>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10"
            >
                {/* Education Section */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-y-4 order-2 md:order-1 md:mr-12"
                >
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
                        Education
                    </div>
                    {isLoading
                        ? [1, 2, 3].map((_, index) => (
                              <ParagraphSkeleton
                                  key={index}
                                  className="p-8 h-full w-full relative"
                              />
                          ))
                        : data &&
                          data[0]?.eduCards?.map((edu, index) => (
                              <motion.div
                                  key={edu.id || index}
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.5, delay: index * 0.2 }}
                              >
                                  <Edu_Card data={edu} />
                              </motion.div>
                          ))}
                </motion.div>

                {/* Experience Section */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-1 md:order-2"
                >
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className="md:pt-0 pt-4 text-xl text-Snow font-semibold">
                            Experience
                        </div>
                        {isLoading
                            ? [1, 2, 3].map((_, index) => (
                                  <ParagraphSkeleton
                                      key={index}
                                      className="p-8 h-full w-full relative"
                                  />
                              ))
                            : data &&
                              data[1]?.expCards?.map((exp, index) => (
                                  <motion.div
                                      key={exp.id || index}
                                      initial={{ opacity: 0 }}
                                      whileInView={{ opacity: 1 }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 0.5, delay: index * 0.2 }}
                                  >
                                      <Exp_Card data={exp} />
                                  </motion.div>
                              ))}
                    </div>
                </motion.div>
            </motion.div>
            <Footer />
        </BannerLayout>
    );
}

export default Background;
