import React, { useState } from "react";
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
import { LegalModal } from "./improved/LegalModal";

function AppContent() {
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header with Comparison Switcher, Language Toggle, and working mobile menu */}
      <HeaderImproved onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroImproved />
        <LiveDemoImproved />
        <HowItWorksImproved />
        {/* Dedicated Web App Section */}
        <WebAppSectionImproved />
        <ComparisonImproved />
        <SecurityPrivacyImproved onOpenPrivacy={() => setLegalModalType("privacy")} />
        <FaqImproved />
      </main>

      {/* Footer with working legal modals */}
      <FooterImproved onOpenLegal={(type) => setLegalModalType(type)} />

      {/* In-page Accessible Legal Modal (Privacy & Terms) */}
      <LegalModal
        type={legalModalType}
        isOpen={legalModalType !== null}
        onClose={() => setLegalModalType(null)}
      />
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
