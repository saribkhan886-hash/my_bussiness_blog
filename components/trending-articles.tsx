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
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">🔥 Trending Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <Card
            key={index}
            className="overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 rounded-xl bg-white dark:bg-neutral-900"
          >
            <div className="relative w-full h-40">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {article.category}
              </span>
            </div>

            <div className="p-4 flex flex-col gap-3">
              <h3 className="font-semibold text-lg leading-snug hover:text-blue-600 transition-colors cursor-pointer">
                {article.title}
              </h3>

              <div className="flex items-center text-xs text-muted-foreground">
                <span>{article.time}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
