import { Separator } from "./ui/separator";
import { BrandLogo, RekodJa, GoogleSheet } from "./BrandText";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div className="max-w-sm">
            <div className="flex items-center space-x-2 mb-4">
              <BrandLogo />
            </div>
            <p className="text-muted-foreground text-sm">
              A Chrome extension that saves job postings directly to your <GoogleSheet />.
              Your data, your sheet, your rules.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="font-medium mb-4 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#how-it-works" className="hover:text-foreground transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="https://chromewebstore.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Chrome Extension
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.rekodja.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Web App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <p className="text-sm text-muted-foreground">
          © 2026 <RekodJa />. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
