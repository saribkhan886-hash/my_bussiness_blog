import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PoliticsSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Politics</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="overflow-hidden">
          <img src="/political-campaign-rally-crowd.jpg" alt="Political campaign" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold mb-2 text-balance">
              The Rise, Conflict, and Reason: Emerging Trends in Politics
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Analyzing the current political landscape and emerging trends shaping democracy.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Politics</span>
              <span>•</span>
              <span>1 hour ago</span>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <img src="/government-building-politics.jpg" alt="Government building" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold mb-2 text-balance">What Politics Says About Your Personal Style</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How political preferences reflect individual values and lifestyle choices.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Analysis</span>
              <span>•</span>
              <span>3 hours ago</span>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <img src="/political-debate-discussion.jpg" alt="Political debate" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold mb-2 text-balance">5 Surprising Ways Politics Can Affect Your Health</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Research reveals unexpected connections between political engagement and wellbeing.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Health</span>
              <span>•</span>
              <span>5 hours ago</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
