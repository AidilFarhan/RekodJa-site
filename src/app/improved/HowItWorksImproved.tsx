import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Chrome, Sheet, Briefcase, MousePointerClick, ArrowRight, Copy, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import step1Image from "../../imports/how-step-1.png";
import jobstreetImage from "../../imports/image.png";
import step5Image from "../../imports/how-step-5.png";

export function HowItWorksImproved() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [copiedSheetId, setCopiedSheetId] = useState(false);

  const stepsData = t.howItWorks.steps;
  const icons = [Chrome, Sheet, Briefcase, MousePointerClick];
  const stepImages = [step1Image, null, jobstreetImage, step5Image];

  const current = stepsData[activeStep];
  const currentImage = stepImages[activeStep];

  const handleCopyExample = () => {
    navigator.clipboard.writeText("1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms");
    setCopiedSheetId(true);
    setTimeout(() => setCopiedSheetId(false), 2000);
  };

  return (
    <section id="how-it-works" className="py-20 bg-muted/30 border-b">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-semibold mb-3">
            {t.howItWorks.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t.howItWorks.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">
            {t.howItWorks.subhead}
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {stepsData.map((step, index) => {
              const isActive = activeStep === index;
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveStep(index);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-primary ${
                    isActive
                      ? "bg-card border-primary shadow-sm ring-1 ring-primary/20"
                      : "bg-card/50 border-border hover:bg-card hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#14213d] text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[11px] font-mono text-muted-foreground font-semibold">
                          {t.howItWorks.stepLabel} {step.number}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                          {step.badge}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {step.summary}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step Preview & Details (7 cols) */}
          <div className="lg:col-span-7 bg-card border rounded-2xl shadow-sm overflow-hidden p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-muted text-muted-foreground">
                {t.howItWorks.stepLabel} {current.number} {t.howItWorks.ofSteps}
              </span>
              <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                {t.howItWorks.readyBadge}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              {current.title}
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              {current.description}
            </p>

            {/* Custom Interactive Graphic for Step 2: Sheet ID Explanation */}
            {activeStep === 1 && (
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-900 text-slate-100 text-xs font-mono border border-slate-800 shadow-inner">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-2 font-sans font-semibold">
                    {t.howItWorks.sheetUrlTitle}
                  </div>
                  <div className="break-all leading-loose">
                    <span className="text-slate-400">https://docs.google.com/spreadsheets/d/</span>
                    <mark className="bg-emerald-500/30 text-emerald-300 px-1 py-0.5 rounded border border-emerald-500/50 font-bold">
                      1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms
                    </mark>
                    <span className="text-slate-400">/edit</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between gap-3 text-xs">
                  <div className="text-emerald-900 dark:text-emerald-300">
                    {t.howItWorks.sheetIdNotice}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleCopyExample}
                    className="flex-shrink-0 text-xs bg-white dark:bg-slate-900 border-emerald-300 text-emerald-800 dark:text-emerald-200"
                  >
                    {copiedSheetId ? <Check className="w-3.5 h-3.5 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                    <span>{copiedSheetId ? t.howItWorks.btnCopied : t.howItWorks.btnCopy}</span>
                  </Button>
                </div>
              </div>
            )}

            {/* Authentic Screenshot Display for Steps 0, 2, 3 */}
            {currentImage && (
              <div className="relative rounded-xl border overflow-hidden bg-muted/40 aspect-video flex items-center justify-center shadow-xs">
                <img
                  src={currentImage}
                  alt={current.title}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            )}

            <div className="mt-6 pt-4 border-t flex items-center justify-between text-xs text-muted-foreground">
              <span>{t.howItWorks.readyToStart}</span>
              <a
                href="https://chromewebstore.google.com/detail/job-tracker-quick-add/plkhmignapibfhoppbkebpndckjbjpmg?authuser=0&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline flex items-center gap-1"
              >
                <span>{t.howItWorks.installNow}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
