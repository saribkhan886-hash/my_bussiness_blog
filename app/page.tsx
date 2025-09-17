import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrendingArticles } from "@/components/trending-articles"
import { PaymentBanner } from "@/components/payment-banner"
import { StockMarketSection } from "@/components/stock-market-section"
import { TechnologySection } from "@/components/technology-section"
import { PoliticsSection } from "@/components/politics-section"
import { AutomobileHealthSection } from "@/components/automobile-health-section"
import { GuestPostsSection } from "@/components/guest-posts-section"
import { MostReadSection } from "@/components/most-read-section"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrendingArticles />
        <PaymentBanner />
        <StockMarketSection />
        <TechnologySection />
        <PoliticsSection />
        <AutomobileHealthSection />
        <GuestPostsSection />
        <MostReadSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  )
}
