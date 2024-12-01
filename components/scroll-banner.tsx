"use client"

const labels = [
    "POWERED BY ETHEREUM",
    "IMMUTABLE CONTRACTS",
    "OPEN SOURCE",
    "PERMISSIONLESS PROTOCOL",
];

export default function ScrollBanner() {
    const totalLabelWidth = "762px";

    return (
        <div>
            <div className="relative overflow-hidden border-t border-b border-cyan-500/20 bg-black/50 backdrop-blur-sm">
                <div className="animate-scroll-left flex gap-8 py-4">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex gap-8 items-center whitespace-nowrap text-sm uppercase tracking-wider">
                            {labels.map((label, index) =>
                                <span
                                    key={index}
                                    className={index % 2 === 0 ? "text-cyan-400" : ""}
                                >
                                    {label}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <style
                jsx
            >
                {`@keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-${totalLabelWidth}); }
                }
                .animate-scroll-left {
                    animation: scroll-left 20s linear infinite;
                }`}
            </style>
        </div>
    );
}