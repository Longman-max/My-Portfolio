import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-center">
          <div className="flex justify-center">
            <Card className="overflow-hidden rounded-xl">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/600x600.png"
                  alt="Portrait of Obasi Agbai"
                  width={600}
                  height={600}
                  className="object-cover"
                  data-ai-hint="portrait"
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a passionate and results-oriented developer with a knack for creating engaging user experiences. With a strong foundation in modern web technologies, I specialize in bringing ideas to life through clean, efficient, and scalable code. My journey in tech is driven by a constant curiosity and a desire to solve real-world problems.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              When I'm not coding, you can find me exploring the latest design trends, contributing to open-source projects, or enjoying a good cup of coffee. I am always eager to take on new challenges and collaborate with creative minds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
