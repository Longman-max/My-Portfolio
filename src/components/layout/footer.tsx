import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import MatrixAnimation from '../ui/matrix-animation';

const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MatrixAnimation />
      </div>
      <div className="relative z-10 container py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {currentYear} Obasi's Portfolio. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <XLogo className="h-5 w-5" />
            <span className="sr-only">X (formerly Twitter)</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}