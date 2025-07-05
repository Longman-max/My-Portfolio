import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-48 bg-card">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
            Jane Doe
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            A creative developer passionate about building beautiful and functional web applications.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
