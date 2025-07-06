import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MatrixAnimation from '@/components/ui/matrix-animation';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full py-16 md:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] z-0">
        <MatrixAnimation />
      </div>
      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex justify-center">
             <Card className="overflow-hidden rounded-full shadow-lg w-full max-w-[250px] bg-background/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/250x250.png"
                  alt="Portrait of Obasi"
                  width={250}
                  height={250}
                  className="object-cover aspect-square"
                  data-ai-hint="portrait"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 text-foreground/90 md:text-lg/relaxed max-w-3xl">
            <p>
                I am a passionate and results-oriented developer with a knack for creating engaging user experiences. With a strong foundation in modern web technologies, I specialize in bringing ideas to life through clean, efficient, and scalable code. My journey in tech is driven by a constant curiosity and a desire to solve real-world problems.
            </p>
            <p>
                When I'm not coding, you can find me exploring the latest design trends, contributing to open-source projects, or enjoying a good cup of coffee. I am always eager to take on new challenges and collaborate with creative minds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="shadow-[0_0_15px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)] transition-shadow duration-300"
            >
              <Link href="#">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
