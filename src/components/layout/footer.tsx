import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import MatrixAnimation from '../ui/matrix-animation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MatrixAnimation />
      </div>
      <div className="relative z-10 container py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {currentYear} Profolio. All Rights Reserved.
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
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
