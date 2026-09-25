import React from "react";
import { useLanguage } from "./LanguageContext";
import { Button } from "../components/ui/button";
import { Chrome, Sparkles, Check } from "lucide-react";
import { RekodJa, GoogleSheet } from "../components/BrandText";

export function HeroImproved() {
  const { t } = useLanguage();

  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" });
  };

  const platforms = [
    { name: "LinkedIn", color: "text-[#0a66c2]" },
    { name: "JobStreet by SEEK", color: "text-blue-600" },
    { name: "Indeed", color: "text-indigo-600" },
    { name: "MauKerja", color: "text-amber-600" },
  ];

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-100/40 dark:bg-emerald-950/20 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium mb-6 border border-slate-200 dark:border-slate-700 shadow-xs">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{t.hero.announcement}</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-6">
          {t.hero.headlinePrefix}{" "}
          <span className="text-[#0f9d58] underline decoration-emerald-200 underline-offset-8">
            <GoogleSheet />
          </span>{" "}
          {t.hero.headlineSuffix}
        </h1>

        {/* Subhead / Value Prop */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-muted-foreground leading-relaxed mb-8">
          {t.hero.subhead}
        </p>

        {/* Trust Points */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-foreground/80 font-medium mb-10">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span>{t.hero.badgeClientSide}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span>{t.hero.badgeZeroServer}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span>{t.hero.badgeFree}</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto bg-[#14213d] hover:bg-[#1e2f54] text-white px-8 py-6 text-base font-semibold shadow-md transition-all"
          >
            <a
              href="https://chromewebstore.google.com/detail/job-tracker-quick-add/plkhmignapibfhoppbkebpndckjbjpmg?authuser=0&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5"
            >
              <Chrome className="h-5 w-5 text-emerald-400" />
              <span>{t.hero.ctaInstall}</span>
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={scrollToDemo}
            className="w-full sm:w-auto border-border px-6 py-6 text-base font-medium hover:bg-muted transition-all"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{t.hero.ctaDemo}</span>
            </span>
          </Button>
        </div>

        {/* Supported Platforms Strip */}
        <div className="pt-8 border-t border-border/80">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
            {t.hero.platformsLabel}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {platforms.map((p, idx) => (
              <div
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-card border shadow-2xs text-xs sm:text-sm font-semibold flex items-center gap-2"
              >
                <span className={`w-2 h-2 rounded-full bg-current ${p.color}`}></span>
                <span className="text-foreground">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
