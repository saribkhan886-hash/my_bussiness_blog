import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const miniArticles = [
    {
      img: "/stock-market-charts.jpg",
      title: "Stock Market Hits Record High as Tech Stocks Surge",
      tag: "Technology • 2h ago",
    },
    {
      img: "/stock-market-trading-floor.png",
      title: "How I Learned to Stop Worrying and Love Stock Market",
      tag: "Investment • 4h ago",
      highlight: true, // ✅ second blog highlight
    },
    {
      img: "/business-meeting-office.png",
      title: "Breaking: New Trade Deal Announced Between Major Economies",
      tag: "Politics • 4h ago",
    },
    {
      img: "/renewable-energy-solar-panels.png",
      title: "Green Energy Investments Reach All-Time High",
      tag: "Environment • 8h ago",
    },
  ]

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Left Big Featured Article */}
        <Link href="/blog/15-shocking-business-trends-that-will-shock-markets">
          <Card className="relative group overflow-hidden rounded-2xl shadow-xl h-[500px] cursor-pointer">
            <img
              src="/sarib.png" // <-- New image added here
              alt="Business meeting"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="inline-block bg-primary px-4 py-1 text-sm font-semibold rounded mb-4">
                Business
              </span>
              <h2 className="text-4xl font-extrabold leading-tight mb-4">
                15 Shocking Business Trends That Will Shock Markets
              </h2>
              <p className="text-white/90 text-base mb-6">
                Discover the revolutionary trends reshaping the business world
                and creating new opportunities for growth.
              </p>
              <Button variant="secondary" size="lg" className="shadow-md">
                Read More →
              </Button>
            </div>
          </Card>
        </Link>

        {/* Right Side Mini Articles */}
        <div className="grid grid-rows-4 gap-6">
          {miniArticles.map((article, idx) => (
            <Card
              key={idx}
              className={`
                flex items-center gap-5 p-5 rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer group
                ${article.highlight ? "bg-blue-50 flex-col items-start" : ""}
              `}
            >
              <img
                src={article.img}
                alt={article.title}
                className={`
                  ${article.highlight ? "w-full h-48 object-cover rounded-lg mb-4" : "w-24 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"}
                `}
              />
              <div className={article.highlight ? "px-0" : "flex-1"}>
                <h3 className={article.highlight ? "text-xl text-primary font-bold mb-2" : "font-bold text-base"}>
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground">{article.tag}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
