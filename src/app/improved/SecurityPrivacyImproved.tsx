import React from "react";
import { useLanguage } from "./LanguageContext";
import { ShieldCheck, ServerOff, KeyRound, Lock, EyeOff } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

export function SecurityPrivacyImproved({ onOpenPrivacy }: { onOpenPrivacy: () => void }) {
  const { t } = useLanguage();

  const pillarIcons = [ServerOff, KeyRound, EyeOff];

  return (
    <section id="privacy" className="py-20 bg-muted/20 border-b scroll-mt-12">
      <div id="security" className="scroll-mt-12"></div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.security.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t.security.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">
            {t.security.subhead}
          </p>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-card border shadow-xs">
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold text-center mb-6">
            {t.security.flowTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center">
            {/* Box 1 */}
            <div className="p-4 rounded-xl bg-muted/60 border">
              <div className="text-xs font-bold text-foreground mb-1">{t.security.flowStep1Title}</div>
              <div className="text-[11px] text-muted-foreground">
                {t.security.flowStep1Desc}
              </div>
            </div>

            {/* Direct Pipe */}
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center justify-center gap-1">
                <Lock className="w-3.5 h-3.5" />
                <span>{t.security.flowStep2Title}</span>
              </div>
              <div className="text-[11px] text-emerald-700/80 dark:text-emerald-400">
                {t.security.flowStep2Desc}
              </div>
            </div>

            {/* Box 3 */}
            <div className="p-4 rounded-xl bg-muted/60 border">
              <div className="text-xs font-bold text-foreground mb-1">{t.security.flowStep3Title}</div>
              <div className="text-[11px] text-muted-foreground">
                {t.security.flowStep3Desc}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {t.security.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx];
            return (
              <Card key={idx} className="bg-card border">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base font-semibold">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="text-xs font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
          >
            {t.security.readFullPolicy}
          </button>
        </div>
      </div>
    </section>
  );
}
