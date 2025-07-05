import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageHint: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  imageHint,
  tags,
  liveUrl,
  repoUrl,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-0">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-48"
          data-ai-hint={imageHint}
        />
      </CardContent>
      <div className="p-6 flex flex-col flex-grow">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="font-headline text-xl">{title}</CardTitle>
          <CardDescription className="pt-2">{description}</CardDescription>
        </CardHeader>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <CardFooter className="p-0 mt-auto">
          <div className="flex items-center space-x-2">
            {liveUrl && (
              <Button asChild variant="outline" size="sm">
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {repoUrl && (
              <Button asChild variant="secondary" size="sm">
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
