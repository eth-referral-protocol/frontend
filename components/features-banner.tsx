"use client"

import { motion } from "framer-motion";
import { AtomIcon, Share2Icon, ShieldIcon } from "lucide-react";

export default function FeaturesBanner() {
    return (
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid gap-12 md:grid-cols-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-4 text-center"
                >
                    <div className="mx-auto h-12 w-12 rounded-full bg-cyan-500/20 p-3">
                        <Share2Icon className="h-full w-full text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold">Incentivize Growth</h3>
                    <p className="text-gray-400 max-w-80 mx-auto">Build unique incentive structures that reward successful referrals</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4 text-center"
                >
                    <div className="mx-auto h-12 w-12 rounded-full bg-cyan-500/20 p-3">
                        <ShieldIcon className="h-full w-full text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold">Secure & Transparent</h3>
                    <p className="text-gray-400 max-w-80 mx-auto">Deployed with immutable smart contracts and open-source code</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-4 text-center"
                >
                    <div className="mx-auto h-12 w-12 rounded-full bg-cyan-500/20 p-3">
                        <AtomIcon className="h-full w-full text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold">Atomic Hooks</h3>
                    <p className="text-gray-400 max-w-80 mx-auto">Trigger smart contract functions before and after every referral</p>
                </motion.div>
            </div>
        </div>
    );
}