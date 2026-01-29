import { Target, Search, Users, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import aboutImage from "@/assets/about-image.jpeg";

const aims = [
  { icon: Target, text: "To promote fair and inclusive dialogue" },
  { icon: Search, text: "To question selective activism" },
  { icon: Users, text: "To encourage gender cooperation instead of conflict" },
];

const approaches = [
  "Research-based arguments",
  "Ethical media practices",
  "Diverse viewpoints",
  "Respectful critique",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">About the Campaign</h1>
            <p className="text-xl text-muted-foreground">
              Understanding our mission, approach, and commitment to balanced dialogue.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={aboutImage} 
                alt="Campaign visual" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="accent-border-left">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Equality or Bias?</strong> is an academic media campaign 
                  developed to critically analyze modern feminist discourse, particularly its portrayal on 
                  social media and digital platforms.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                This campaign does not oppose women's rights. Instead, it raises concerns about how 
                contemporary feminist narratives sometimes promote gender conflict, selective equality, 
                and one-sided perspectives that overlook broader social realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Aim */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <h2 className="text-center mb-12">Our Aim</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {aims.map((aim, index) => (
              <div key={index} className="feature-card text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                  <aim.icon className="w-7 h-7" />
                </div>
                <p className="font-medium text-foreground">{aim.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Our Approach</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {approaches.map((approach, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="font-medium">{approach}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <blockquote className="text-2xl md:text-3xl italic mb-6" style={{ fontFamily: 'var(--heading-font)' }}>
              "Critiquing a movement does not mean rejecting equality — it means protecting it."
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
