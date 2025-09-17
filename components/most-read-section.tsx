import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MostReadSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Most Read</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="overflow-hidden">
          <img src="/stock-market-newspaper-business.jpg" alt="Business news" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold mb-2 text-balance">The Incredible Stock Market Predictions That Came True</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Looking back at the most accurate market predictions and what we can learn from them.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Stock Market</span>
              <span>•</span>
              <span>1 day ago</span>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <img src="/city-skyline-business-district.jpg" alt="City skyline" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold mb-2 text-balance">How to Master the Art of Business in 6 Simple Steps</h3>
            <p className="text-sm text-muted-foreground mb-3">
              A comprehensive guide to building and scaling successful business ventures.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Business</span>
              <span>•</span>
              <span>2 days ago</span>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex gap-3">
              <img src="/professional-business-meeting.png" alt="Business meeting" className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-1 text-balance">
                  A Guide to Master the Art of Business in 6 Simple Steps
                </h3>
                <p className="text-xs text-muted-foreground">Business • 3 days ago</p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src="/technology-innovation.jpg" alt="Technology" className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-1 text-balance">
                  10 Habits Trends That Will Shape Technology in 2024
                </h3>
                <p className="text-xs text-muted-foreground">Technology • 4 days ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
