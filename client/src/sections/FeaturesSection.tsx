'use client'
import SectionTitle from "../components/SectionTitle";
import { motion } from "motion/react";
import { featuresData } from "../data/features";
import type { IFeature } from "../types";
export default function FeaturesSection() {
    return (
        <div id="features" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="Features" text2="What you get" text3="Components, patterns and pages — everything you need to ship." />
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-16 px-6">
                {featuresData.map((feature: IFeature, index: number) => (
                    <motion.div key={index} 
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="p-6 rounded-xl space-y-4 border border-pink-950 bg-pink-950/30 backdrop-blur-2xl max-w-80 w-full">
                            <div className="flex items-center justify-center p-2 h-12 w-12 bg-pink-400/20 rounded-lg">
                                 {feature.icon}
                            </div>
                            <h3 className="text-base font-medium text-white">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 line-clamp-2 pb-4 -mt-3">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}