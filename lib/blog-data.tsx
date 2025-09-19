// lib/blog-data.ts

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "what-your-relationship-with-stock-market-says-about-you",
    title: "What Your Relationship With Stock Market Says About You",
    excerpt: "Understanding your investment psychology and how it reflects your personality traits.",
    content: `
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Understanding Your Investment Psychology</h2>
        <p class="text-gray-700 mb-4">Your relationship with the stock market reveals more about your personality than you might think...</p>
      </div>
    `,
    category: "Stock Market",
    author: "Sarah Johnson",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    image: "/business-handshake-meeting-professional.jpg",
  },
  {
    id: "2",
    slug: "how-i-learned-to-stop-worrying-and-love-stock-market",
    title: "How I Learned to Stop Worrying and Love Stock Market",
    excerpt: "A personal journey from market anxiety to confident investing Strategies.",
    content: `
      <div class="bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold text-blue-700 mb-3">My Journey from Fear to Confidence</h2>
        <p class="text-gray-700 mb-4">Five years ago, the mere mention of the stock market would send my anxiety levels through the roof...</p>

        <h3 class="text-lg font-semibold mt-4 mb-2 text-blue-600">The Beginning: Paralysis by Analysis</h3>
        <p class="text-gray-700 mb-3">Like many beginners, I started by consuming every piece of financial content I could find...</p>

        <h3 class="text-lg font-semibold mt-4 mb-2 text-blue-600">The Turning Point: Starting Small</h3>
        <p class="text-gray-700 mb-3">The breakthrough came when I decided to start with just $100...</p>

        <h3 class="text-lg font-semibold mt-4 mb-2 text-blue-600">Building Confidence Through Experience</h3>
        <p class="text-gray-700 mb-3">Over the following months, I gradually increased my investments...</p>

        <h3 class="text-lg font-semibold mt-4 mb-2 text-blue-600">The Love Affair Begins</h3>
        <p class="text-gray-700">What started as fear gradually transformed into fascination, then into genuine love for the market...</p>
      </div>
    `,
    category: "Investment",
    author: "Michael Chen",
    publishedAt: "2024-01-14",
    readTime: "7 min read",
    image: "/stock-market-trading-floor.png",
  },
  {
    id: "3",
    slug: "15-shocking-business-trends-that-will-shock-markets",
    title: "15 Shocking Business Trends That Will Shock Markets",
    excerpt: "Discover the emerging trends that are set to revolutionize business and create new market opportunities.",
    content: `
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">The Future of Business is Here</h2>
        <p class="text-gray-700 mb-4">The business landscape is evolving at an unprecedented pace...</p>

        <h3 class="text-lg font-semibold mt-4 mb-2 text-blue-600">1. AI-Powered Decision Making</h3>
        <p class="text-gray-700 mb-3">Companies are using AI to analyze market trends, predict consumer behavior, and optimize operations in real-time.</p>

        <h3 class="text-lg font-semibold mt-4 mb-2 text-blue-600">2. Remote-First Company Culture</h3>
        <p class="text-gray-700 mb-3">The pandemic accelerated a trend that's here to stay...</p>

        <h3 class="text-lg font-semibold mt-4 mb-2 text-blue-600">3. Sustainable Business Models</h3>
        <p class="text-gray-700 mb-3">Environmental consciousness is driving new business models...</p>
      </div>
    `,
    category: "Business Trends",
    author: "Sarib Khan",
    publishedAt: "2025-09-18",
    readTime: "5 min read",
    image: "/naruto.jpg",
  },
  {
    id: "4",
    slug: "latest-tech-innovations-2025",
    title: "Latest Tech Innovations of 2025",
    excerpt: "Discover the cutting-edge technologies shaping our future.",
    content: `
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Latest Tech Innovations</h2>
        <p class="text-gray-700 mb-4">From AI to quantum computing, these innovations are revolutionizing industries...</p>
      </div>
    `,
    category: "Technology",
    author: "Ali Raza",
    publishedAt: "2025-09-10",
    readTime: "6 min read",
    image: "/Sasuke.jpg",
  },
  {
    id: "5",
    slug: "green-energy-revolution",
    title: "Green Energy Revolution: Opportunities Ahead",
    excerpt: "How sustainable energy is transforming industries.",
    content: `
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Green Energy Revolution</h2>
        <p class="text-gray-700 mb-4">Sustainable energy is reshaping the global economy and opening new business avenues...</p>
      </div>
    `,
    category: "Environment",
    author: "Sara Ahmed",
    publishedAt: "2025-09-12",
    readTime: "7 min read",
    image: "/sakura.jpg",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}
