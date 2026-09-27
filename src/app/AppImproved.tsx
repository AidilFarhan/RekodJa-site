import React from "react";
import { LanguageProvider } from "./improved/LanguageContext";
import { HeaderImproved } from "./improved/HeaderImproved";
import { HeroImproved } from "./improved/HeroImproved";
import { LiveDemoImproved } from "./improved/LiveDemoImproved";
import { HowItWorksImproved } from "./improved/HowItWorksImproved";
import { WebAppSectionImproved } from "./improved/WebAppSectionImproved";
import { ComparisonImproved } from "./improved/ComparisonImproved";
import { SecurityPrivacyImproved } from "./improved/SecurityPrivacyImproved";
import { FaqImproved } from "./improved/FaqImproved";
import { FooterImproved } from "./improved/FooterImproved";

function AppContent() {

  return (
    <div id="top" className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header with Comparison Switcher, Language Toggle, and working mobile menu */}
      <HeaderImproved onOpenLegal={(type) => window.location.assign(`/${type}/`)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroImproved />
        <LiveDemoImproved />
        <HowItWorksImproved />
        {/* Dedicated Web App Section */}
        <WebAppSectionImproved />
        <ComparisonImproved />
        <SecurityPrivacyImproved onOpenPrivacy={() => window.location.assign("/privacy/")} />
        <FaqImproved />
      </main>

      {/* Footer with public legal links */}
      <FooterImproved />

    </div>
  );
}

export default function AppImproved() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
