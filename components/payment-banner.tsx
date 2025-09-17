import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function PaymentBanner() {
  return (
    <section className="container mx-auto px-4 py-8">
      <Card className="bg-primary text-primary-foreground p-8 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Payment made simple</h2>
              <p className="text-primary-foreground/90 mb-4">
                Streamline your business transactions with our advanced payment solutions
              </p>
              <Button variant="secondary" size="lg">
                Get Started
              </Button>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
      </Card>
    </section>
  )
}
