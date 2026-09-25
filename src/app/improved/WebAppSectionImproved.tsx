import React, { useState, useMemo } from "react";
import { useLanguage } from "./LanguageContext";
import { Button } from "../components/ui/button";
import {
  ExternalLink,
  Kanban,
  BellRing,
  MailCheck,
  TrendingUp,
  Sparkles,
  RefreshCw,
  Bell,
  Sun,
  Menu,
  CheckCircle2,
  Search,
  Filter,
  ArrowUpDown,
  Mail
} from "lucide-react";

type DashboardView = "overview" | "applications" | "actions" | "analytics";

export function WebAppSectionImproved() {
  const { t, language } = useLanguage();
  const [currentView, setCurrentView] = useState<DashboardView>("overview");
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncedJustNow, setSyncedJustNow] = useState(false);
  const [followUpModalJob, setFollowUpModalJob] = useState<string | null>(null);

  // Applications view state
  const [appSearch, setAppSearch] = useState("");
  const [appStageFilter, setAppStageFilter] = useState("All statuses");
  const [appSourceFilter, setAppSourceFilter] = useState("All sources");

  // Actions view state
  const [actionTab, setActionTab] = useState<"All" | "Follow-ups" | "Needs Review" | "Unmatched">("All");

  const handleSync = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setSyncedJustNow(false);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncedJustNow(true);
      setTimeout(() => setSyncedJustNow(false), 3000);
    }, 800);
  };

  const currentDateFormatted = new Intl.DateTimeFormat(
    language === "bm" ? "ms-MY" : "en-GB",
    { weekday: "long", day: "numeric", month: "long", year: "numeric" }
  ).format(new Date());

  // URL display depending on view
  const currentUrl = useMemo(() => {
    switch (currentView) {
      case "overview":
        return "https://app.rekodja.com/dashboard/overview";
      case "applications":
        return "https://app.rekodja.com/dashboard";
      case "actions":
        return "https://app.rekodja.com/dashboard/actions";
      case "analytics":
        return "https://app.rekodja.com/dashboard/analytics";
    }
  }, [currentView]);

  // Sample applications data
  const sampleApplications = [
    {
      id: "1",
      company: "TDCX Malaysia",
      role: "Verified Operations Specialist (KYC)",
      stage: "Applied",
      stageClass: "status-applied",
      dotColor: "#a67c17",
      dateApplied: "20 Sep",
      source: "JobStreet",
      activity: "Application confirmed",
      activityDate: "20 Sep",
    },
    {
      id: "2",
      company: "PRISM+ Malaysia",
      role: "Market & Intelligence Analyst",
      stage: "Interview",
      stageClass: "status-interview",
      dotColor: "#41699c",
      dateApplied: "18 Sep",
      source: "LinkedIn",
      activity: "Interview invitation detected",
      activityDate: "19 Sep",
    },
    {
      id: "3",
      company: "Grab Malaysia",
      role: "Software Engineer (Full Stack)",
      stage: "Applied",
      stageClass: "status-applied",
      dotColor: "#a67c17",
      dateApplied: "12 Sep",
      source: "Indeed",
      activity: "Application confirmed",
      activityDate: "12 Sep",
    },
    {
      id: "4",
      company: "Touch 'n Go Digital",
      role: "Product Designer",
      stage: "Offer",
      stageClass: "status-offer",
      dotColor: "#3d7756",
      dateApplied: "5 Sep",
      source: "LinkedIn",
      activity: "Offer received",
      activityDate: "15 Sep",
    },
    {
      id: "5",
      company: "Shopee Malaysia",
      role: "Senior QA Engineer",
      stage: "Rejected",
      stageClass: "status-rejected",
      dotColor: "#af4545",
      dateApplied: "28 Aug",
      source: "LinkedIn",
      activity: "Rejection email confirmed",
      activityDate: "10 Sep",
    },
  ];

  const filteredApplications = useMemo(() => {
    return sampleApplications.filter((app) => {
      const matchSearch =
        (app.company + " " + app.role).toLowerCase().includes(appSearch.toLowerCase().trim());
      const matchStage =
        appStageFilter === "All statuses" || app.stage === appStageFilter;
      const matchSource =
        appSourceFilter === "All sources" || app.source === appSourceFilter;
      return matchSearch && matchStage && matchSource;
    });
  }, [sampleApplications, appSearch, appStageFilter, appSourceFilter]);

  return (
    <section id="web-app" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.webApp.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            {t.webApp.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {t.webApp.subhead}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              asChild
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-md transition-all flex items-center gap-2 text-sm"
            >
              <a
                href={currentUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{language === "bm" ? "Buka app.rekodja.com" : "Open app.rekodja.com"}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <span className="text-xs text-slate-400 font-mono bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
              {currentUrl}
            </span>
          </div>
        </div>

        {/* Multi-view Navigation Hint */}
        <div className="max-w-6xl mx-auto mb-3 flex items-center justify-between text-xs text-slate-400 px-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{language === "bm" ? "Papan Pemuka Interaktif: Klik menu di sidebar untuk melihat halaman sebenar" : "Interactive Dashboard: Click sidebar links to view each live page"}</span>
          </div>
          <span className="font-mono text-slate-400 hidden sm:inline">
            Status: {currentView.toUpperCase()}
          </span>
        </div>

        {/* EXACT WEB APP UI REPLICA */}
        <div className="max-w-6xl mx-auto bg-white text-[#253043] rounded-2xl shadow-2xl border border-slate-700/80 overflow-hidden text-[13px] font-sans">
          {/* Browser Address Bar Frame */}
          <div className="bg-[#f1f3f6] border-b border-[#e1e5ee] px-4 py-2.5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="flex-1 max-w-lg bg-white border border-[#d5dbe4] rounded-md px-3 py-1 text-xs text-[#596579] font-mono flex items-center justify-between shadow-2xs">
              <span className="truncate">{currentUrl}</span>
              <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                LIVE APP
              </span>
            </div>
            <div className="w-12 hidden sm:block"></div>
          </div>

          {/* Web App Workspace Container */}
          <div className="flex flex-col md:flex-row min-h-[580px]">
            {/* Sidebar (Exact replica of WorkspaceNav) */}
            <aside className="w-full md:w-[185px] bg-[#fafafa] border-r border-[#e7eaf0] p-4 md:py-6 md:px-3 flex flex-col justify-between shrink-0">
              <div className="space-y-4">
                {/* Brand in Sidebar (Mobile only) */}
                <div className="md:hidden flex items-center gap-2 pb-3 border-b border-[#e7eaf0]">
                  <span className="w-6 h-6 rounded bg-[#252d37] text-white font-serif font-bold text-center leading-6 text-sm">
                    R
                  </span>
                  <span className="font-serif font-bold text-black text-sm">
                    Rekod<i className="text-[#0061e9] font-normal not-italic italic">Ja</i>
                  </span>
                  <span className="text-[9px] border border-[#dde2e9] px-1 py-0.5 rounded text-[#626976]">
                    Pro
                  </span>
                </div>

                <div className="text-[9px] uppercase tracking-[1.4px] text-[#7b8493] font-semibold px-2 hidden md:block">
                  Workspace
                </div>

                {/* Nav links */}
                <nav className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setCurrentView("overview")}
                    className={`w-full text-left px-3 py-2 rounded text-[12px] transition-colors flex items-center justify-between ${
                      currentView === "overview"
                        ? "bg-[#edf0f5] text-[#14213d] font-bold"
                        : "text-[#596579] hover:bg-[#edf0f5]/60 hover:text-[#14213d] font-medium"
                    }`}
                  >
                    <span>Overview</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentView("applications")}
                    className={`w-full text-left px-3 py-2 rounded text-[12px] transition-colors flex items-center justify-between ${
                      currentView === "applications"
                        ? "bg-[#edf0f5] text-[#14213d] font-bold"
                        : "text-[#596579] hover:bg-[#edf0f5]/60 hover:text-[#14213d] font-medium"
                    }`}
                  >
                    <span>Applications</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentView("actions")}
                    className={`w-full text-left px-3 py-2 rounded text-[12px] transition-colors flex items-center justify-between ${
                      currentView === "actions"
                        ? "bg-[#edf0f5] text-[#14213d] font-bold"
                        : "text-[#596579] hover:bg-[#edf0f5]/60 hover:text-[#14213d] font-medium"
                    }`}
                  >
                    <span>Actions</span>
                    <span className="text-[10px] bg-[#fbeeee] text-[#a53535] px-1.5 py-0.5 rounded font-bold font-mono">
                      2
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentView("actions")}
                    className="w-full text-left px-3 py-2 rounded text-[#596579] hover:bg-[#edf0f5]/60 hover:text-[#14213d] font-medium text-[12px] transition-colors"
                  >
                    <span>Gmail Scan</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentView("analytics")}
                    className={`w-full text-left px-3 py-2 rounded text-[12px] transition-colors flex items-center justify-between ${
                      currentView === "analytics"
                        ? "bg-[#edf0f5] text-[#14213d] font-bold"
                        : "text-[#596579] hover:bg-[#edf0f5]/60 hover:text-[#14213d] font-medium"
                    }`}
                  >
                    <span>Analytics</span>
                  </button>

                  <a
                    href="https://chromewebstore.google.com/detail/job-tracker-quick-add/plkhmignapibfhoppbkebpndckjbjpmg?authuser=0&hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="block px-3 py-2 rounded text-[#596579] hover:bg-[#edf0f5]/60 hover:text-[#14213d] font-medium text-[12px] transition-colors"
                  >
                    Extension ↗
                  </a>

                  <a
                    href="#demo"
                    className="block px-3 py-2 rounded text-[#596579] hover:bg-[#edf0f5]/60 hover:text-[#14213d] font-medium text-[12px] transition-colors"
                  >
                    Spreadsheet ↗
                  </a>
                </nav>
              </div>

              {/* Sidebar bottom with settings & Surah Taha */}
              <div className="pt-6 border-t border-[#e6e9ee] mt-6 md:mt-0 text-[11px] text-[#697589] space-y-3">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-[#596579] hover:text-[#14213d] font-medium"
                >
                  <span>⚙️ Settings</span>
                </button>
                <p className="text-[10px] leading-[1.6] text-[#788496] italic">
                  "My Lord! Uplift my heart for me and make my task easy and remove the impediment from my tongue so people may understand my speech."
                  <span className="block mt-1 font-semibold not-italic">Surah Taha: 25-28</span>
                </p>
              </div>
            </aside>

            {/* Workspace Body */}
            <div className="flex-1 flex flex-col min-w-0 bg-white">
              {/* Workspace Topbar (Exact replica) */}
              <header className="h-[62px] border-b border-[#e7eaf0] px-4 md:px-8 flex items-center justify-between">
                {/* Left: Brand */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="p-1.5 rounded hover:bg-[#eef0f4] text-[#14213d] md:hidden"
                    aria-label="Toggle sidebar"
                  >
                    <Menu className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="w-[23px] h-[26px] bg-[#252d37] text-white font-serif font-bold text-center leading-[26px] text-[18px] rounded-[5px] inline-block shadow-2xs">
                      R
                    </span>
                    <span className="font-serif text-[17px] tracking-normal">
                      <strong className="text-black font-bold">Rekod</strong>
                      <em className="text-[#0061e9] font-normal not-italic italic">Ja</em>
                    </span>
                    <small className="text-[9px] border border-[#dde2e9] text-[#626976] px-1 py-0.2 rounded font-sans uppercase font-semibold">
                      Pro
                    </small>
                  </div>
                </div>

                {/* Right: Actions, Notifications, Profile (User with "U") */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Theme toggle */}
                  <button
                    type="button"
                    className="p-1.5 rounded-md border border-[#d7dce4] text-[#596579] hover:bg-[#f0f2f5] hover:text-[#14213d] transition-colors"
                    title="Toggle Theme"
                  >
                    <Sun className="w-3.5 h-3.5" />
                  </button>

                  {/* Bell with badge */}
                  <div className="relative">
                    <button
                      type="button"
                      className="p-1.5 text-[#596579] hover:text-[#14213d] transition-colors"
                      title="Notifications"
                    >
                      <Bell className="w-4 h-4" />
                      <span className="absolute -top-1 -right-1 bg-[#a53535] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                        2
                      </span>
                    </button>
                  </div>

                  {/* Avatar (U) + Name (User) */}
                  <div className="flex items-center gap-2 pl-2 border-l border-[#e7eaf0]">
                    <span className="w-7 h-7 rounded-full bg-[#edf0f5] text-[#14213d] font-bold text-[11px] flex items-center justify-center">
                      U
                    </span>
                    <span className="text-xs font-semibold text-[#253043] hidden sm:inline">
                      User
                    </span>
                  </div>
                </div>
              </header>

              {/* VIEW 1: OVERVIEW PAGE */}
              {currentView === "overview" && (
                <div className="p-4 md:p-8 space-y-7 flex-1 overflow-y-auto animate-in fade-in duration-200">
                  {/* Date Eyebrow */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[1.6px] text-[#657184] font-semibold">
                      {currentDateFormatted}
                    </p>
                  </div>

                  {/* Heading + Sync Tracker Button */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h1 className="text-[26px] md:text-[29px] font-bold text-[#23272f] tracking-tight leading-tight">
                      Hello, there.
                    </h1>

                    <button
                      type="button"
                      onClick={handleSync}
                      disabled={isSyncing}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[5px] border border-[#d7dce4] bg-white text-[#374151] hover:bg-[#f6f8fc] text-xs font-medium shadow-2xs transition-all"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 text-[#14213d] ${isSyncing ? "animate-spin" : ""}`} />
                      <span>{isSyncing ? "Syncing…" : "Sync tracker"}</span>
                    </button>
                  </div>

                  {syncedJustNow && (
                    <div className="p-2.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in duration-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Sync Complete!</strong> Google Sheet data is up to date.</span>
                    </div>
                  )}

                  {/* SECTION 1: Needs Attention */}
                  <section className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-[17px] font-semibold text-[#23272f] tracking-tight flex items-center gap-2">
                          <span>Needs Attention</span>
                          <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-[#fbeeee] text-[#a53535]">
                            2
                          </span>
                        </h2>
                        <p className="text-xs text-[#626976] mt-0.5">
                          What needs your attention in your job search?
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setCurrentView("actions")}
                        className="text-xs text-[#5c6678] hover:text-[#14213d] font-medium"
                      >
                        View all actions →
                      </button>
                    </div>

                    {/* Attention Rows */}
                    <div className="border border-[#e5e7eb] rounded-lg overflow-hidden divide-y divide-[#e5e7eb] bg-white">
                      {/* Row 1: TDCX */}
                      <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#f5f7fa] transition-colors">
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <strong className="text-[13px] text-[#23272f] font-semibold">
                              TDCX Malaysia
                            </strong>
                            <span className="text-[10px] text-[#626976]">
                              Waiting 7 days
                            </span>
                          </div>
                          <p className="text-[11px] text-[#626976] font-medium">
                            Verified Operations Specialist (KYC)
                          </p>
                          <p className="text-xs text-[#555] leading-relaxed">
                            7 days since applied. Consider sending a polite follow-up email.
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => setFollowUpModalJob("TDCX Malaysia (Verified Operations Specialist)")}
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[5px] border border-[#d7dce4] bg-white text-[#374151] hover:bg-[#14213d] hover:text-white hover:border-[#14213d] text-xs font-medium shadow-2xs transition-all self-start sm:self-center"
                        >
                          <span>Follow up</span>
                          <span aria-hidden="true">↗</span>
                        </button>
                      </div>

                      {/* Row 2: Grab */}
                      <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#f5f7fa] transition-colors">
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <strong className="text-[13px] text-[#23272f] font-semibold">
                              Grab Malaysia
                            </strong>
                            <span className="text-[10px] text-[#626976]">
                              Waiting 14 days
                            </span>
                          </div>
                          <p className="text-[11px] text-[#626976] font-medium">
                            Software Engineer (Full Stack)
                          </p>
                          <p className="text-xs text-[#555] leading-relaxed">
                            14 days since applied. Follow up or archive this lead.
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => setFollowUpModalJob("Grab Malaysia (Software Engineer)")}
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[5px] border border-[#d7dce4] bg-white text-[#374151] hover:bg-[#14213d] hover:text-white hover:border-[#14213d] text-xs font-medium shadow-2xs transition-all self-start sm:self-center"
                        >
                          <span>Follow up</span>
                          <span aria-hidden="true">↗</span>
                        </button>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 2: Your search at a glance (Metrics Bar) */}
                  <section className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[17px] font-semibold text-[#23272f] tracking-tight">
                        Your search at a glance
                      </h2>
                      <button
                        type="button"
                        onClick={() => setCurrentView("analytics")}
                        className="text-xs text-[#5c6678] hover:text-[#14213d] font-medium"
                      >
                        View analytics →
                      </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 py-5 border-y border-[#e5e7eb] divide-y md:divide-y-0 md:divide-x divide-[#e5e7eb]">
                      <div className="px-3 md:px-5 py-2 md:py-0">
                        <span className="text-xs text-[#626976] block mb-1">
                          Applications
                        </span>
                        <strong className="text-[27px] font-medium text-[#23272f] tracking-tight">
                          18
                        </strong>
                      </div>

                      <div className="px-3 md:px-5 py-2 md:py-0">
                        <span className="text-xs text-[#626976] block mb-1">
                          Rejection rate
                        </span>
                        <div className="flex items-baseline gap-2">
                          <strong className="text-[27px] font-medium text-[#23272f] tracking-tight">
                            11%
                          </strong>
                          <span className="text-[11px] text-[#626976]">2 of 18</span>
                        </div>
                      </div>

                      <div className="px-3 md:px-5 py-2 md:py-0">
                        <span className="text-xs text-[#626976] block mb-1">
                          Interview rate
                        </span>
                        <div className="flex items-baseline gap-2">
                          <strong className="text-[27px] font-medium text-[#176b35] tracking-tight">
                            22%
                          </strong>
                          <span className="text-[11px] text-[#626976]">4 of 18</span>
                        </div>
                      </div>

                      <div className="px-3 md:px-5 py-2 md:py-0">
                        <span className="text-xs text-[#626976] block mb-1">
                          Offer rate
                        </span>
                        <div className="flex items-baseline gap-2">
                          <strong className="text-[27px] font-medium text-[#244e9b] tracking-tight">
                            6%
                          </strong>
                          <span className="text-[11px] text-[#626976]">1 of 18</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 3: Recent Applications Table */}
                  <section className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[17px] font-semibold text-[#23272f] tracking-tight">
                        Recent Applications
                      </h2>
                      <button
                        type="button"
                        onClick={() => setCurrentView("applications")}
                        className="text-xs text-[#5c6678] hover:text-[#14213d] font-medium"
                      >
                        View all 18 →
                      </button>
                    </div>

                    <div className="border border-[#e5e7eb] rounded-lg overflow-x-auto shadow-2xs">
                      <table className="w-full text-left text-xs border-collapse min-w-[550px]">
                        <thead>
                          <tr className="bg-[#fafbfc] border-b border-[#e5e7eb] text-[#626976]">
                            <th className="py-2.5 px-4 font-medium w-[40%]">Company / role</th>
                            <th className="py-2.5 px-4 font-medium w-[20%]">Status</th>
                            <th className="py-2.5 px-4 font-medium w-[20%]">Applied</th>
                            <th className="py-2.5 px-4 font-medium w-[20%]">Source</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e5e7eb] bg-white">
                          {sampleApplications.slice(0, 4).map((app) => (
                            <tr key={app.id} className="hover:bg-[#fcfcfd] transition-colors">
                              <td className="py-3 px-4">
                                <span className="font-semibold text-[#253043] block">{app.company}</span>
                                <span className="text-[11px] text-[#626976]">{app.role}</span>
                              </td>
                              <td className="py-3 px-4">
                                <span className="inline-flex items-center gap-1.5 border border-[#e0e4ea] bg-[#fafafa] px-2 py-0.5 rounded text-[10px] text-[#515b6b] shadow-2xs">
                                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: app.dotColor }}></span>
                                  <span>{app.stage}</span>
                                </span>
                              </td>
                              <td className="py-3 px-4 text-[#515b6b]">{app.dateApplied}</td>
                              <td className="py-3 px-4 text-[#515b6b]">{app.source}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {/* VIEW 2: APPLICATIONS PAGE (https://app.rekodja.com/dashboard) */}
              {currentView === "applications" && (
                <div className="p-4 md:p-8 space-y-6 flex-1 overflow-y-auto animate-in fade-in duration-200">
                  <h1 className="text-[29px] font-bold text-[#23272f] tracking-tight leading-tight">
                    Applications
                  </h1>

                  {/* Filter Toolbar (Exact replica of .application-filters) */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end bg-[#fafbfc] p-3.5 rounded-lg border border-[#e5e7eb]">
                    <div>
                      <label className="text-[11px] text-[#515b6b] block font-medium mb-1">
                        Search applications
                      </label>
                      <input
                        type="search"
                        value={appSearch}
                        onChange={(e) => setAppSearch(e.target.value)}
                        placeholder="Search company or role…"
                        className="w-full text-xs h-[36px] px-3 bg-white border border-[#d5dbe4] rounded-[5px] text-[#253043] focus:outline-none focus:ring-1 focus:ring-[#14213d]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-[#515b6b] block font-medium mb-1">
                        Status
                      </label>
                      <select
                        value={appStageFilter}
                        onChange={(e) => setAppStageFilter(e.target.value)}
                        className="w-full text-xs h-[36px] px-2 bg-white border border-[#d5dbe4] rounded-[5px] text-[#253043] focus:outline-none focus:ring-1 focus:ring-[#14213d]"
                      >
                        <option value="All statuses">All statuses</option>
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Offer">Offer</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Ghosted">Ghosted</option>
                        <option value="Withdrawn">Withdrawn</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] text-[#515b6b] block font-medium mb-1">
                        Source
                      </label>
                      <select
                        value={appSourceFilter}
                        onChange={(e) => setAppSourceFilter(e.target.value)}
                        className="w-full text-xs h-[36px] px-2 bg-white border border-[#d5dbe4] rounded-[5px] text-[#253043] focus:outline-none focus:ring-1 focus:ring-[#14213d]"
                      >
                        <option value="All sources">All sources</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="JobStreet">JobStreet</option>
                        <option value="Indeed">Indeed</option>
                      </select>
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          setAppSearch("");
                          setAppStageFilter("All statuses");
                          setAppSourceFilter("All sources");
                        }}
                        className="text-xs text-[#14213d] hover:underline font-medium h-[36px] flex items-center justify-center w-full"
                      >
                        Clear filters
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-[#626976]">
                    {filteredApplications.length} of {sampleApplications.length} applications
                  </p>

                  {/* Applications Table */}
                  <div className="border border-[#e5e7eb] rounded-lg overflow-x-auto shadow-2xs">
                    <table className="w-full text-left text-xs border-collapse min-w-[640px]">
                      <thead>
                        <tr className="bg-[#fafbfc] border-b border-[#e5e7eb] text-[#626976]">
                          <th className="py-2.5 px-4 font-medium w-[28%]">Company / role</th>
                          <th className="py-2.5 px-4 font-medium w-[15%]">Status</th>
                          <th className="py-2.5 px-4 font-medium w-[12%]">Applied</th>
                          <th className="py-2.5 px-4 font-medium w-[15%]">Source</th>
                          <th className="py-2.5 px-4 font-medium w-[30%]">Last activity</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#e5e7eb] bg-white">
                        {filteredApplications.map((app) => (
                          <tr key={app.id} className="hover:bg-[#f5f7fa] transition-colors">
                            <td className="py-3.5 px-4">
                              <span className="font-semibold text-[#253043] block text-[13px]">{app.company}</span>
                              <span className="text-[11px] text-[#626976]">{app.role}</span>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="inline-flex items-center gap-1.5 border border-[#e0e4ea] bg-[#fafafa] px-2 py-0.5 rounded text-[10px] text-[#515b6b] shadow-2xs">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: app.dotColor }}></span>
                                <span>{app.stage}</span>
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-[#515b6b]">{app.dateApplied}</td>
                            <td className="py-3.5 px-4 text-[#515b6b]">{app.source}</td>
                            <td className="py-3.5 px-4">
                              <span className="block text-[#253043] font-medium">{app.activity}</span>
                              <span className="text-[11px] text-[#626976]">{app.activityDate}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* VIEW 3: ACTIONS CENTER (https://app.rekodja.com/dashboard/actions) */}
              {currentView === "actions" && (
                <div className="p-4 md:p-8 space-y-6 flex-1 overflow-y-auto animate-in fade-in duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e5e7eb] pb-4">
                    <h1 className="text-[29px] font-bold text-[#23272f] tracking-tight leading-tight">
                      Action Center
                    </h1>

                    <button
                      type="button"
                      className="px-3.5 py-1.5 rounded-[5px] bg-[#14213d] text-white hover:bg-[#223555] text-xs font-semibold shadow-2xs transition-all"
                    >
                      Scan Gmail
                    </button>
                  </div>

                  {/* Tabs Row */}
                  <div className="flex items-center justify-between border-b border-[#e5e7eb] text-xs">
                    <div className="flex gap-4">
                      {(["All", "Follow-ups", "Needs Review", "Unmatched"] as const).map((tab) => (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setActionTab(tab)}
                          className={`py-2 border-b-2 font-medium transition-all ${
                            actionTab === tab
                              ? "border-[#14213d] text-[#14213d] font-bold"
                              : "border-transparent text-[#626976] hover:text-[#14213d]"
                          }`}
                        >
                          <span>{tab}</span>
                          <span className="ml-1.5 text-[10px] text-[#717182]">
                            {tab === "All" || tab === "Follow-ups" ? "2" : "0"}
                          </span>
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-[#626976] pb-1">
                      <span>Sort:</span>
                      <select className="border border-[#d5dbe4] rounded px-1.5 py-0.5 text-xs bg-white text-[#253043]">
                        <option>Latest</option>
                        <option>Oldest</option>
                      </select>
                    </div>
                  </div>

                  {/* Actions List */}
                  <div className="border border-[#e5e7eb] rounded-lg overflow-hidden divide-y divide-[#e5e7eb] bg-white">
                    <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#f5f7fa] transition-colors">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <strong className="text-[13px] text-[#23272f] font-semibold">
                            TDCX Malaysia
                          </strong>
                          <span className="text-[10px] text-[#626976]">
                            Waiting 7 days
                          </span>
                        </div>
                        <p className="text-[11px] text-[#626976] font-medium">
                          Verified Operations Specialist (KYC)
                        </p>
                        <p className="text-xs text-[#555] leading-relaxed">
                          No response for 7 days. Consider sending a polite follow-up inquiry.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setFollowUpModalJob("TDCX Malaysia (Verified Operations Specialist)")}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[5px] border border-[#d7dce4] bg-white text-[#374151] hover:bg-[#14213d] hover:text-white hover:border-[#14213d] text-xs font-medium shadow-2xs transition-all self-start sm:self-center"
                      >
                        <span>Follow up</span>
                        <span aria-hidden="true">↗</span>
                      </button>
                    </div>

                    <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#f5f7fa] transition-colors">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <strong className="text-[13px] text-[#23272f] font-semibold">
                            Grab Malaysia
                          </strong>
                          <span className="text-[10px] text-[#626976]">
                            Waiting 14 days
                          </span>
                        </div>
                        <p className="text-[11px] text-[#626976] font-medium">
                          Software Engineer (Full Stack)
                        </p>
                        <p className="text-xs text-[#555] leading-relaxed">
                          No response for 14 days. Follow up or archive this lead.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setFollowUpModalJob("Grab Malaysia (Software Engineer)")}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[5px] border border-[#d7dce4] bg-white text-[#374151] hover:bg-[#14213d] hover:text-white hover:border-[#14213d] text-xs font-medium shadow-2xs transition-all self-start sm:self-center"
                      >
                        <span>Follow up</span>
                        <span aria-hidden="true">↗</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#626976]">
                    2 follow-ups recorded. Detected updates never change your tracker without confirmation.
                  </p>
                </div>
              )}

              {/* VIEW 4: ANALYTICS (https://app.rekodja.com/dashboard/analytics) */}
              {currentView === "analytics" && (
                <div className="p-4 md:p-8 space-y-6 flex-1 overflow-y-auto animate-in fade-in duration-200">
                  <h1 className="text-[29px] font-bold text-[#23272f] tracking-tight leading-tight">
                    Analytics
                  </h1>

                  {/* 4 Metric Columns */}
                  <div className="grid grid-cols-2 md:grid-cols-4 py-5 border-y border-[#e5e7eb] divide-y md:divide-y-0 md:divide-x divide-[#e5e7eb]">
                    <div className="px-3 md:px-5 py-2 md:py-0">
                      <span className="text-xs text-[#626976] block mb-1">Applications</span>
                      <strong className="text-[27px] font-medium text-[#23272f]">18</strong>
                    </div>

                    <div className="px-3 md:px-5 py-2 md:py-0">
                      <span className="text-xs text-[#626976] block mb-1">Response rate</span>
                      <strong className="text-[27px] font-medium text-[#23272f]">33%</strong>
                    </div>

                    <div className="px-3 md:px-5 py-2 md:py-0">
                      <span className="text-xs text-[#626976] block mb-1">Interview rate</span>
                      <strong className="text-[27px] font-medium text-[#176b35]">22%</strong>
                    </div>

                    <div className="px-3 md:px-5 py-2 md:py-0">
                      <span className="text-xs text-[#626976] block mb-1">Offer rate</span>
                      <strong className="text-[27px] font-medium text-[#244e9b]">6%</strong>
                    </div>
                  </div>

                  {/* 2-Column Grid: Over Time & Pipeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Surface 1: Applications over time */}
                    <div className="border border-[#e5e7eb] rounded-lg p-5 bg-white">
                      <h2 className="text-[16px] font-semibold text-[#23272f] mb-0.5">
                        Applications over time
                      </h2>
                      <p className="text-[11px] text-[#626976] mb-4">
                        1 Aug 2026 – 26 Sep 2026
                      </p>

                      {/* Mock Column Chart */}
                      <div className="h-[140px] flex items-end justify-between gap-3 pt-4 border-b border-[#e5e7eb] pb-2">
                        {[
                          { week: "W1", count: 2, height: "30%" },
                          { week: "W2", count: 3, height: "45%" },
                          { week: "W3", count: 5, height: "75%" },
                          { week: "W4", count: 4, height: "60%" },
                          { week: "W5", count: 3, height: "45%" },
                          { week: "W6", count: 1, height: "20%" },
                        ].map((b, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <span className="text-[10px] text-[#626976]">{b.count}</span>
                            <div className="w-full bg-[#eef1f6] h-[90px] rounded-t flex items-end justify-center">
                              <div
                                className="w-3/4 bg-[#516581] rounded-t transition-all"
                                style={{ height: b.height }}
                              ></div>
                            </div>
                            <span className="text-[9px] text-[#626976]">{b.week}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Surface 2: Current pipeline */}
                    <div className="border border-[#e5e7eb] rounded-lg p-5 bg-white">
                      <h2 className="text-[16px] font-semibold text-[#23272f] mb-0.5">
                        Current pipeline
                      </h2>
                      <p className="text-[11px] text-[#626976] mb-4">
                        Where applications stand today
                      </p>

                      <div className="space-y-3.5 text-xs">
                        {[
                          { stage: "Applied", count: 12, pct: "66%", color: "bg-[#516581]" },
                          { stage: "Interview", count: 4, pct: "22%", color: "bg-[#41699c]" },
                          { stage: "Offer", count: 1, pct: "6%", color: "bg-[#3d7756]" },
                          { stage: "Rejected", count: 1, pct: "6%", color: "bg-[#af4545]" },
                        ].map((p, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <span className="w-16 text-[#253043]">{p.stage}</span>
                            <div className="flex-1 h-2 bg-[#f2f3f6] rounded-full overflow-hidden">
                              <div
                                className={`h-full ${p.color} rounded-full`}
                                style={{ width: p.pct }}
                              ></div>
                            </div>
                            <strong className="w-6 text-right font-medium">{p.count}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Source Performance Table */}
                  <div className="space-y-2 pt-2">
                    <h2 className="text-[16px] font-semibold text-[#23272f]">
                      Source performance
                    </h2>
                    <div className="border border-[#e5e7eb] rounded-lg overflow-x-auto shadow-2xs">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-[#fafbfc] border-b border-[#e5e7eb] text-[#626976]">
                            <th className="py-2.5 px-4 font-medium">Source</th>
                            <th className="py-2.5 px-4 font-medium">Applications</th>
                            <th className="py-2.5 px-4 font-medium">Responses</th>
                            <th className="py-2.5 px-4 font-medium">Interviews</th>
                            <th className="py-2.5 px-4 font-medium">Offers</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e5e7eb] bg-white">
                          <tr>
                            <td className="py-3 px-4 font-semibold text-[#253043]">LinkedIn</td>
                            <td className="py-3 px-4">8</td>
                            <td className="py-3 px-4">3 <span className="text-[#626976]">(37%)</span></td>
                            <td className="py-3 px-4">2 <span className="text-[#626976]">(25%)</span></td>
                            <td className="py-3 px-4">1 <span className="text-[#626976]">(12%)</span></td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-[#253043]">JobStreet</td>
                            <td className="py-3 px-4">6</td>
                            <td className="py-3 px-4">2 <span className="text-[#626976]">(33%)</span></td>
                            <td className="py-3 px-4">1 <span className="text-[#626976]">(17%)</span></td>
                            <td className="py-3 px-4">0 <span className="text-[#626976]">(0%)</span></td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-[#253043]">Indeed</td>
                            <td className="py-3 px-4">4</td>
                            <td className="py-3 px-4">1 <span className="text-[#626976]">(25%)</span></td>
                            <td className="py-3 px-4">1 <span className="text-[#626976]">(25%)</span></td>
                            <td className="py-3 px-4">0 <span className="text-[#626976]">(0%)</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal for Follow Up Action Simulation */}
        {followUpModalJob && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white text-[#253043] rounded-xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-bold text-base text-[#14213d] flex items-center gap-2">
                  <MailCheck className="w-5 h-5 text-blue-600" />
                  <span>Draf Emel Follow-Up Rasmi</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setFollowUpModalJob(null)}
                  className="text-slate-400 hover:text-slate-700 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <div>
                <p className="text-xs text-slate-500 mb-1">Jawatan &amp; Syarikat:</p>
                <div className="text-sm font-semibold text-[#23272f] bg-slate-50 p-2.5 rounded border">
                  {followUpModalJob}
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-slate-500">Draf Emel Dijana Automatik:</p>
                <textarea
                  readOnly
                  rows={6}
                  className="w-full text-xs font-sans p-3 rounded border border-slate-300 bg-slate-50/50 leading-relaxed text-slate-800"
                  value={
                    language === "bm"
                      ? `Salam Sejahtera,\n\nSaya ingin bertanya secara ringkas mengenai perkembangan terkini permohonan saya bagi jawatan ini.\n\nSaya kekal amat berminat untuk menyertai pasukan dan bersedia sekiranya ada maklumat tambahan yang diperlukan.\n\nTerima kasih atas masa anda.`
                      : `Dear Hiring Team,\n\nI hope you are having a productive week. I am writing to politely follow up on the status of my application for this role.\n\nI remain enthusiastic about the opportunity to contribute and would be happy to provide any further details needed.\n\nThank you for your time and consideration.`
                  }
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFollowUpModalJob(null)}
                  className="text-xs"
                >
                  Tutup
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText("Follow-up email copied!");
                    alert(language === "bm" ? "Draf emel telah disalin ke clipboard!" : "Email draft copied to clipboard!");
                    setFollowUpModalJob(null);
                  }}
                  className="bg-[#14213d] hover:bg-[#223555] text-white text-xs"
                >
                  Salin Emel &amp; Buka Gmail
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
