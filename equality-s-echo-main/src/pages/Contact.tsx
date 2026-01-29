import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h1 className="mb-6">Contact & Feedback</h1>
            <p className="text-xl text-muted-foreground">
              We believe dialogue is essential for social progress.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            {/* Intro Text */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-accent" />
                <span className="text-lg font-medium">Your Voice Matters</span>
              </div>
              <p className="text-muted-foreground text-lg">
                Whether you agree or disagree with our campaign, your voice matters. 
                Respectful conversation leads to understanding — and understanding leads to change.
              </p>
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Your name" 
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message / Opinion</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Share your thoughts, questions, or feedback..."
                    rows={6}
                    className="bg-background resize-none"
                  />
                </div>

                <Button type="button" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  This is a display-only form. Functionality can be added later.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl italic" style={{ fontFamily: 'var(--heading-font)' }}>
              "Disagreement is not division — silence is."
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
