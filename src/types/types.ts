interface NavLink {
    label: string;
    href: string;
}

interface CtaButton {
    label: string;
    onClick: () => void;
}

export interface HeaderProps {
    logoText: string;
    navLinks: NavLink[];
    ctaButton?: CtaButton;
}