import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { SectionReveal } from '@/components/SectionReveal';
import { stagger, fadeUp } from '@/lib/animations';

const platformFeatures = [
  { title: 'Unified AI gateway', body: 'Routes requests between your applications and deployed models' },
  { title: 'SSO integration', body: 'Single Sign-On with Active Directory — staff use existing credentials' },
  { title: 'Monitoring and alerting', body: 'Full stack tracking uptime and performance across every model' },
  { title: 'Security baseline', body: 'Encrypted connections, network isolation, and access controls' },
];

const tiers = [
  {
    name: 'Starter',
    pill: 'up to 50 users',
    body: 'For teams running a first deployment or piloting AI in a single department. Covers a compact, fast language model connected to your internal documents — HR policies, operational procedures, compliance materials, technical guides — up to 5,000 documents. Staff ask questions in plain language and get answers drawn directly from your own documentation, with the source referenced. We ingest your documents at setup, refresh the knowledge base monthly, and monitor the service continuously. Standard support included with two business day response.',
    best: 'A single department pilot, an HR knowledge assistant, or a compliance tool for a specialist team.',
  },
  {
    name: 'Growth',
    pill: 'up to 200 users',
    body: 'For organisations rolling out across multiple departments or adding a second model to an existing deployment. Increased document capacity, higher query throughput, and a dedicated support channel. Includes access to dynamic model connections — linking the assistant to a live data source that updates in real time. Monthly knowledge base refresh, 99.5% uptime SLA, and priority support with one business day response.',
    best: 'Multi-department rollouts, a first live-data integration, organisations moving from pilot to production.',
  },
  {
    name: 'Scale',
    pill: 'up to 500 users',
    body: 'For mid-size enterprise organisations running two or more models simultaneously. Full dynamic data connectivity across deployments, dedicated compute allocation per model, and a quarterly review session with your account engineer covering output quality, knowledge base health, and expansion opportunities. Includes enhanced access controls — role-based permissions at the model level so different teams access different assistants with different data scopes. 99.5% uptime SLA, priority support with four business hour response.',
    best: 'Organisations running parallel deployments across operations, HR, sales, and compliance functions.',
  },
  {
    name: 'Enterprise',
    pill: 'up to 1,000 users',
    body: 'For large organisations with demanding inference requirements, sensitive data environments, or complex multi-model architectures. Dedicated compute for every deployment — no shared infrastructure. Full audit logging of every interaction for compliance reporting. Monthly account engineer review sessions. Access to 70-billion parameter models for high-stakes reasoning tasks. Two business hour support response. Data Processing Agreement included as standard.',
    best: 'Telecoms, financial services, and healthcare organisations running AI across critical operational functions.',
    cardClass: 'border-[#6f849f]',
  },
  {
    name: 'Enterprise Plus',
    pill: '1,000+ users',
    body: 'For the largest enterprise deployments: full-scale organisations, multi-site rollouts, and environments requiring the highest levels of data sovereignty, compliance documentation, and engineering support. Dedicated infrastructure. Custom SLA negotiated to your requirements. Quarterly executive review. Full EU AI Act conformity assessment documentation. Dedicated account engineer with defined response windows. Expansion pricing pre-agreed at contract stage to remove renegotiation at every growth milestone.',
    best: 'Large telecoms, banks, national institutions, and organisations with board-level AI governance requirements.',
    cardClass: 'border-[#6f849f]',
    premium: true,
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="w-full py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <SectionReveal>
          <h1 className="font-geist text-[42px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] mb-4">
            One platform. Five deployment tiers.
          </h1>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <p className="text-pax-secondary text-base leading-[1.75] max-w-[640px] mb-16">
            Priced for the size of your organisation. Every deployment starts with our platform layer and adds the models your organisation needs. Tiers are based on the number of users accessing the system.
          </p>
        </SectionReveal>

        {/* Platform Base */}
        <SectionReveal delay={0.15}>
          <div className="bg-[#212122] border border-pax-border rounded-2xl p-8 mb-8 border-l-[2px] border-l-[#6f849f]">
            <h3 className="font-geist text-[22px] font-semibold mb-3">Platform Base</h3>
            <p className="text-pax-secondary text-base leading-[1.75] mb-6 max-w-[640px]">
              The foundation every deployment runs on. This is the infrastructure layer that sits between your organisation and every model we deploy — handling authentication, routing, monitoring, and security so you don't have to.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {platformFeatures.map((f, i) => (
                <div key={i} className="bg-[#212122] border border-pax-border rounded-xl p-5">
                  <h4 className="font-geist font-semibold text-sm mb-1 text-pax-text">{f.title}</h4>
                  <p className="text-pax-secondary text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
            <p className="text-pax-tertiary text-sm">
              One platform fee covers your entire deployment regardless of how many models you add.
            </p>
          </div>
        </SectionReveal>

        {/* Tier Cards */}
        <motion.div
          className="space-y-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`pax-card rounded-2xl p-8 !bg-[#212122] ${tier.cardClass || ''} ${tier.premium ? '!border-[#6f849f]' : ''}`}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="font-geist text-[22px] font-semibold">Tier {i + 1} — {tier.name}</h3>
                <span className="text-xs bg-[#2b2d42] border border-[#6f849f] text-[#7e858d] px-3 py-1">
                  {tier.pill}
                </span>
              </div>
              <p className="text-pax-secondary text-base leading-[1.75] mb-6">{tier.body}</p>
              <div className="border-t border-pax-border pt-4">
                <p className="text-pax-tertiary text-sm italic">Best for: {tier.best}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Implementation */}
        <SectionReveal className="mt-16">
          <h3 className="font-geist text-[22px] font-semibold mb-3">Implementation</h3>
          <p className="text-pax-secondary text-base leading-[1.75] max-w-[640px]">
            Each deployment includes a one-time implementation fee covering discovery workshops, knowledge base preparation, integration work, testing, and handover. Implementation scope and fee are confirmed during the initial scoping conversation.
          </p>
        </SectionReveal>
        </div>
      </section>

      {/* Growth Story */}
      <section className="bg-pax-alt">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-20">
          <SectionReveal>
            <h2 className="font-geist text-[30px] lg:text-[42px] leading-[1.15] tracking-[-0.02em] mb-6">
              How a deployment grows
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="text-pax-secondary text-base leading-[1.75] max-w-[720px] mb-8">
              Most organisations start with a Starter or Growth tier — typically a single internal knowledge assistant for HR, operations, or compliance. Once that's live and teams are using it daily, adding the next model is straightforward. You already have the platform. You already have the integration. The expansion is a commercial conversation, not a new project. A full deployment across four to six models — the typical scope for a 500+ employee organisation — produces a platform that touches every department, runs continuously, and compounds in value as your knowledge base grows.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <Link to="/regulatory-compliance" className="btn-ghost">See what a full deployment looks like →</Link>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
