import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function GuestPostsSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Guest Posts</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <img src="/business-meeting-collaboration.png" alt="Business collaboration" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-balance">How to Make Your Business More Successful</h3>
            <p className="text-muted-foreground mb-4">
              Expert strategies and proven methods to accelerate your business growth and achieve sustainable success.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Guest Post</span>
              <span>•</span>
              <span>1 hour ago</span>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <img src="/digital-marketing-online-business.jpg" alt="Digital marketing" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-balance">
              The Check-IT Copywriting Secrets That Will Transform Your Business
            </h3>
            <p className="text-muted-foreground mb-4">
              Discover powerful copywriting techniques that convert visitors into customers and boost your revenue.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Marketing</span>
              <span>•</span>
              <span>3 hours ago</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Newsletter Signup */}
      <Card className="mt-8 p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Your posts will be the next</h3>
        <p className="text-muted-foreground mb-4">
          Join our community of guest writers and share your expertise with our audience
        </p>
        <Button>Be a Guest Author</Button>
      </Card>
    </section>
  )
}
