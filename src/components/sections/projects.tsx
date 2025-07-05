import ProjectCard from '@/components/project-card';
import ProjectDescriptionGenerator from '@/components/ai/project-description-generator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Wand2 } from 'lucide-react';

const projects = [
  {
    title: 'Social Media App',
    description: 'A social media application with features like user profiles, posts, comments, and a real-time feed.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React Native', 'Firebase', 'GraphQL'],
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'social media',
  },
  {
    title: 'Music Player App',
    description: 'An intuitive music player application with playlist management, playback controls, and a sleek, modern interface. Built with performance and user experience in mind.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'TypeScript', 'Node.js', 'Spotify API'],
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'music player',
  },
  {
    title: 'Diabetes Predictor Web App',
    description: 'A machine learning application that predicts the likelihood of diabetes based on health metrics. Built with Python, Flask, and a model developed in a Jupyter Notebook.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Flask', 'Python', 'Jupyter Notebook'],
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'health data',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'A web app for visualizing complex datasets with interactive charts and graphs using D3.js.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'D3.js', 'Node.js', 'Express'],
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'data visualization',
  },
  {
    title: 'Task Management App',
    description: 'A responsive task management application to help users organize their daily tasks and boost productivity.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Vue.js', 'Firebase', 'Vuetify'],
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'mobile application',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Here are some of the projects I've worked on. Feel free to explore them.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
           <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-accent-foreground" />
                  <h3 className="text-xl font-headline font-semibold">AI Project Description Generator</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  Need help writing a compelling project description? Use this AI-powered tool to generate one based on your project details.
                </p>
                <ProjectDescriptionGenerator />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
