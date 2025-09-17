import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function StockMarketSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Stock Market</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/blog/what-your-relationship-with-stock-market-says-about-you">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <img
              src="/business-meeting-handshake-professional.jpg"
              alt="Business relationship"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2 text-balance">
                What Your Relationship With Stock Market Says About You
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Understanding your investment psychology and how it reflects your personality traits.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Stock Market</span>
                <span>•</span>
                <span>2 hours ago</span>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/blog/how-i-learned-to-stop-worrying-and-love-stock-market">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <img src="/stock-market-trading-floor.png" alt="Stock trading" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold mb-2 text-balance">How I Learned to Stop Worrying and Love Stock Market</h3>
              <p className="text-sm text-muted-foreground mb-3">
                A personal journey from market anxiety to confident investing strategies.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Investment</span>
                <span>•</span>
                <span>4 hours ago</span>
              </div>
            </div>
          </Card>
        </Link>

        <Card className="overflow-hidden">
          <img src="/stock-market-analysis-charts.jpg" alt="Market analysis" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold mb-2 text-balance">Why Stock Market Affects Me So Personally</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Exploring the emotional connection between personal finance and market movements.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Psychology</span>
              <span>•</span>
              <span>6 hours ago</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
