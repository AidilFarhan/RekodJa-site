import React from "react";
import { useLanguage } from "./LanguageContext";
import { Check, Sparkles } from "lucide-react";

export function ComparisonImproved() {
  const { t } = useLanguage();

  return (
    <section id="why-rekodja" className="py-20 bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold mb-3">
            {t.comparison.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t.comparison.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">
            {t.comparison.subhead}
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden border rounded-2xl shadow-sm bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="py-4 px-4 sm:px-6 font-semibold text-foreground w-1/3">
                    {t.comparison.colFeature}
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-medium text-muted-foreground">
                    {t.comparison.colManual}
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-medium text-muted-foreground">
                    {t.comparison.colSaas}
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/40">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>{t.comparison.colRekodJa}</span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {t.comparison.items.map((item, idx) => (
                  <tr key={idx} className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-medium text-foreground">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-muted-foreground text-xs sm:text-sm">
                      {item.manual}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-muted-foreground text-xs sm:text-sm">
                      {item.saas}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-xs sm:text-sm text-emerald-900 dark:text-emerald-300 bg-emerald-50/40 dark:bg-emerald-950/20">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{item.rekodja}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
