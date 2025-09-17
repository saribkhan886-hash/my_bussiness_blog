import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground">BUSINESSLY</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Stock Market
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Technology
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Politics
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Automobile
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Health
            </a>
          </nav>

          {/* Search and Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
