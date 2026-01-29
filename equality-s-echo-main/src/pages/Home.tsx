import { Link } from "react-router-dom";
import { Brain, Scale, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpeg";

const features = [
  {
    icon: Brain,
    title: "Critical Thinking",
    description: "Encouraging people to question dominant narratives rather than accept them blindly.",
  },
  {
    icon: Scale,
    title: "Balanced Equality",
    description: "Advocating fairness for all genders — without silencing any voice.",
  },
  {
    icon: MessageSquare,
    title: "Media Responsibility",
    description: "Examining how social media amplifies outrage instead of dialogue.",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-overlay)/0.85)] via-[hsl(var(--hero-overlay)/0.75)] to-[hsl(var(--hero-overlay)/0.9)]" />
        
        {/* Content */}
        <div className="relative z-10 section-container text-center text-white py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Equality or Bias?
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-light opacity-90" style={{ fontFamily: 'var(--heading-font)' }}>
            Rethinking Modern Feminism in the Digital Age
          </p>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-80 mb-8">
            A critical media campaign examining how modern feminist narratives have shifted from equality to selective bias — and why balanced dialogue matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
              <Link to="/documentary">Watch Documentary</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">Understanding the Shift</h2>
            <div className="accent-border-left text-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Feminism began as a movement for justice and equal rights. However, in today's digital world, 
                many argue that modern feminism has evolved into something more divisive than inclusive. 
                Through research, media analysis, and public opinion, this campaign questions whether the 
                original goal of equality is still being upheld — or replaced by bias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-center mb-12">Our Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl italic mb-6" style={{ fontFamily: 'var(--heading-font)' }}>
              "True equality cannot exist where dialogue is replaced by division."
            </blockquote>
            <p className="opacity-80">— Equality or Bias? Campaign</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container text-center">
          <h2 className="mb-6">Join the Conversation</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you agree or disagree, your perspective matters. Explore our research, 
            watch our documentary, and share your thoughts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/articles">Read Articles</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Share Your View</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
