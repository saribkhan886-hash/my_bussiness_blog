import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrendingArticles } from "@/components/trending-articles"
import { PaymentBanner } from "@/components/payment-banner"
import { PoliticsSection } from "@/components/politics-section"
import { GuestPostsSection } from "@/components/guest-posts-section"
/*import { MostReadSection } from "@/components/most-read-section"*/
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"
import FixedButtons from "@/components/FixedButtons";
import { ReviewSection } from "@/components/ReviewSection"





export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrendingArticles />
        <PaymentBanner />
        <PoliticsSection />
        <GuestPostsSection />
        <NewsletterSignup />
        <FixedButtons />
        <ReviewSection/> 
      </main>
      <Footer />
    </div>
  )
}
