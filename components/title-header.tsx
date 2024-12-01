"use client"

import { motion } from "framer-motion";

export default function TitleHeader() {
    return (
        <div
            className="py-8"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent" />
            <div className="absolute inset-0">
                <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
            </div>
            <div className="container relative mx-auto px-6 py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
                        ETHEREUM
                        <span className="block text-cyan-400">REFERRAL PROTOCOL</span>
                    </h1>
                    <p className="mx-auto max-w-[300px] md:max-w-[600px] text-xl text-gray-400">
                        Rocket fuel for growth 🚀
                    </p>
                </motion.div>
            </div>
        </div>
    );
}