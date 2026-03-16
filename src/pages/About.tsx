import { Layout } from '@/components/Layout';
import { SectionReveal } from '@/components/SectionReveal';

const About = () => {
  return (
    <Layout>
      <section className="w-full py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <SectionReveal>
          <h1 className="font-geist text-[42px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] mb-6 max-w-[900px]">
            We build the infrastructure. You keep the control.
          </h1>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <p className="text-pax-secondary text-base leading-[1.75] max-w-[640px] mb-16">
            Pax Futura is a private AI infrastructure firm based in Sofia. We deploy and operate enterprise language model systems for organisations across Eastern Europe and the Middle East.
          </p>
        </SectionReveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:w-[60%] space-y-12">
            <SectionReveal>
              <div>
                <p className="eyebrow mb-4">Why we exist</p>
                <p className="text-pax-secondary text-base leading-[1.75]">
                  The productivity gains from AI are real. So are the compliance constraints that make public cloud AI deployment impractical — or legally impossible — for organisations handling sensitive data. The infrastructure to solve this has matured significantly in the past 18 months. Open-source models now match proprietary cloud APIs on quality for most enterprise tasks. The software layer — inference engines, gateways, observability tools — is production-grade and battle-tested at scale globally. What was missing was a local partner who could take that infrastructure and deploy it correctly for the Eastern European and Middle Eastern enterprise market. One who understands GDPR and the EU AI Act. One who has done the compliance mapping. One who speaks the language — literally and commercially. That's what we are.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div>
                <p className="eyebrow mb-4">How we work</p>
                <p className="text-pax-secondary text-base leading-[1.75]">
                  We start with a single deployment. One model, one use case, one department. We prove the value before asking you to expand. Every engagement begins with a discovery process — mapping your use case, auditing your documents and data sources, confirming your compliance requirements. We give you a clear scope before we touch any infrastructure. Our deployments run on EU-resident infrastructure. Your data stays in Europe. We provide the monitoring, the monthly maintenance, and the compliance documentation your legal and security teams need. We don't disappear after go-live. Our pricing structure is designed for long-term partnerships, not one-time installations.
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Right column */}
          <div className="lg:w-[40%] space-y-8">
            <SectionReveal delay={0.15}>
              <div className="bg-pax-card border border-pax-border border-l-[2px] border-l-[#6f849f] rounded-2xl p-8">
                <h3 className="font-geist text-[22px] font-semibold mb-3">
                  Pavlo Paraschakis
                </h3>
                <p className="text-pax-secondary text-base leading-[1.75]">
                  Experience deploying enterprise-grade AI systems, Pavlo Paraschakis has helped organisations across Eastern Europe and the Middle East move beyond proof-of-concept into production-ready agentic infrastructure. He specialises in architecting multi-agent systems that transform how companies operate — from automating complex workflows to embedding AI decision-making across entire organisational structures. His work focuses on the practical business value of agentic AI: reduced overhead, faster execution, and systems that scale with the organisation rather than against it.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div>
                <h3 className="font-geist text-[22px] font-semibold mb-4">Talk to us</h3>
                <p className="text-pax-secondary text-base leading-[1.75] mb-6">
                  We work with a small number of enterprise clients at a time. If you're evaluating private AI deployment for your organisation, the right first step is a direct conversation.
                </p>
                <div className="space-y-3 mb-6">
                  <p className="text-base">
                    Email: <a href="mailto:pavloparaschakis@gmail.com" className="hover:text-pax-text transition-colors">pavloparaschakis@gmail.com</a>
                  </p>
                  <p className="text-pax-secondary text-base">
                    Location: Eastern Europe and the Middle East
                  </p>
                </div>
                <a href="mailto:pavloparaschakis@gmail.com" className="btn-solid w-full text-center mb-4 block">Send us a message</a>
                <p className="text-pax-tertiary text-sm">
                  We respond to all enquiries within one business day. Initial conversations are confidential and carry no obligation.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
