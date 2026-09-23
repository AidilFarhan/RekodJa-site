import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ShieldCheck, Server, Lock, BarChart3, Mail, Bell } from "lucide-react";

const privacyPoints = [
  {
    icon: ShieldCheck,
    title: "No Developer Server",
    description:
      "RekodJa never touches our servers. Your job data flows directly from your browser to your Google Sheet via your own Google account — we never see it.",
  },
  {
    icon: Server,
    title: "Your Sheet, Your Rules",
    description:
      "The data lives in a Google Sheet you own and control. Move it, share it, delete it — it's completely yours.",
  },
  {
    icon: Lock,
    title: "OAuth Permissions Only",
    description:
      "We request only the minimum Google permissions required to write to the specific sheet you choose. Nothing else.",
  },
];

const companionFeatures = [
  {
    icon: Bell,
    title: "Follow-up Reminders",
    description: "Get notified when it's time to follow up on an application you haven't heard back from.",
  },
  {
    icon: Mail,
    title: "Email Drafting",
    description: "Generate follow-up emails tailored to each job posting with one click.",
  },
  {
    icon: BarChart3,
    title: "Application Analytics",
    description: "See your application activity over time — response rates, interview conversion, and more.",
  },
];

export function PricingSection() {
  return (
    <section id="privacy" className="py-20">
      <div className="container mx-auto px-4">
        {/* Privacy section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Your data never leaves your hands
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Privacy is not a feature — it is the architecture. RekodJa was designed so that
            no one, including us, can ever see your job search data.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
          {privacyPoints.map((point, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                  <point.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Companion web app section */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border bg-muted/30 p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
                  Companion Web App
                </p>
                <h3 className="text-3xl md:text-4xl tracking-tight mb-4">
                  Do more with your applications at{" "}
                  <span className="text-primary">app.rekodja.com</span>
                </h3>
                <p className="text-muted-foreground mb-8">
                  The Chrome extension captures your jobs. The web app helps you act on them —
                  with reminders, AI-drafted follow-ups, and insights into your job search progress.
                </p>
                <Button asChild>
                  <a href="https://app.rekodja.com" target="_blank" rel="noopener noreferrer">
                    Try the Web App
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {companionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-background border">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm mb-1">{feature.title}</div>
                      <div className="text-xs text-muted-foreground">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
