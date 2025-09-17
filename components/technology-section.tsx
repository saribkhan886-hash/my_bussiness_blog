import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TechnologySection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Latest Technology</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <img src="/artificial-intelligence-technology-digital.jpg" alt="AI Technology" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-balance">The Only AI Technology Guide You Will Ever Need</h3>
            <p className="text-muted-foreground mb-4">
              Comprehensive guide covering everything from machine learning basics to advanced AI applications in
              business.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Technology</span>
              <span>•</span>
              <span>3 hours ago</span>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <img src="/blockchain-cryptocurrency-technology.jpg" alt="Blockchain Technology" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-balance">
              Why Blockchain is the Future of Digital Transactions
            </h3>
            <p className="text-muted-foreground mb-4">
              Exploring how blockchain technology is revolutionizing financial systems and creating new opportunities.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Blockchain</span>
              <span>•</span>
              <span>5 hours ago</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
