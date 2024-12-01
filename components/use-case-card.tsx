'use client';

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface UseCaseCardProps {
    icon: React.ReactNode
    title: string
    description: string
    className?: string
}

export default function UseCaseCard({ icon, title, description, className }: UseCaseCardProps) {
    return (
        <Card className={cn(
            "group relative overflow-hidden bg-[#001414] border-0 px-5 py-6 transition-all hover:bg-[#002828]",
            className
        )}>
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className="text-[#00C3C3] w-12 h-12 flex items-center justify-center">
                    {icon}
                </div>
                <h3 className="text-gray-200 text-xl font-medium tracking-wide">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                    {description}
                </p>
            </div>
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001414]/50 group-hover:to-[#002828]/50 transition-all"
                aria-hidden="true"
            />
        </Card>
    )
}

