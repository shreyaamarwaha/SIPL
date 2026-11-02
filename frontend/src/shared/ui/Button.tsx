import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/shared/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  appearance?: "platform" | "sipl";
}

export const requestDemoLinkStyles =
  "inline-flex min-h-13 items-center justify-center rounded-[10px] border border-[#001B65] bg-[#001B65] px-7 font-heading text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_28px_rgba(0,27,101,0.14)] transition-colors hover:border-[#D4AF37] hover:bg-[#00164F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F8FC]";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", appearance = "platform", ...props }, ref) => {
    const isSipl = appearance === "sipl";
    const baseStyles = `inline-flex items-center justify-center rounded-[8px] font-heading font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 ${isSipl ? "focus-visible:ring-[#8931C4]" : "focus-visible:ring-[#D4AF37]"} focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F8FC] disabled:pointer-events-none disabled:opacity-50`;

    const platformVariants = {
      primary: "border border-[#001B65] bg-[#001B65] text-white shadow-[0_14px_34px_rgba(0,27,101,0.16)] hover:border-[#D4AF37] hover:bg-[#00164F]",
      secondary: "border border-[#D4AF37] bg-transparent text-[#001B65] hover:bg-[#D4AF37]/10",
      outline: "border border-transparent bg-[#001B65] text-white shadow-[0_8px_20px_rgba(0,27,101,0.15)] hover:border-[#34B7C3] hover:bg-[#001B65]",
      ghost: "text-[#001B65] hover:bg-[#001B65]/5",
    };
    const siplVariants = {
      primary: "border border-[#071D66] bg-[#071D66] text-white shadow-[0_14px_34px_rgba(7,29,102,0.22)] hover:border-[#0B2C84] hover:bg-[#0B2C84]",
      secondary: "border border-[#071D66] bg-transparent text-[#131313] hover:bg-[#071D66]/10",
      outline: "border border-[#131313]/28 bg-white/55 text-[#131313] hover:border-[#071D66] hover:bg-[#EDEDED]",
      ghost: "text-[#131313] hover:bg-[#071D66]/5",
    };
    const sizes = {
      sm: "h-10 px-5 text-[13px]",
      md: "h-12 px-6 text-[15px]",
      lg: "h-14 px-8 text-[15px] md:px-9",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, (isSipl ? siplVariants : platformVariants)[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
