import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MatrixAnimation from '@/components/ui/matrix-animation';

export default function Hero() {
  return (
    <section id="home" className="relative w-full py-20 md:py-24 lg:py-28 overflow-hidden">
      <MatrixAnimation />
      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
              Obasi Agbai
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A creative developer passionate about building beautiful and functional web applications.
            </p>
          </div>
          
          <div className="flex justify-center">
             <Card className="overflow-hidden rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md bg-background/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/600x600.png"
                  alt="Portrait of Obasi Agbai"
                  width={600}
                  height={600}
                  className="object-cover aspect-square"
                  data-ai-hint="portrait"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 text-muted-foreground md:text-lg/relaxed max-w-3xl">
            <p>
                I am a passionate and results-oriented developer with a knack for creating engaging user experiences. With a strong foundation in modern web technologies, I specialize in bringing ideas to life through clean, efficient, and scalable code. My journey in tech is driven by a constant curiosity and a desire to solve real-world problems.
            </p>
            <p>
                When I'm not coding, you can find me exploring the latest design trends, contributing to open-source projects, or enjoying a good cup of coffee. I am always eager to take on new challenges and collaborate with creative minds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
