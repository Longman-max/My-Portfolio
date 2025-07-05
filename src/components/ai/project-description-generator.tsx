"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateProjectDescription } from '@/ai/flows/generate-project-description';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  projectName: z.string().min(1, 'Project name is required.'),
  projectType: z.string().min(1, 'Project type is required.'),
  projectSkills: z.string().min(1, 'Please list the skills or technologies used.'),
  projectDescriptionKeywords: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ProjectDescriptionGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState('');
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: '',
      projectType: '',
      projectSkills: '',
      projectDescriptionKeywords: '',
    },
  });

  const onSubmit = async (values: FormData) => {
    setIsLoading(true);
    setGeneratedDescription('');
    try {
      const result = await generateProjectDescription(values);
      setGeneratedDescription(result.projectDescription);
    } catch (error) {
      console.error('Error generating description:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate project description. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Profolio App" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Web Application" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="projectSkills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skills/Technologies Used</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., React, Next.js, TypeScript" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectDescriptionKeywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keywords (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., minimalist, responsive, AI" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Description
                </>
              )}
            </Button>
          </form>
        </Form>

        {(isLoading || generatedDescription) && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-2">Generated Description:</h4>
            <Card className="bg-muted/50">
              <CardContent className="p-4">
                {isLoading ? (
                  <div className="space-y-2">
                    <div className="h-4 bg-muted-foreground/10 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-muted-foreground/10 rounded w-5/6 animate-pulse"></div>
                    <div className="h-4 bg-muted-foreground/10 rounded w-3/4 animate-pulse"></div>
                  </div>
                ) : (
                  <p className="text-sm text-foreground/80">{generatedDescription}</p>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
