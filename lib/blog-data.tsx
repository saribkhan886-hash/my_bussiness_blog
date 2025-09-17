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
      <h2>Understanding Your Investment Psychology</h2>
      <p>Your relationship with the stock market reveals more about your personality than you might think. The way you approach investing, handle market volatility, and make financial decisions provides deep insights into your psychological makeup.</p>
      
      <h3>The Risk-Taker vs. The Conservative</h3>
      <p>Some investors thrive on high-risk, high-reward scenarios, constantly seeking the next big opportunity. These individuals often display traits of optimism, confidence, and sometimes overconfidence. They're willing to bet big on their convictions and aren't easily swayed by short-term market fluctuations.</p>
      
      <p>On the other hand, conservative investors prefer steady, predictable returns. They value security over potential gains and often display traits of caution, analytical thinking, and long-term planning. These investors typically have a lower risk tolerance but also experience less stress during market downturns.</p>
      
      <h3>Emotional Intelligence in Trading</h3>
      <p>The stock market is as much about psychology as it is about numbers. Successful investors often possess high emotional intelligence, allowing them to:</p>
      <ul>
        <li>Remain calm during market volatility</li>
        <li>Make rational decisions despite fear or greed</li>
        <li>Learn from mistakes without letting emotions cloud judgment</li>
        <li>Maintain discipline in their investment strategy</li>
      </ul>
      
      <h3>The Social Aspect</h3>
      <p>How you discuss investments with others also reveals personality traits. Some investors are secretive about their portfolios, while others openly share their strategies and results. This behavior often correlates with broader social tendencies and communication styles.</p>
      
      <p>Understanding your investment psychology can help you make better financial decisions and develop strategies that align with your personality and risk tolerance.</p>
    `,
    category: "Stock Market",
    author: "Sarah Johnson",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    image: "/business-meeting-handshake-professional.jpg",
  },
  {
    id: "2",
    slug: "how-i-learned-to-stop-worrying-and-love-stock-market",
    title: "How I Learned to Stop Worrying and Love Stock Market",
    excerpt: "A personal journey from market anxiety to confident investing strategies.",
    content: `
      <h2>My Journey from Fear to Confidence</h2>
      <p>Five years ago, the mere mention of the stock market would send my anxiety levels through the roof. The thought of potentially losing my hard-earned money kept me awake at night. Today, I'm writing this article as someone who has not only overcome that fear but has learned to embrace the opportunities the market provides.</p>
      
      <h3>The Beginning: Paralysis by Analysis</h3>
      <p>Like many beginners, I started by consuming every piece of financial content I could find. YouTube videos, podcasts, books, forums – I absorbed it all. But instead of building confidence, this information overload created more confusion and fear.</p>
      
      <p>I was suffering from what I now recognize as "paralysis by analysis." The more I learned about different strategies, market crashes, and success stories, the more overwhelmed I became. Every expert seemed to contradict another, and I couldn't decide which approach was right for me.</p>
      
      <h3>The Turning Point: Starting Small</h3>
      <p>The breakthrough came when I decided to start with just $100. Instead of waiting until I had the "perfect" strategy or enough money to make it "worthwhile," I opened a brokerage account and bought my first stock.</p>
      
      <p>That first investment taught me more than months of research ever could. I learned how it felt to see my money fluctuate, how to read my account statements, and most importantly, that the world didn't end when my stock went down 5%.</p>
      
      <h3>Building Confidence Through Experience</h3>
      <p>Over the following months, I gradually increased my investments. Each experience – both gains and losses – built my confidence and understanding. I learned to:</p>
      <ul>
        <li>Separate emotions from investment decisions</li>
        <li>Focus on long-term trends rather than daily fluctuations</li>
        <li>Diversify my portfolio to reduce risk</li>
        <li>Set realistic expectations for returns</li>
      </ul>
      
      <h3>The Love Affair Begins</h3>
      <p>What started as fear gradually transformed into fascination, then into genuine love for the market. I began to appreciate the market as a reflection of human innovation, economic growth, and collective optimism about the future.</p>
      
      <p>Today, I view my investment portfolio not just as a path to financial freedom, but as a way to participate in the growth of companies and industries I believe in. The stock market has become a tool for building wealth while supporting the businesses that shape our world.</p>
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
      <h2>The Future of Business is Here</h2>
      <p>The business landscape is evolving at an unprecedented pace. From artificial intelligence to sustainable practices, new trends are emerging that will fundamentally reshape how companies operate and compete. Here are 15 trends that will shock the markets in the coming years.</p>
      
      <h3>1. AI-Powered Decision Making</h3>
      <p>Artificial intelligence is moving beyond automation to become a strategic decision-making partner. Companies are using AI to analyze market trends, predict consumer behavior, and optimize operations in real-time.</p>
      
      <h3>2. Remote-First Company Culture</h3>
      <p>The pandemic accelerated a trend that's here to stay. Companies are discovering that remote-first cultures can increase productivity, reduce costs, and access global talent pools.</p>
      
      <h3>3. Sustainable Business Models</h3>
      <p>Environmental consciousness is driving new business models. Companies that prioritize sustainability are not only meeting consumer demands but also discovering new revenue streams.</p>
      
      <h3>4. Subscription Everything</h3>
      <p>From software to cars to coffee, the subscription model is transforming industries. This trend provides predictable revenue streams and deeper customer relationships.</p>
      
      <h3>5. Blockchain Beyond Cryptocurrency</h3>
      <p>While crypto gets the headlines, blockchain technology is revolutionizing supply chain management, digital identity verification, and contract execution.</p>
      
      <h3>6. Personalization at Scale</h3>
      <p>Advanced analytics and AI are enabling companies to provide personalized experiences to millions of customers simultaneously, creating unprecedented customer loyalty.</p>
      
      <h3>7. Voice Commerce Revolution</h3>
      <p>Voice assistants are becoming shopping platforms. Companies are optimizing for voice search and developing voice-first customer experiences.</p>
      
      <h3>8. Micro-Mobility Solutions</h3>
      <p>Electric scooters, bikes, and other micro-mobility options are creating new urban transportation ecosystems and business opportunities.</p>
      
      <h3>9. Mental Health as a Business Priority</h3>
      <p>Companies are recognizing that employee mental health directly impacts productivity and profitability, leading to significant investments in wellness programs.</p>
      
      <h3>10. Augmented Reality Shopping</h3>
      <p>AR technology is bridging the gap between online and offline shopping, allowing customers to visualize products in their own space before purchasing.</p>
      
      <p>These trends represent just the beginning of a massive transformation in how business is conducted. Companies that adapt early will have significant competitive advantages in the markets of tomorrow.</p>
    `,
    category: "Business Trends",
    author: "Emma Rodriguez",
    publishedAt: "2024-01-16",
    readTime: "8 min read",
    image: "/business-trends-meeting.jpg",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}
