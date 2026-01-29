import { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import articlesImage from "@/assets/articles-image.jpeg";

const articles = [
  {
    id: 1,
    title: "From Equality to Bias: The Transformation of Modern Feminism",
    sections: [
      {
        heading: "Introduction",
        content: "Feminism originally emerged as a movement aimed at achieving equal rights and opportunities for women in societies where they were legally and socially marginalized. From voting rights to workplace equality, early feminist movements played a crucial role in reshaping modern democracies. However, in recent years, feminism has undergone a significant transformation — one that raises serious questions about whether the movement still represents equality or has shifted toward selective bias."
      },
      {
        heading: "The Rise of Digital Feminism",
        content: "With the growth of social media, feminism has gained unprecedented visibility. Platforms such as Instagram, Twitter, and TikTok have allowed feminist voices to reach millions within seconds. While this has helped highlight genuine issues, it has also encouraged oversimplified narratives, emotional outrage, and public shaming. Complex social problems are often reduced to slogans, leaving little room for discussion or nuance."
      },
      {
        heading: "Selective Equality",
        content: "One of the main criticisms of modern feminism is its selective approach to equality. While women's issues are widely discussed, many male-centered problems — such as mental health stigma, higher suicide rates, and social pressure to suppress emotions — receive limited attention. Equality, by definition, cannot exist if one group's struggles are consistently overlooked."
      },
      {
        heading: "Gender Conflict Instead of Cooperation",
        content: "Modern feminist discourse increasingly frames gender relations as a conflict between oppressors and victims. This \"us versus them\" narrative damages social cohesion and discourages cooperation between men and women. Rather than promoting mutual understanding, it fosters resentment and polarization."
      },
      {
        heading: "Conclusion",
        content: "Critiquing modern feminism does not mean rejecting women's rights. Instead, it calls for reflection and reform. A movement that once united people under the banner of justice must now reconsider whether its methods still align with its original purpose. True equality requires balance, fairness, and the inclusion of all voices — not selective advocacy."
      }
    ]
  },
  {
    id: 2,
    title: "Hashtag Activism and the Crisis of Gender Dialogue",
    sections: [
      {
        heading: "Introduction",
        content: "In the digital age, activism has found a new home on social media. Hashtags have become powerful tools for raising awareness and mobilizing public opinion. Feminism, in particular, has benefited from this visibility. However, the rise of hashtag activism has also contributed to the erosion of meaningful gender dialogue, replacing thoughtful discussion with outrage-driven narratives."
      },
      {
        heading: "The Problem with Viral Feminism",
        content: "Social media rewards content that is emotional, controversial, and easily digestible. As a result, feminist discourse online often prioritizes shock value over substance. Misleading statistics, exaggerated claims, and one-sided stories spread rapidly, shaping public perception without proper verification or context."
      },
      {
        heading: "Cancel Culture and Silencing Dissent",
        content: "One of the most troubling aspects of modern feminist activism is the intolerance toward opposing views. Individuals who question dominant narratives are frequently labeled as misogynistic or anti-women, even when their critiques are evidence-based. This culture of cancellation discourages open dialogue and creates an environment where fear replaces discussion."
      },
      {
        heading: "The Impact on Gender Relations",
        content: "When activism focuses on blame rather than solutions, it deepens gender divides. Men are often portrayed as collective oppressors, while women are framed solely as victims. Such portrayals oversimplify reality and ignore the diversity of experiences across genders. This approach harms relationships, workplace cooperation, and societal trust."
      },
      {
        heading: "Toward Responsible Activism",
        content: "Activism should aim to educate, not intimidate. Responsible feminism must encourage debate, acknowledge complexity, and address issues affecting all genders. Without these principles, movements risk losing credibility and public support."
      },
      {
        heading: "Conclusion",
        content: "Hashtag activism has the power to inspire change, but only when used responsibly. Feminism must move beyond outrage culture and return to constructive dialogue. Only through open conversation and balanced representation can society progress toward genuine equality."
      }
    ]
  }
];

const ArticleCard = ({ article }: { article: typeof articles[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl mb-4">{article.title}</h3>
        
        {/* Preview - First section */}
        <div className="prose prose-lg max-w-none text-muted-foreground mb-4">
          <h4 className="text-lg font-semibold text-foreground mb-2">{article.sections[0].heading}</h4>
          <p className="leading-relaxed">{article.sections[0].content}</p>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mt-6 pt-6 border-t border-border">
            {article.sections.slice(1).map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-foreground mb-2">{section.heading}</h4>
                <p className="leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        )}

        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-accent hover:text-accent/80"
        >
          {isExpanded ? (
            <>
              Read Less <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Read Full Article <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </article>
  );
};

const Articles = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="mb-6">Articles & Research</h1>
            <p className="text-xl text-muted-foreground">
              In-depth analysis and critical perspectives on modern feminist discourse.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
<section className="section-container py-8">
  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg bg-muted">
    
    {/* blurred background fill */}
    <img
      src={articlesImage}
      className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-60"
      alt=""
      aria-hidden="true"
    />

    {/* main image */}
    <img
      src={articlesImage}
      alt="Research and articles"
      className="relative z-10 max-h-full max-w-full mx-auto object-contain"
    />
  </div>
</section>


      {/* Articles */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl italic" style={{ fontFamily: 'var(--heading-font)' }}>
              "Critiquing a movement does not mean rejecting equality — it means protecting it."
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
