import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: Request) {
  try {
    const { subject } = await request.json();

    if (!subject) {
      return NextResponse.json(
        { error: 'Subject is required' },
        { status: 400 }
      );
    }

    // Use the Gemini 1.5 Flash model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `Generate a professional email body based on the subject: "${subject}". 
    The email should be well-structured with proper greeting, body content, and closing. 
    Format it as Markdown.
    Keep it concise but informative.
    
    response example:
    # heading1
    ## heading2
    - bullet point 1
    - bullet point 2

    Ensure the content is engaging and suitable for a marketing email.
    Ensure the response is in Markdown format with appropriate tags and add inner line styles to make more structured and beautiful.

    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Clean up the response and ensure it's proper HTML
    let htmlContent = text.replace(/```html/g, '').replace(/```/g, '').trim();
    
    // Basic check if the response doesn't contain HTML tags
    if (!/<[a-z][\s\S]*>/i.test(htmlContent)) {
      htmlContent = `<p>${htmlContent.replace(/\n/g, '</p><p>')}</p>`;
    }

    return NextResponse.json({ content: htmlContent });
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}