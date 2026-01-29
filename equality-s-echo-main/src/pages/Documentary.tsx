import { Film, CheckCircle, Lightbulb } from "lucide-react";
import Layout from "@/components/layout/Layout";
import documentaryImage from "@/assets/documentary-image.jpeg";

const coveragePoints = [
  "The original goals of feminism",
  "The rise of social media feminism",
  "Selective representation of gender issues",
  "Public perceptions and campus opinions",
  "The impact of gender-based narratives on society",
];

const Documentary = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
              <Film className="w-8 h-8" />
            </div>
            <h1 className="mb-6">Documentary: Equality or Bias?</h1>
            <p className="text-xl text-muted-foreground">
              A critical exploration of feminism's transformation in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={documentaryImage} 
                alt="Documentary preview" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl">About the Documentary</h2>
              <div className="accent-border-left">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This short documentary critically explores the transformation of feminism from a 
                  rights-based movement into a powerful digital narrative that often shapes public 
                  opinion through emotion, outrage, and viral trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Covers */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">What the Documentary Covers</h2>
            <div className="space-y-4">
              {coveragePoints.map((point, index) => (
                <div key={index} className="flex items-center gap-4 bg-card p-5 rounded-lg border border-border">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent flex-shrink-0">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl mb-4">Why This Documentary Matters</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    In a world driven by hashtags and viral content, critical thinking has become more 
                    important than ever. This documentary invites viewers to reflect, question, and 
                    engage — rather than choose sides blindly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl italic" style={{ fontFamily: 'var(--heading-font)' }}>
              "True equality cannot exist where dialogue is replaced by division."
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Documentary;
