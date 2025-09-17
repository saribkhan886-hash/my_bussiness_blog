import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Featured Article */}
        <div className="lg:col-span-2">
          <Link href="/blog/15-shocking-business-trends-that-will-shock-markets">
            <Card className="relative overflow-hidden h-96 hover:shadow-lg transition-shadow cursor-pointer">
              <img
                src="/business-handshake-meeting-professional.jpg"
                alt="Business meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="inline-block bg-primary px-3 py-1 text-sm font-medium rounded mb-3">Business</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance text-white">
                  15 Shocking Business Trends That Will Shock Markets
                </h2>
                <p className="text-white/90 mb-4 text-pretty">
                  Discover the revolutionary trends that are reshaping the business landscape and creating unprecedented
                  opportunities for growth.
                </p>
                <Button variant="secondary" size="sm">
                  Read More
                </Button>
              </div>
            </Card>
          </Link>
        </div>

        {/* Side Articles */}
        <div className="space-y-4">
          <Card className="p-4">
            <div className="flex gap-4">
              <img src="/stock-market-charts.jpg" alt="Stock market" className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-2 text-balance">
                  Stock Market Hits Record High as Tech Stocks Surge
                </h3>
                <p className="text-xs text-muted-foreground mb-2">Technology • 2 hours ago</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex gap-4">
              <img
                src="/business-meeting-office.png"
                alt="Business meeting"
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-2 text-balance">
                  Breaking: New Trade Deal Announced Between Major Economies
                </h3>
                <p className="text-xs text-muted-foreground mb-2">Politics • 4 hours ago</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex gap-4">
              <img src="/bitcoin-concept.png" alt="Cryptocurrency" className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-2 text-balance">
                  Cryptocurrency Market Shows Signs of Recovery
                </h3>
                <p className="text-xs text-muted-foreground mb-2">Finance • 6 hours ago</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex gap-4">
              <img
                src="/renewable-energy-solar-panels.png"
                alt="Renewable energy"
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-2 text-balance">
                  Green Energy Investments Reach All-Time High
                </h3>
                <p className="text-xs text-muted-foreground mb-2">Environment • 8 hours ago</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
