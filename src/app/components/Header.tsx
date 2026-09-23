import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">R</span>
            </div>
            <span className="font-semibold">RekodJa</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="https://app.rekodja.com" className="text-muted-foreground hover:text-foreground transition-colors">
              Web App
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button asChild>
            <a href="https://chromewebstore.google.com" target="_blank" rel="noopener noreferrer">
              Add to Chrome
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}