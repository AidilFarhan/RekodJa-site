import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Button } from "../components/ui/button";
import { Menu, X, Chrome, Sparkles, Globe } from "lucide-react";
import { BrandLogo } from "../components/BrandText";

interface HeaderImprovedProps {
  onOpenLegal: (type: "privacy" | "terms") => void;
}

export function HeaderImproved({ onOpenLegal }: HeaderImprovedProps) {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.demo, href: "#demo" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.webApp, href: "#web-app" },
    { label: t.nav.whyRekodJa, href: "#why-rekodja" },
    { label: t.nav.security, href: "#security" },
    { label: t.nav.faq, href: "#faq" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <a href="#top" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary rounded">
              <BrandLogo />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium text-muted-foreground">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Action CTAs & Language Switcher */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher Pill */}
            <div className="flex items-center rounded-lg border bg-muted/60 p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage("bm")}
                className={`px-2 py-1 rounded-md transition-all ${
                  language === "bm"
                    ? "bg-white dark:bg-slate-800 text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Tukar ke Bahasa Melayu"
              >
                🇲🇾 BM
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded-md transition-all ${
                  language === "en"
                    ? "bg-white dark:bg-slate-800 text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Switch to English"
              >
                🇬🇧 EN
              </button>
            </div>

            {/* Install Button */}
            <Button
              asChild
              className="bg-[#14213d] hover:bg-[#1e2f54] text-white shadow-sm font-semibold transition-all text-xs sm:text-sm"
            >
              <a
                href="https://chromewebstore.google.com/detail/job-tracker-quick-add/plkhmignapibfhoppbkebpndckjbjpmg?authuser=0&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Chrome className="h-4 w-4 text-emerald-400" />
                <span>{t.nav.cta}</span>
              </a>
            </Button>

            {/* Accessible Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-b bg-background px-4 py-5 shadow-lg space-y-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLegal("privacy");
                  }}
                  className="text-left px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  {t.nav.privacyPolicy}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLegal("terms");
                  }}
                  className="text-left px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  {t.nav.termsOfService}
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
