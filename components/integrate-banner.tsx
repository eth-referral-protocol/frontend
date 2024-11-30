import Link from "next/link";
import { Button } from "./ui/button";

export default function IntegrateBanner() {
    return (
        <div className="container mx-auto px-6 py-24 relative max-w-[64rem] z-10">
            <div className="rounded-2xl bg-gradient-to-b from-cyan-500/20 to-cyan-500/10 p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Want to Integrate with ERP?</h2>
                <p className="mx-auto max-w-[600px] mb-8 text-gray-400">
                    Read the docs to learn how easy it is to integrate with the Ethereum referral protocol
                </p>
                <Link
                    href="/docs"
                >
                    <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold">
                        Learn more
                    </Button>
                </Link>
            </div>
        </div>
    );
}