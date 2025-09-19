import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSignup() {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="p-10 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl">
        <div className="flex flex-col items-center mb-6">
          <Mail className="h-10 w-10 mb-3 text-yellow-300" />
          <h2 className="text-3xl font-extrabold tracking-tight">
            Sign Up For Our Newsletters
          </h2>
        </div>

        <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">
          Get the latest <span className="font-semibold">business headlines</span>, 
          <span className="font-semibold"> market insights</span>, and 
          <span className="font-semibold"> exclusive analysis</span> straight to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg px-4 py-3 text-white"
          />
          <Button
            type="submit"
            className="sm:w-auto px-6 py-3 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition"
          >
            Subscribe
          </Button>
        </div>

        <p className="mt-6 text-sm opacity-80">
          No spam. Unsubscribe anytime.
        </p>
      </Card>
    </section>
  )
}
