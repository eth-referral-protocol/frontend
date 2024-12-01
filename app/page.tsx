import DotsBackground from "@/components/dots-background"
import FeaturesBanner from "@/components/features-banner"
import IntegrateBanner from "@/components/integrate-banner"
import ScrollBanner from "@/components/scroll-banner"
import TitleHeader from "@/components/title-header"
import UseCaseBanner from "@/components/use-case-banner"

export default function HomePage() {
	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">
			<DotsBackground />
			<div className="relative">
				<TitleHeader />
				<ScrollBanner />
			</div>
			<div
				className="flex flex-col space-y-32 pt-24 pb-16"
			>
				<FeaturesBanner />
				<UseCaseBanner />
				<IntegrateBanner />
			</div>
		</div>
	)
}