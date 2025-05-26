import Link from "next/link";
import { Button } from "./ui/button";

export default function IntegrateBanner() {
    return (
        <div className="container mx-auto px-6 relative max-w-[64rem] z-10">
            <div className="rounded-2xl bg-gradient-to-b from-cyan-500/20 to-cyan-500/10 p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Integrate with <span className="text-cyan-400">ERP</span> right now</h2>
                <p className="mx-auto max-w-[650px] mb-8 text-gray-400">
                    Grow your app by incentivizing your users to invite their friends
                </p>
                <Link
                    href="/docs"
                >
                    <Button className="bg-cyan-400 hover:bg-cyan-500 text-black">
                        Learn more
                    </Button>
                </Link>
            </div>
        </div>
    );
}