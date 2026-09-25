import React from "react";
import { useLanguage } from "./LanguageContext";
import { BrandLogo, RekodJa, GoogleSheet } from "../components/BrandText";
import { Chrome, ExternalLink, ShieldCheck } from "lucide-react";
import { Separator } from "../components/ui/separator";

interface FooterImprovedProps {
  onOpenLegal: (type: "privacy" | "terms") => void;
}

export function FooterImproved({ onOpenLegal }: FooterImprovedProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2 bg-white/95 p-2 rounded-lg inline-block w-fit">
              <BrandLogo />
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-3 py-1.5 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.footer.badge}</span>
            </div>
          </div>

          {/* Links: Produk */}
          <div>
            <h4 className="font-semibold text-sm text-slate-100 mb-4 uppercase tracking-wider">
              {t.footer.product}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://chromewebstore.google.com/detail/job-tracker-quick-add/plkhmignapibfhoppbkebpndckjbjpmg?authuser=0&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Chrome className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.footer.chromeStore}</span>
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.interactiveSimulator}
                </a>
              </li>
              <li>
                <a
                  href="https://app.rekodja.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>{t.footer.webApp}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Undang-Undang & Privasi */}
          <div>
            <h4 className="font-semibold text-sm text-slate-100 mb-4 uppercase tracking-wider">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal("privacy")}
                  className="hover:text-white text-left transition-colors"
                >
                  {t.footer.privacyPolicy}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal("terms")}
                  className="hover:text-white text-left transition-colors"
                >
                  {t.footer.termsOfService}
                </button>
              </li>
              <li>
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 text-xs text-slate-400"
                >
                  <span>{t.footer.googlePermissions}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            {t.footer.copyright}
          </p>
          <p className="text-slate-400">
            {t.footer.madeFor}
          </p>
        </div>
      </div>
    </footer>
  );
}
