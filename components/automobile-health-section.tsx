import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AutomobileHealthSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Automobile Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Automobile</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="overflow-hidden">
              <img src="/luxury-car-automobile-road.jpg" alt="Luxury automobile" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2 text-balance">
                  Automobile: All the Stats, Facts, and Data You'll Ever Need to Know
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Comprehensive analysis of the automotive industry trends and statistics.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Automobile</span>
                  <span>•</span>
                  <span>2 hours ago</span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex gap-4">
                <img src="/electric-car-charging-station.png" alt="Electric car" className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2 text-balance">
                    How Millennials Are Disrupting the Automobile Industry
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">Automobile • 4 hours ago</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex gap-4">
                <img src="/autonomous-self-driving-car.jpg" alt="Autonomous car" className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2 text-balance">
                    7 Answers to the Most Frequently Asked Questions About Automobile
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">Technology • 6 hours ago</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Health Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Health</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="bg-yellow-400 p-8 text-center">
                <h3 className="text-3xl font-bold text-black mb-2">HEALTH</h3>
                <p className="text-black/80">Your wellness journey starts here</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 text-balance">The Top 5 Traits Health Care Here to Common</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Essential characteristics that define quality healthcare services.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Health</span>
                  <span>•</span>
                  <span>1 hour ago</span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex gap-4">
                <img src="/healthy-food-nutrition.png" alt="Healthy food" className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2 text-balance">
                    The Most Beloved Health Products, According to Customers
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">Health • 3 hours ago</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex gap-4">
                <img src="/fitness-exercise-workout.jpg" alt="Fitness" className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2 text-balance">
                    15 Unquestionable Reasons to Love Health Care
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">Wellness • 5 hours ago</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
