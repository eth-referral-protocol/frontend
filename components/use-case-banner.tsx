"use client";

import { SendIcon, TrophyIcon, UserIcon } from "lucide-react";
import UseCaseCard from "./use-case-card";
import { motion } from "framer-motion";
import React from "react";

export default function UseCaseBanner() {
    return (
        <div
            className="w-fit mx-auto"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col space-y-8 items-center w-fit"
            >
                <div
                    className="text-3xl font-bold"
                >
                    What ERP is based at
                </div>
                <div
                    className="grid gap-12 md:grid-cols-3"
                >
                    <UseCaseCard
                        icon={<UserIcon className="w-16 h-16" />}
                        title={"Welcome to Web3"}
                        description={"New users are given a wallet and ENS name"}
                        className="w-48"
                    />
                    <UseCaseCard
                        icon={<SendIcon className="w-16 h-16" />}
                        title={"Friends Inviting Friends"}
                        description={"Refer friends with a link or ENS name"}
                        className="w-48"
                    />
                    <UseCaseCard
                        icon={<TrophyIcon className="w-16 h-16" />}
                        title={"Refer for Rewards"}
                        description={"Reward users for onboarding their friends"}
                        className="w-48"
                    />
                </div>
            </motion.div>
        </div>
    );
}