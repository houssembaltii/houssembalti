import csLogo from "@/assets/cs-color-logotype.png";
import forkitLogo from "@/assets/icon-background.svg";

export const SITE = {
  name: "Houssem Balti",
  title: "Full Stack Developer",
  description:
    "Full Stack Developer at CamelStudio. Crafting clean, reliable, and performance-driven web applications.",
  tagline: "Professional bug fixer, passionate gamer, and the only employee at a company run entirely by two cats.",
  url: "https://houssembalti.dev",
  email: "houssem@example.com",
} as const;

export const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/houssem-balti/" },
  { label: "Instagram", href: "https://instagram.com/houssem__balti/" },
  { label: "GitHub", href: "https://github.com/houssembaltii" },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Work" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
] as const;

export const EXPERIENCES = [
  {
    role: "Full Stack Developer",
    org: "CamelStudio",
    href: "https://camelstudio.tech/",
    period: "Aug 2024 – Present",
    logo: csLogo,
    logoAlt: "CamelStudio",
  },
  {
    role: "Fork It Community",
    org: "Active Volunteer",
    href: "https://www.forkit.community/",
    period: "2025 – Present",
    logo: forkitLogo,
    logoAlt: "Fork It Community",
  },
] as const;

export const TALKS = [
  {
    title: "Is Code Refactoring Scary?",
    event: "Fork It Community Event",
    date: "January 2025",
    location: "Tunisia, Nabeul",
    href: "https://www.forkit.community/events/2025-tunisia-nabeul",
  },
] as const;

export const LOCATION = {
  country: "Tunisia",
} as const;