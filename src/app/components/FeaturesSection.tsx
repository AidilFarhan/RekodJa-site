import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Chrome, Sheet, Briefcase, MousePointerClick, CheckCircle2, PlayCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { BrandText } from "./BrandText";
import step1Image from "../../imports/how-step-1.png";
import step4Image from "../../imports/how-step-4.png";
import step5Image from "../../imports/how-step-5.png";

const steps = [
  {
    number: "01",
    icon: Chrome,
    title: "Add to Chrome",
    shortDesc: "Install from the Chrome Web Store and pin the extension.",
    fullDesc:
      "Head to the Chrome Web Store and search for 'RekodJa', or follow the direct link. Click 'Add to Chrome' and confirm the permissions prompt. The extension will appear in your browser toolbar.",
    example:
      "After installing, click the puzzle-piece icon (🧩) in the top-right corner of Chrome. Find RekodJa in the list and click the pin icon to keep it permanently visible in your toolbar — this makes it one click away on any job page.",
    image:
      step1Image,
    screenshot: true,
    videoUrl: "https://www.youtube.com/results?search_query=how+to+install+chrome+extension+pin+toolbar",
    videoLabel: "Watch: Installing & pinning a Chrome extension",
  },
  {
    number: "02",
    icon: Sheet,
    title: "Connect Your Google Sheet",
    shortDesc: "Paste your Sheet ID into the extension settings.",
    fullDesc:
      "Open any Google Sheet (or create a new blank one). Look at the URL in your browser's address bar — the Sheet ID is the long string of letters and numbers between /d/ and /edit.",
    example:
      "For a URL like docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms/edit, the ID is 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms. Copy that and paste it into the RekodJa extension popup. RekodJa will ask for Google permission to write to that sheet — only that sheet.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    videoUrl: "https://www.youtube.com/results?search_query=how+to+find+google+sheets+id+url",
    videoLabel: "Watch: How to find your Google Sheet ID",
  },
  {
    number: "03",
    icon: Briefcase,
    title: "Open an Individual Job Posting",
    shortDesc: "Navigate to a single job listing on LinkedIn, JobStreet, or Indeed.",
    fullDesc:
      "RekodJa works on individual job detail pages — not on search results pages. Open a listing that shows the full job description, company name, and location. The supported platforms are LinkedIn, JobStreet, and Indeed.",
    example:
      "On LinkedIn: search for jobs → click a job title → you'll land on a page showing the full description with 'Apply' or 'Easy Apply'. That's the right page. On Indeed: from search results, click the job card and the detail pane on the right counts too.",
    image:
      "https://images.unsplash.com/photo-1712217559097-cc2aaf698767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    videoUrl: "https://www.youtube.com/results?search_query=linkedin+job+search+tips+2024",
    videoLabel: "Watch: Navigating LinkedIn job listings",
  },
  {
    number: "04",
    icon: MousePointerClick,
    title: "Click the Extension Icon",
    shortDesc: "Open the RekodJa popup and review the captured details.",
    fullDesc:
      "Click the RekodJa icon in your toolbar. The popup will automatically pull the job title, company name, and page URL from the current tab and display them for you to review. You can also enter the date you applied.",
    example:
      "The popup shows three fields: Job Title (auto-filled), Company (auto-filled), and Date Applied (defaults to today — change it if you applied earlier). Double-check the link points to the correct job before saving.",
    image:
      step4Image,
    screenshot: true,
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Click Save",
    shortDesc: "One click and the job is in your Google Sheet.",
    fullDesc:
      "Hit the Save button. RekodJa writes a new row directly to your Google Sheet — no server involved, no account needed. You'll see a 'Saved to tracker!' confirmation in the popup, and the row appears instantly in your sheet.",
    example:
      "Each saved row includes: Job Title, Company, Job URL, and Date Applied. You can add your own columns like Status, Notes, or Follow-up Date directly in the sheet — RekodJa only writes to the columns it knows about.",
    image:
      step5Image,
    screenshot: true,
  },
];

export function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = steps[activeIndex];

  return (
    <section id="how-it-works" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Five steps and your job applications live in a spreadsheet you already own.
            No account required, no subscription — just install and go.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Left: step tabs */}
          <div className="lg:col-span-2 space-y-2">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  onHoverStart={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`cursor-pointer rounded-2xl border p-4 transition-colors select-none ${
                    isActive
                      ? "bg-card border-primary shadow-md"
                      : "bg-card/60 border-border hover:bg-card"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive ? "bg-primary" : "bg-primary/10"
                      }`}
                    >
                      <step.icon
                        className={`h-4 w-4 transition-colors ${
                          isActive ? "text-primary-foreground" : "text-primary"
                        }`}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground font-mono mb-0.5">
                        Step {step.number}
                      </div>
                      <div className="font-medium text-sm leading-snug"><BrandText text={step.title} /></div>
                    </div>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-auto flex-shrink-0"
                      >
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: detail panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="rounded-3xl border bg-card overflow-hidden shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={active.image}
                    alt={active.title}
                    className={`w-full h-full ${active.screenshot ? "object-contain" : "object-cover"}`}
                  />
                  {!active.screenshot && <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <span className="text-xs font-mono bg-background/80 backdrop-blur px-2 py-1 rounded-full text-muted-foreground">
                      Step {active.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold"><BrandText text={active.title} /></h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <BrandText text={active.fullDesc} />
                  </p>

                  {/* Example box */}
                  <div className="rounded-xl bg-muted/60 border border-border p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Example
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed break-words"><BrandText text={active.example} boldSheetId={active.number === "02"} /></p>
                  </div>

                  {/* Video link */}
                  {active.videoUrl && active.videoLabel && <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                    <a
                      href={active.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <PlayCircle className="h-4 w-4 text-red-500" />
                      <BrandText text={active.videoLabel} />
                    </a>
                  </Button>}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
