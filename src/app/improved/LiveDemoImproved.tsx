import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import confetti from "canvas-confetti";
import { CheckCircle2, Sheet, ExternalLink, ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";

interface JobSample {
  id: string;
  source: "JobStreet" | "LinkedIn" | "Indeed";
  sourceColor: string;
  title: string;
  company: string;
  location: string;
  url: string;
}

const SAMPLE_JOBS: JobSample[] = [
  {
    id: "job-1",
    source: "JobStreet",
    sourceColor: "bg-blue-600",
    title: "Verified Operations Specialist (KYC)",
    company: "TDCX Malaysia",
    location: "Kuala Lumpur",
    url: "https://my.jobstreet.com/job/94167575",
  },
  {
    id: "job-2",
    source: "LinkedIn",
    sourceColor: "bg-sky-700",
    title: "Market & Intelligence Analyst",
    company: "PRISM+ Malaysia",
    location: "Petaling Jaya",
    url: "https://linkedin.com/jobs/view/4464962627",
  },
  {
    id: "job-3",
    source: "Indeed",
    sourceColor: "bg-indigo-700",
    title: "Software Engineer (Full Stack)",
    company: "Grab Malaysia",
    location: "Bangsar South",
    url: "https://malaysia.indeed.com/viewjob?jk=9821a",
  },
];

interface SavedRow {
  id: string;
  role: string;
  company: string;
  date: string;
  url: string;
  status: "Applied" | "Interview" | "Offer";
}

export function LiveDemoImproved() {
  const { t, language } = useLanguage();
  const [selectedJob, setSelectedJob] = useState<JobSample>(SAMPLE_JOBS[0]);
  const [dateApplied, setDateApplied] = useState(language === "bm" ? "Hari ini" : "Today");
  const [isSaving, setIsSaving] = useState(false);
  const [justSaved, setJustSaved] = useState(false);
  const [savedRows, setSavedRows] = useState<SavedRow[]>([
    {
      id: "initial-1",
      role: "Frontend Developer",
      company: "Maybank",
      date: "22 Sep 2026",
      url: "https://jobstreet.com/job/sample1",
      status: "Interview",
    },
    {
      id: "initial-2",
      role: "Product Designer",
      company: "Touch 'n Go Digital",
      date: "20 Sep 2026",
      url: "https://linkedin.com/jobs/sample2",
      status: "Applied",
    },
  ]);

  const handleSimulateSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSaving) return;

    setIsSaving(true);
    setJustSaved(false);

    setTimeout(() => {
      const defaultDate = language === "bm" ? "Hari ini" : "Today";
      const newRow: SavedRow = {
        id: `row-${Date.now()}`,
        role: selectedJob.title,
        company: selectedJob.company,
        date: dateApplied || defaultDate,
        url: selectedJob.url,
        status: "Applied",
      };

      setSavedRows((prev) => [newRow, ...prev]);
      setIsSaving(false);
      setJustSaved(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 },
        colors: ["#0f9d58", "#14213d", "#0061e9"],
      });
    }, 450);
  };

  const handleReset = () => {
    setSavedRows([
      {
        id: "initial-1",
        role: "Frontend Developer",
        company: "Maybank",
        date: "22 Sep 2026",
        url: "https://jobstreet.com/job/sample1",
        status: "Interview",
      },
      {
        id: "initial-2",
        role: "Product Designer",
        company: "Touch 'n Go Digital",
        date: "20 Sep 2026",
        url: "https://linkedin.com/jobs/sample2",
        status: "Applied",
      },
    ]);
    setJustSaved(false);
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/40 border-y">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.demo.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t.demo.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">
            {t.demo.subhead}
          </p>
        </div>

        {/* Job selector pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-semibold text-muted-foreground mr-2">{t.demo.jobSelectorLabel}</span>
          {SAMPLE_JOBS.map((job) => {
            const isSelected = selectedJob.id === job.id;
            return (
              <button
                key={job.id}
                type="button"
                onClick={() => {
                  setSelectedJob(job);
                  setJustSaved(false);
                }}
                className={`text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#14213d] text-white border-[#14213d] shadow-sm"
                    : "bg-background text-foreground/80 hover:bg-muted border-border"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${job.sourceColor}`}></span>
                <span>{job.source}: {job.company}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Simulated Browser Tab + Popup (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Browser Preview Card */}
            <div className="bg-card border rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-muted/70 px-4 py-2 border-b flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-background px-3 py-0.5 rounded text-[11px] truncate flex-1 font-mono">
                  {selectedJob.url}
                </div>
              </div>
              <div className="p-4 bg-background">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-[10px] text-white font-bold px-2 py-0.5 rounded ${selectedJob.sourceColor}`}>
                    {selectedJob.source}
                  </span>
                  <span className="text-xs text-muted-foreground">{selectedJob.location}</span>
                </div>
                <h3 className="font-semibold text-base text-foreground leading-snug">
                  {selectedJob.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                  {selectedJob.company} • Full-time
                </p>
              </div>
            </div>

            {/* Simulated Extension Popup Box */}
            <div className="bg-[#fafaf9] border-2 border-slate-300 dark:border-slate-700 rounded-2xl p-5 shadow-md">
              <div className="flex items-center justify-between border-b pb-3 mb-4">
                <div className="text-sm font-bold text-[#14213d] flex items-center gap-1.5">
                  <span>{t.demo.popupTitle}</span>
                  <span className="font-serif tracking-normal">
                    <strong className="text-black font-bold">Rekod</strong>
                    <em className="text-[#0061e9] font-normal italic">Ja</em>
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {t.demo.detectedBadge}
                </span>
              </div>

              <form onSubmit={handleSimulateSave} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#14213d] mb-1">
                    {t.demo.jobLinkLabel}
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={selectedJob.url}
                    className="w-full text-xs font-mono bg-white border border-[#d5dbe4] rounded-md px-3 py-2 text-foreground/80 focus:outline-none cursor-not-allowed truncate"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#14213d] mb-1">
                    {t.demo.dateAppliedLabel}
                  </label>
                  <input
                    type="text"
                    value={dateApplied}
                    onChange={(e) => setDateApplied(e.target.value)}
                    placeholder={t.demo.datePlaceholder}
                    className="w-full text-xs bg-white border border-[#d5dbe4] rounded-md px-3 py-2 text-foreground focus:ring-1 focus:ring-[#14213d] focus:outline-none"
                  />
                  <p className="text-[11px] text-[#626976] mt-1">
                    {t.demo.dateHint}
                  </p>
                </div>

                <div className="pt-1">
                  <Button
                    type="submit"
                    disabled={isSaving}
                    className="w-full bg-[#14213d] hover:bg-[#1e2f54] text-white font-semibold text-xs py-2.5 rounded-md transition-all flex items-center justify-center gap-2"
                  >
                    {isSaving ? (
                      <span>{t.demo.btnSaving}</span>
                    ) : justSaved ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>{t.demo.btnSaved}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.demo.btnSave}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </Button>
                </div>

                {justSaved && (
                  <div className="p-2.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in duration-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{t.demo.successMsg}</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column: Simulated Google Sheet Live Table (7 cols) */}
          <div className="lg:col-span-7 bg-card border rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
            {/* Sheet Toolbar Header */}
            <div className="bg-[#f9fbfd] border-b p-3.5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-xs">
                  <Sheet className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-foreground flex items-center gap-2">
                    <span>{t.demo.sheetTitle}</span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border">
                      {t.demo.sheetOwner}
                    </span>
                  </h4>
                  <p className="text-[11px] text-muted-foreground">
                    {t.demo.sheetSub}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleReset}
                  className="text-xs text-muted-foreground hover:text-foreground h-8 px-2 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{t.demo.sheetReset}</span>
                </Button>
              </div>
            </div>

            {/* Interactive Sheet Table */}
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-muted/50 border-b text-muted-foreground font-semibold">
                    <th className="py-2.5 px-3 w-10 text-center">{t.demo.colNumber}</th>
                    <th className="py-2.5 px-3">{t.demo.colRole}</th>
                    <th className="py-2.5 px-3">{t.demo.colCompany}</th>
                    <th className="py-2.5 px-3">{t.demo.colDate}</th>
                    <th className="py-2.5 px-3">{t.demo.colStatus}</th>
                    <th className="py-2.5 px-3">{t.demo.colLink}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {savedRows.map((row, index) => {
                    const isNewest = index === 0 && justSaved;
                    return (
                      <tr
                        key={row.id}
                        className={`transition-colors ${
                          isNewest
                            ? "bg-emerald-50 dark:bg-emerald-950/40 animate-in fade-in duration-500"
                            : "hover:bg-muted/30"
                        }`}
                      >
                        <td className="py-2.5 px-3 text-center text-muted-foreground font-mono">
                          {savedRows.length - index}
                        </td>
                        <td className="py-2.5 px-3 font-medium text-foreground">
                          {row.role}
                          {isNewest && (
                            <span className="ml-1.5 text-[9px] font-bold text-emerald-700 bg-emerald-200 px-1.5 py-0.5 rounded">
                              {t.demo.badgeNew}
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 px-3 text-muted-foreground">
                          {row.company}
                        </td>
                        <td className="py-2.5 px-3 text-muted-foreground">
                          {row.date}
                        </td>
                        <td className="py-2.5 px-3">
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                              row.status === "Interview"
                                ? "bg-blue-100 text-blue-800 border border-blue-200"
                                : row.status === "Offer"
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                : "bg-amber-100 text-amber-800 border border-amber-200"
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-3">
                          <a
                            href={row.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0061e9] hover:underline flex items-center gap-1 text-[11px]"
                          >
                            <span>{t.demo.linkOpen}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Sheet Footer Information */}
            <div className="p-3 border-t bg-muted/20 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.demo.sheetFooterNote}</span>
              </div>
              <span className="text-[11px] font-mono text-muted-foreground">
                {t.demo.totalRecords} {savedRows.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
