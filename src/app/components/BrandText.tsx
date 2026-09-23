import logo from "../../imports/rekodja-logo-hitam.png";

export function BrandLogo() {
  return <img src={logo} alt="RekodJa" className="h-12 w-auto max-w-[160px] object-contain" />;
}

export function RekodJa() {
  return <span className="rekodja-wordmark"><b>Rekod</b><i>Ja</i></span>;
}

export function GoogleSheet() {
  return <>Google <span className="google-sheet-green">Sheet</span></>;
}

const exampleSheetId = "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms";

export function BrandText({ text, boldSheetId = false }: { text: string; boldSheetId?: boolean }) {
  return <>{text.split(/(RekodJa|Google Sheets?|1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms)/g).map((part, index) => {
    if (part === "RekodJa") return <RekodJa key={index} />;
    if (part === "Google Sheet" || part === "Google Sheets") return <span key={index}>Google <span className="google-sheet-green">{part.slice(7)}</span></span>;
    if (boldSheetId && part === exampleSheetId) return <strong key={index} className="font-bold break-all">{part}</strong>;
    return part;
  })}</>;
}
