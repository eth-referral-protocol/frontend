import DotsBackground from "@/components/dots-background"
import FeaturesBanner from "@/components/features-banner"
import IntegrateBanner from "@/components/integrate-banner"
import ScrollBanner from "@/components/scroll-banner"
import TitleHeader from "@/components/title-header"

export default function HomePage() {
	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">
			<DotsBackground/>
			<div className="relative">
				<TitleHeader/>
				<ScrollBanner
					labels={[
						"POWERED BY ETHEREUM",
						"IMMUTABLE CONTRACTS",
						"OPEN SOURCE",
						"PERMISSIONLESS PROTOCOL",
					]}
				/>
			</div>
			<FeaturesBanner/>
			<IntegrateBanner/>
		</div>
	)
}