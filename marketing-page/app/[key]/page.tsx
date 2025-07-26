"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Send, Loader2, Wand2 } from 'lucide-react';
import MDEditor from '@uiw/react-md-editor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

export default function EmailSendPage() {
    const router = useRouter();
    const [isValidKey, setIsValidKey] = useState<boolean | null>(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [formData, setFormData] = useState({
        from: 'offer@deal4bank.online',
        to: '',
        subject: '',
        content: '',
    });

    // useEffect(() => {
    //     // Validate the key against environment variable
    //     if (params.key !== process.env.NEXT_PUBLIC_EMAIL_KEY) {
    //         setIsValidKey(false);
    //         toast.error('Invalid access key');
    //         router.push('/');
    //     } else {
    //         setIsValidKey(true);
    //     }
    // }, [params, router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleContentChange = (value: string | undefined) => {
        setFormData(prev => ({
            ...prev,
            content: value || '',
        }));
    };

    const generateContentWithAI = async () => {
        if (!formData.subject) {
            toast.warning('Please enter a subject to generate content');
            return;
        }

        setIsGenerating(true);
        try {
            const response = await fetch('/api/generate-email-content', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subject: formData.subject,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to generate content');
            }

            const data = await response.json();
            setFormData(prev => ({
                ...prev,
                content: data.content,
            }));
            toast.success('Content generated successfully');
        } catch (error) {
            toast.error('Failed to generate content');
            console.error(error);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            toast.success('Email sent successfully!');
            setFormData({
                from: '',
                to: '',
                subject: '',
                content: '',
            });
        } catch (error) {
            toast.error('Failed to send email');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isValidKey === null) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="w-8 h-8 animate-spin" />
            </div>
        );
    }

    if (!isValidKey) {
        return null;
    }

    return (
        <div className="container mx-auto py-8">
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Mail className="w-6 h-6" />
                        <CardTitle>Send Email</CardTitle>
                    </div>
                    <CardDescription>Compose and send your email</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="from">From</Label>
                                <Input
                                    id="from"
                                    name="from"
                                    type="email"
                                    required
                                    value={formData.from}
                                    onChange={handleChange}
                                    placeholder="sender@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="to">To</Label>
                                <Input
                                    id="to"
                                    name="to"
                                    type="email"
                                    required
                                    value={formData.to}
                                    onChange={handleChange}
                                    placeholder="recipient@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <div className="flex gap-2">
                                <Input
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Email subject"
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={generateContentWithAI}
                                    disabled={isGenerating || !formData.subject}
                                >
                                    {isGenerating ? (
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    ) : (
                                        <Wand2 className="w-4 h-4 mr-2" />
                                    )}
                                    Generate with AI
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="content">Content</Label>
                            <div data-color-mode="light">
                                <MDEditor
                                    value={formData.content}
                                    onChange={handleContentChange}
                                    height={400}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? (
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                ) : (
                                    <Send className="w-4 h-4 mr-2" />
                                )}
                                Send Email
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}