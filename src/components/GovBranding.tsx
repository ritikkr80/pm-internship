import { Flag } from "lucide-react";

export const GovBranding = () => {
  return (
    <div className="flex items-center gap-3 py-2 px-4 bg-gradient-to-r from-accent/10 via-background to-success/10 border-b border-border">
      <Flag className="w-5 h-5 text-primary" />
      <div className="text-sm">
        <span className="font-semibold text-foreground">Government of India</span>
        <span className="text-muted-foreground mx-2">|</span>
        <span className="text-muted-foreground">PM Internship Scheme</span>
      </div>
    </div>
  );
};
