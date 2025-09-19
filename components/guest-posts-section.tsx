import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function GuestPostsSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Guest Posts</h2>
        <Button variant="outline" size="sm" className="hover:bg-gray-100 transition">
          View All
        </Button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition relative group">
          <div className="overflow-hidden">
            <img
              src="/business-meeting-collaboration.png"
              alt="Business collaboration"
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-blue-600 transition">
              How to Make Your Business More Successful
            </h3>
            <p className="text-gray-600 mb-4">
              Expert strategies and proven methods to accelerate your business growth and achieve sustainable success.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Guest Post</span>
              <span>•</span>
              <span>1 hour ago</span>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition relative group">
          <div className="overflow-hidden">
            <img
              src="/digital-marketing-online-business.jpg"
              alt="Digital marketing"
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-blue-600 transition">
              The Check-IT Copywriting Secrets That Will Transform Your Business
            </h3>
            <p className="text-gray-600 mb-4">
              Discover powerful copywriting techniques that convert visitors into customers and boost your revenue.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Marketing</span>
              <span>•</span>
              <span>3 hours ago</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Newsletter / Guest Author */}
      <Card className="mt-10 p-8 text-center shadow-lg hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Your posts will be the next
        </h3>
        <p className="text-gray-600 mb-4">
          Join our community of guest writers and share your expertise with our audience
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition duration-300">
          Be a Guest Author
        </Button>
      </Card>
    </section>
  )
}
