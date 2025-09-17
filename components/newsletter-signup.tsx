import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSignup() {
  return (
    <section className="container mx-auto px-4 py-8">
      <Card className="p-8 text-center border-2 border-dashed border-border">
        <div className="flex items-center justify-center mb-4">
          <Mail className="h-8 w-8 text-primary mr-3" />
          <h2 className="text-2xl font-bold">Sign up for our newsletters</h2>
        </div>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Stay updated with the latest business news, market insights, and exclusive content delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email address" className="flex-1" />
          <Button type="submit" className="sm:w-auto">
            Subscribe
          </Button>
        </div>
      </Card>
    </section>
  )
}
