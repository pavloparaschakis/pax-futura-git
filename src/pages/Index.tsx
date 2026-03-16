import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { SectionReveal } from '@/components/SectionReveal';
import { ChatMock } from '@/components/ChatMock';
import { Shield, Zap, Scale } from 'lucide-react';
import { stagger, fadeUp, paxTransition } from '@/lib/animations';

const values = [
  {
    icon: Shield,
    title: 'Data stays with you',
    body: 'Every deployment runs entirely within your own environment — on-premise or private cloud. Your employees\' queries, your internal documents, your business logic. None of it touches shared infrastructure.',
  },
  {
    icon: Zap,
    title: 'Live in weeks, not months',
    body: 'We handle the full deployment: model selection, RAG pipeline, access controls, monitoring, and integration with your existing identity systems. You get a working product, not a proof of concept.',
  },
  {
    icon: Scale,
    title: 'Built for GDPR and the EU AI Act',
    body: 'Enforcement begins August 2026. We build to the standard from day one — data residency, audit logging, human oversight mechanisms, and compliance documentation included in every deployment.',
  },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO — landscape depth background */}
      <div
          className="relative overflow-hidden w-screen"
          style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
        >
        {/* Background landscape image */}
        <img
          
          alt=""
          aria-hidden="true"
          className="pax-landscape-bg"
        />
        {/* Gradient overlay — fades image into page bg */}
        <div className="pax-gradient-overlay" aria-hidden="true" />

        {/* Grid texture 1 — full-coverage radial-masked grid */}
        <img
          src="https://framerusercontent.com/images/VFbFPvaUpqETT40F0CbSdm6W1k.svg"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            opacity: 0.33,
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 1,
            WebkitMaskImage: 'radial-gradient(70% 60%, #000 0%, #000 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.2) 80%, transparent 100%)',
            maskImage: 'radial-gradient(70% 60%, #000 0%, #000 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.2) 80%, transparent 100%)',
          }}
        />

        {/* Grid texture 2 — top-anchored perspective grid */}
        <img
          src="https://framerusercontent.com/images/T9Ev9NY2S4V6tETX3jnw3NzZdg.svg"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-257px',
            left: '0',
            right: '0',
            height: '644px',
            objectFit: 'cover',
            opacity: 0.33,
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 1,
            WebkitMaskImage: 'radial-gradient(55% 55%, #000 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.05) 80%, transparent 100%)',
            maskImage: 'radial-gradient(55% 55%, #000 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.05) 80%, transparent 100%)',
          }}
        />

        <section className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-20 lg:py-32" style={{ position: 'relative', zIndex: 4 }}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full">
            {/* Left column */}
            <motion.div
              className="flex-1 min-w-0 flex flex-col justify-center"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.p variants={fadeUp} className="eyebrow mb-6">
                Private AI Infrastructure · Eastern Europe and the Middle East
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-geist text-[42px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] mb-6"
              >
                Your AI. Your infrastructure.{' '}
                <span className="heading-gradient">Your data never leaves.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-pax-secondary text-base leading-[1.75] max-w-[480px] mb-8">
                We deploy private large language models for enterprise organisations across Eastern Europe and the Middle East. No public cloud. No data exposure. No compromise.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-6">
                <Link to="/about" className="btn-solid">Talk to us →</Link>
                <Link to="/regulatory-compliance" className="btn-ghost">Why private AI?</Link>
              </motion.div>
              <motion.p variants={fadeUp} className="font-mono text-sm text-pax-tertiary">
                $ pax deploy --env production --private
              </motion.p>
            </motion.div>

            {/* Right column */}
            <motion.div
              className="w-full lg:w-[700px] lg:flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            >
              <ChatMock />
            </motion.div>
          </div>
        </section>
      </div>

      {/* Section spacing */}
      <div className="h-24 lg:h-24" aria-hidden="true" />

      {/* VALUE COLUMNS */}
      <section className="border-t border-pax-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-20">
          <motion.div
            className="grid md:grid-cols-3 gap-10"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeUp}>
                <v.icon className="w-6 h-6 text-pax-text mb-4" strokeWidth={1.5} />
                <h3 className="font-geist text-[22px] font-semibold mb-3">{v.title}</h3>
                <p className="text-pax-secondary text-base leading-[1.75]">{v.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT WE BUILD — second landscape depth background */}
      <div className="relative">
        {/* Second background landscape image */}
        <img
          
          alt=""
          aria-hidden="true"
          className="pax-landscape-bg"
        />
        {/* Gradient overlay */}
        <div className="pax-gradient-overlay" aria-hidden="true" />

        <section
          className="bg-pax-alt"
          style={{ position: 'relative', zIndex: 2, backgroundColor: '#090a1299' }}
        >
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-20">
            <SectionReveal>
              <h2 className="font-geist text-[30px] lg:text-[42px] leading-[1.15] tracking-[-0.02em] mb-6">
                What we <span className="heading-gradient">build</span>
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="text-pax-secondary text-base leading-[1.75] max-w-[720px] mb-6">
                Internal AI assistants your teams actually use. Knowledge management tools that answer in seconds instead of hours. Decision-support systems for high-stakes operational roles. All running on your infrastructure, with your data, under your control.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="text-pax-secondary text-base leading-[1.75] max-w-[720px] mb-8">
                We work with enterprise organisations that cannot afford to route sensitive information through public AI APIs — and who need a partner that understands both the technology and the regulatory environment they operate in.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <Link to="/about" className="btn-ghost">Talk to us →</Link>
            </SectionReveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
