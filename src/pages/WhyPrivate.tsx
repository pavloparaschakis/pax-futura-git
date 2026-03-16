import { Layout } from '@/components/Layout';
import { SectionReveal } from '@/components/SectionReveal';

const gdprBullets = [
  'A Data Processing Agreement is required with every third-party AI provider that processes personal data.',
  'Every instance of personal data processing requires a documented lawful basis.',
  'Data subject rights must be honoured — including the right to know how their data is used.',
  'High-risk processing requires a Data Protection Impact Assessment before deployment.',
];

const aiActTable = [
  { date: '2 February 2025', obligation: 'AI literacy measures mandatory for all employees using AI professionally' },
  { date: '2 August 2025', obligation: 'GPAI model transparency obligations in force; national authorities operational' },
  { date: '2 August 2026', obligation: 'Full high-risk deployer obligations: human oversight, log retention (minimum 6 months), FRIA where required' },
  { date: '2 August 2027', obligation: 'Obligations for AI embedded in regulated products' },
];

const paxBullets = [
  'Human oversight controls — configurable approval workflows and escalation paths, built into the deployment',
  'Audit logging — all interactions logged within your perimeter, retained according to your policies',
  'Version control — model versions fixed and documented; outputs are reproducible and traceable',
  'Technical documentation — intended purpose, data architecture, risk profile, and oversight mechanisms',
  'AI literacy support — onboarding and usage documentation satisfying the February 2025 obligation',
];

const AccentBullet = ({ text }: { text: string }) => (
  <div className="flex gap-3 items-start">
    <span className="text-[#6f849f] shrink-0 mt-[0.35em] text-xs leading-none">▪</span>
    <p className="text-pax-secondary text-base leading-[1.75]">{text}</p>
  </div>
);

const SectionDivider = () => (
  <div className="w-full border-t border-[#6f849f]/[0.18]" />
);

const PlainEnglish = ({ children }: { children: React.ReactNode }) => (
  <div className="pt-5 border-t border-[#6f849f]/[0.18]">
    <p className="text-pax-secondary text-base leading-[1.75] italic opacity-60">
      <span className="text-[#6f849f] not-italic">In plain terms:</span>{' '}{children}
    </p>
  </div>
);

const SuperBold = ({ children }: { children: React.ReactNode }) => (
  <p className="font-black text-white">{children}</p>
);

const WhyPrivate = () => {
  return (
    <Layout>
      {/* Hero + Section 1 */}
      <section className="w-full py-20 lg:py-32 relative overflow-hidden">
        {/* Subtle radial gradient behind hero content */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 25% 25%, rgba(111,132,159,0.06) 0%, transparent 70%)' }}
        />
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <SectionReveal>
          <h1 className="font-geist text-[42px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] mb-6 max-w-[900px]">
            ChatGPT is impressive. It's also the wrong tool for your organisation.
          </h1>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <p className="text-pax-secondary text-base leading-[1.75] max-w-[640px] mb-16">
            Not because the model is bad. Because the moment your employee types a client name, an internal procedure, a salary figure, or a strategic decision into a public AI interface — that data has left your infrastructure.
          </p>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-geist text-[30px] lg:text-[42px] leading-[1.15] tracking-[-0.02em] mb-6 border-l-[2px] border-[#6f849f] pl-4">
            Why Your Current AI Subscriptions Are Not Compliant
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <div className="text-pax-secondary text-base leading-[1.75] max-w-[720px] space-y-5">
            <p>ChatGPT Plus, Google Gemini Advanced, and Claude.ai are consumer products built for individuals. Using them professionally — with client names, employee data, internal procedures, or strategic decisions — requires a Data Processing Agreement under Article 28 of the GDPR. None of these subscription tiers provide one.</p>
            <SuperBold>No agreement exists. That is already a violation.</SuperBold>
            <p>The EU AI Act adds a second layer of obligation. From 2 February 2025, AI literacy measures are mandatory for all employees using AI in a professional capacity. From 2 August 2026, organisations in high-risk sectors must maintain human oversight documentation, retain interaction logs for a minimum of six months, and conduct Fundamental Rights Impact Assessments where required. Penalties reach €15 million or 3% of global annual turnover.</p>
            <p>When a regulator asks for the documentation your subscription cannot produce, there is no answer that closes the gap.</p>
            <PlainEnglish>Using ChatGPT at work with any client or employee data is already breaking EU law. The fines are real, and they are significant.</PlainEnglish>
          </div>
        </SectionReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2 */}
      <section className="bg-pax-alt">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-20">
          <SectionReveal>
            <h2 className="font-geist text-[30px] lg:text-[42px] leading-[1.15] tracking-[-0.02em] mb-6 border-l-[2px] border-[#6f849f] pl-4">
              What Changes With Private Deployment: Data In, Data Out
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="text-pax-secondary text-base leading-[1.75] max-w-[720px] space-y-5">
              <p>When the model runs on your own infrastructure, Article 28 of GDPR does not apply — because there is no third party processing your data. The legal requirement for a Data Processing Agreement exists only where an external processor exists. Remove the external processor and you remove the requirement entirely.</p>
              <SuperBold>No external server. No processor. No agreement needed.</SuperBold>
              <p>With private deployment, training on your data is not contractually prevented — it is structurally impossible. The model has no external connection. Nothing your organisation does with it is visible to any third party. With consumer subscriptions at Plus or free tier, no contractual protection of any kind exists.</p>
              <p>Publicly hosted models update silently and continuously. In regulated environments, this creates a reproducibility problem: an output your compliance team relied on last quarter may not be replicable today. Private deployment fixes the model version until your organisation decides to change it — making every output traceable and explainable.</p>
              <PlainEnglish>The AI runs inside your own building, like any other internal tool. Nothing leaves. No one outside your organisation can see it, access it, or use what goes into it.</PlainEnglish>
            </div>
          </SectionReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3 */}
      <section className="w-full py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="font-geist text-[30px] lg:text-[42px] leading-[1.15] tracking-[-0.02em] mb-6 border-l-[2px] border-[#6f849f] pl-4">
            What Compliance Actually Requires
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <div className="text-pax-secondary text-base leading-[1.75] max-w-[720px] space-y-8">

            <div>
              <p className="font-geist font-semibold text-pax-text mb-4">Under GDPR (in force now):</p>
              <div className="border-l-[2px] border-[#6f849f] pl-8 space-y-4">
                {gdprBullets.map((item, i) => (
                  <AccentBullet key={i} text={item} />
                ))}
              </div>
            </div>

            <SuperBold>August 2026 is not a target date. It is a deadline.</SuperBold>

            <div>
              <p className="mb-4">The EU AI Act defines a specific compliance timeline for deployers operating in the EU market.</p>
              <div className="rounded-xl overflow-hidden border border-[#6f849f]/[0.18]">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[#6f849f]/[0.18] bg-[#1b1b1c]">
                      <th className="text-left py-3 pr-8 font-geist font-semibold text-pax-text text-sm whitespace-nowrap px-4">Date</th>
                      <th className="text-left py-3 font-geist font-semibold text-pax-text text-sm px-4">Obligation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {aiActTable.map((row, i) => (
                      <tr key={i} className={`border-b border-[#6f849f]/[0.12] last:border-0 ${i % 2 === 1 ? 'bg-[#212122]' : ''}`}>
                        <td className="py-4 pr-8 text-pax-secondary text-sm whitespace-nowrap align-top px-4">{row.date}</td>
                        <td className="py-4 text-pax-secondary text-base leading-[1.75] px-4">{row.obligation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p>The obligation to demonstrate compliance falls on the deployer — your organisation — regardless of what the AI provider offers or claims to offer.</p>

            <PlainEnglish>The law now says organisations must be able to prove how they use AI, who oversees it, and what happened in every interaction. If you cannot show this, you are non-compliant.</PlainEnglish>
          </div>
        </SectionReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4 */}
      <section className="bg-pax-alt">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-20">
          <SectionReveal>
            <h2 className="font-geist text-[30px] lg:text-[42px] leading-[1.15] tracking-[-0.02em] mb-6 border-l-[2px] border-[#6f849f] pl-4">
              What Pax Inovitae Provides
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="text-pax-secondary text-base leading-[1.75] max-w-[720px] space-y-5">
              <p>Private deployment eliminates the GDPR exposure entirely. No external processor means no Data Processing Agreement is required. Your existing IT governance — access controls, data classification, audit trails — extends to the AI system without modification.</p>
              <SuperBold>The compliance infrastructure is built in. Not bolted on.</SuperBold>
              <p>On the EU AI Act, every deployment includes:</p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="border-l-[2px] border-[#6f849f] pl-8 space-y-4 mt-6 mb-8 max-w-[720px]">
              {paxBullets.map((item, i) => (
                <AccentBullet key={i} text={item} />
              ))}
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="text-pax-secondary text-base leading-[1.75] max-w-[720px] space-y-5">
              <p>The subscriptions your teams are currently using were built for individuals. The regulations now in force were written for organisations.</p>
              <PlainEnglish>If a regulator walked in tomorrow, we could show them exactly what the AI does, who approved it, and a log of every interaction it has ever had.</PlainEnglish>
            </div>
          </SectionReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Disclaimer */}
      <section className="w-full py-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <SectionReveal>
          <p className="text-pax-tertiary text-sm leading-relaxed max-w-[720px]">
            This page provides general regulatory information and does not constitute legal advice. Primary sources: Regulation (EU) 2024/1689 (EU AI Act); Regulation (EU) 2016/679 (GDPR); OpenAI Data Processing Addendum (February 2024); European Commission AI Act enforcement timeline; Bavarian State Commissioner for Data Protection guidance (March 2025).
          </p>
        </SectionReveal>
        </div>
      </section>
    </Layout>
  );
};

export default WhyPrivate;
