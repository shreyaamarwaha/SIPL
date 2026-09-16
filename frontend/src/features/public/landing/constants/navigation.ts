import { NavItem, FooterSection } from "@/features/public/landing/types/navigation";

export const MAIN_NAV: NavItem[] = [
  { label: "Company", href: "/about" },
  { label: "Capabilities", href: "/#solutions" },
  { label: "Platforms", href: "/solutions" },
  { label: "Research", href: "/research" },
  { label: "LifeBack", href: "/solutions/lifeback-voice" },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Research & Trust",
    links: [
      { label: "Research First", href: "/research" },
      { label: "Privacy First", href: "/about#privacy" },
      { label: "Human-in-the-Loop AI", href: "/about#mission" },
    ],
  },
];
