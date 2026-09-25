import React from "react";
import { useLanguage } from "./LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FaqImproved() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t.faq.title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {t.faq.subhead}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {t.faq.items.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-xl px-4 bg-card/60 shadow-2xs"
            >
              <AccordionTrigger className="text-left font-semibold text-sm sm:text-base py-4 hover:no-underline hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
