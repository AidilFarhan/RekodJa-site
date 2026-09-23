import { Button } from "./ui/button";
import { RekodJa, GoogleSheet } from "./BrandText";
import { Badge } from "./ui/badge";
import { ArrowRight, Chrome } from "lucide-react";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const cards = scene.querySelectorAll(".floating-card");

    const animateCards = () => {
      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        const time = Date.now() * 0.001;
        const offset = index * 0.5;

        const x = Math.sin(time + offset) * 30;
        const y = Math.cos(time + offset * 1.2) * 20;
        const rotateX = Math.sin(time + offset) * 10;
        const rotateY = Math.cos(time + offset * 0.8) * 15;

        element.style.transform = `
          translate3d(${x}px, ${y}px, 0)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
      });

      requestAnimationFrame(animateCards);
    };

    animateCards();
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6">
          🗂️ Your job search, finally organized
        </Badge>
        <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6">
          Save job postings to{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            your <GoogleSheet />
          </span>{" "}
          instantly
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
          <RekodJa /> is a Chrome extension that captures job listings from LinkedIn, JobStreet,
          and Indeed directly into your own <GoogleSheet /> — no servers, no middlemen, your data stays yours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a href="https://chromewebstore.google.com/detail/job-tracker-quick-add/plkhmignapibfhoppbkebpndckjbjpmg?authuser=0&hl=en" target="_blank" rel="noopener noreferrer">
              <Chrome className="mr-2 h-4 w-4" />
              Add to Chrome — It's Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <a href="https://app.rekodja.com" target="_blank" rel="noopener noreferrer">
              Open Web App
            </a>
          </Button>
        </div>

        {/* 3D Graphics Scene */}
        <div className="relative mx-auto max-w-5xl h-96 lg:h-[500px]">
          <div
            ref={sceneRef}
            className="relative w-full h-full"
            style={{ perspective: "1000px" }}
          >
            {/* Central Hub — Google Sheets icon */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl shadow-2xl flex items-center justify-center z-10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-9 h-9 fill-green-600">
                  <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 3h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm-4-8h2v2H8V6zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm8 2h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2z" />
                </svg>
              </div>
            </div>

            {/* Job Listing Card — LinkedIn */}
            <div className="floating-card absolute top-12 left-16 w-48 h-28 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-5 h-5 bg-blue-600 rounded"></div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
              </div>
              <div className="h-3 bg-foreground/80 rounded w-32 mb-1"></div>
              <div className="h-2 bg-muted rounded w-24 mb-1"></div>
              <div className="h-2 bg-muted rounded w-20"></div>
            </div>

            {/* Status Tracker Card */}
            <div className="floating-card absolute top-28 right-12 w-40 h-32 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-3">Status</div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="text-xs">Applied</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="text-xs">Interview</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="text-xs">Offer</div>
                </div>
              </div>
            </div>

            {/* Saved Confirmation Card */}
            <div className="floating-card absolute bottom-16 left-8 w-44 h-20 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
                    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </div>
                <div className="text-xs font-medium text-green-700 dark:text-green-400">Saved to tracker!</div>
              </div>
              <div className="mt-2 h-2 bg-green-200 dark:bg-green-800 rounded w-28"></div>
            </div>

            {/* Job Details Card — Indeed */}
            <div className="floating-card absolute bottom-20 right-16 w-44 h-36 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-5 h-5 bg-indigo-600 rounded"></div>
                <div className="text-xs text-muted-foreground">Indeed</div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-foreground/80 rounded w-28"></div>
                <div className="h-2 bg-muted rounded w-20"></div>
                <div className="h-2 bg-muted rounded w-24"></div>
                <div className="h-2 bg-primary/40 rounded w-16"></div>
              </div>
            </div>

            {/* Date Applied Card */}
            <div className="floating-card absolute top-16 right-40 w-32 h-24 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">Date Applied</div>
              <div className="text-sm font-medium">Sep 23</div>
              <div className="mt-2 h-2 bg-muted rounded w-full"></div>
              <div className="mt-1 h-2 bg-muted rounded w-3/4"></div>
            </div>

            {/* Chrome Extension Popup */}
            <div className="floating-card absolute bottom-28 left-36 w-36 h-24 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2"><RekodJa /></div>
              <div className="h-2 bg-muted rounded w-full mb-1"></div>
              <div className="h-2 bg-muted rounded w-5/6 mb-3"></div>
              <div className="h-5 bg-primary rounded w-full"></div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
              <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
              <line x1="50%" y1="50%" x2="15%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: "1s" }} />
              <line x1="50%" y1="50%" x2="78%" y2="78%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: "1.5s" }} />
            </svg>

            {/* Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
                  style={{
                    left: `${(i * 37 + 13) % 100}%`,
                    top: `${(i * 53 + 7) % 100}%`,
                    animationDelay: `${(i * 0.3) % 3}s`,
                    animationDuration: `${2 + (i % 3)}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
