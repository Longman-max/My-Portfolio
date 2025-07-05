'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(formData: unknown) {
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map(issue => issue.message).join(' ');
    return { success: false, message: `Invalid form data: ${errorMessages}` };
  }

  try {
    // In a real application, you would integrate with an email service (e.g., SendGrid, Resend)
    // or save the message to a database.
    console.log('New contact form submission:');
    console.log('Name:', parsed.data.name);
    console.log('Email:', parsed.data.email);
    console.log('Message:', parsed.data.message);

    // Simulate a successful submission
    return { success: true, message: 'Thank you for your message!' };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }
}
