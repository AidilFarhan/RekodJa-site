import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

interface LegalModalProps {
  type: "privacy" | "terms" | null;
  isOpen: boolean;
  onClose: () => void;
}

export function LegalModal({ type, isOpen, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto p-6 md:p-8">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold">
            {type === "privacy" ? "Privacy Policy" : "Terms of Service"}
          </DialogTitle>
          <p className="text-xs text-muted-foreground">
            {type === "privacy" ? "Last updated: 24 September 2026" : "Last updated: 15 September 2026"}
          </p>
        </DialogHeader>

        {type === "privacy" ? (
          <div className="space-y-4 text-sm text-foreground/90 leading-relaxed">
            <section>
              <h4 className="font-semibold text-base mb-1">What RekodJa does</h4>
              <p>
                RekodJa: Job Tracker is a lightweight Chrome extension that lets you save job postings
                directly into a Google Sheet you choose, along with your application date. When you click
                the extension icon while viewing a job, it parses metadata (company name, role, URL) and appends
                a new row into your selected Google Sheet.
              </p>
            </section>

            <section>
              <h4 className="font-semibold text-base mb-1">What data we access</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Google Sheets data:</strong> With your permission (via Google OAuth), the extension reads and writes only to the specific spreadsheet ID you configure. It never accesses any other file in your Google Drive.
                </li>
                <li>
                  <strong>Current tab content:</strong> Only when you click the extension popup does it extract the job title, company name, and page URL. It does not monitor background browsing.
                </li>
              </ul>
            </section>

            <section>
              <h4 className="font-semibold text-base mb-1">What we never do (Zero Server Promise)</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>We do not operate a backend server to store your job listings. All network calls go directly from your browser to Google Sheets API.</li>
                <li>We never store, log, sell, or share your job application history with any third parties.</li>
                <li>We do not access your Gmail, contacts, calendar, or Google Drive files outside your specified sheet.</li>
              </ul>
            </section>

            <section>
              <h4 className="font-semibold text-base mb-1">Data retention & Control</h4>
              <p>
                Your job records live exclusively in your own Google Sheet. You can revoke access at any time via your{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline font-medium"
                >
                  Google Account Permissions
                </a>.
              </p>
            </section>

            <section className="pt-2 border-t">
              <p className="text-xs text-muted-foreground">
                Inquiries or questions: <a href="mailto:aidilfarhanjas@gmail.com" className="underline">aidilfarhanjas@gmail.com</a>
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-4 text-sm text-foreground/90 leading-relaxed">
            <section>
              <h4 className="font-semibold text-base mb-1">Acceptance of Terms</h4>
              <p>
                By installing or using RekodJa: Job Tracker, you agree to these terms.
              </p>
            </section>

            <section>
              <h4 className="font-semibold text-base mb-1">The Service</h4>
              <p>
                RekodJa is a client-side Chrome extension designed to assist individuals in organizing their job search
                by capturing job posting details into their own Google Sheets. You are responsible for reviewing details
                before saving and maintaining your own Google Sheet.
              </p>
            </section>

            <section>
              <h4 className="font-semibold text-base mb-1">Google Account Connection</h4>
              <p>
                You choose whether to authorize your Google Account for Google Sheets API access. You may disconnect or revoke
                authorization at any moment. RekodJa is not affiliated with Google LLC, LinkedIn, JobStreet, or Indeed.
              </p>
            </section>

            <section>
              <h4 className="font-semibold text-base mb-1">Acceptable Use & Warranty</h4>
              <p>
                Use the extension lawfully and only for personal application tracking. The tool is provided "as is" without warranty
                of any kind.
              </p>
            </section>

            <section className="pt-2 border-t">
              <p className="text-xs text-muted-foreground">
                Contact: <a href="mailto:aidilfarhanjas@gmail.com" className="underline">aidilfarhanjas@gmail.com</a>
              </p>
            </section>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
