import { Card } from "@/components/ui/card"

export function TrendingArticles() {
  const articles = [
    {
      title: "The Frightening Effect of AI on the Stock Market",
      category: "Technology",
      time: "2 hours ago",
      image: "/ai-artificial-intelligence-technology.jpg",
    },
    {
      title: "How Climate Change is Affecting the Stock Market",
      category: "Environment",
      time: "4 hours ago",
      image: "/climate-change-environment.png",
    },
    {
      title: "Best Stock Picks for the Next Quarter",
      category: "Finance",
      time: "6 hours ago",
      image: "/stock-market-investment.png",
    },
    {
      title: "The Rise of Remote Work Culture",
      category: "Business",
      time: "8 hours ago",
      image: "/remote-work-home-office.png",
    },
    {
      title: "Cryptocurrency Regulations Around the World",
      category: "Finance",
      time: "10 hours ago",
      image: "/cryptocurrency-regulation.png",
    },
    {
      title: "Sustainable Business Practices on the Rise",
      category: "Environment",
      time: "12 hours ago",
      image: "/sustainable-business-green.png",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex gap-3">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-2 text-balance leading-tight">{article.title}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.time}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
