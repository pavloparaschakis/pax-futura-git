import { motion } from 'framer-motion';

const messages = [
  { role: 'user', content: 'What is our GDPR data retention policy for employee records?' },
  { role: 'assistant', content: 'According to your HR Policy v2.4, employee records must be retained for 7 years following contract termination, in compliance with EU Labour Code Art. 228.', source: '📄 HR-Policy-v2.4.pdf · Page 12' },
  { role: 'user', content: 'Does this apply to contractors as well?' },
];

const conversations = ['HR Policy Query', 'Network Incident', 'Compliance Check'];

export const ChatMock = () => {
  return (
    <div
    className="overflow-hidden shadow-2xl"
    style={{
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(5px)',
      backgroundColor: 'rgba(15, 15, 15, 0.72)',
      border: '1px solid rgba(255, 255, 255, 0.13)',
      borderRadius: '14px',
      boxShadow: '0 0 80px rgba(0, 0, 0, 0.08), 0 8px 40px rgba(0, 0, 0, 0.5)',
      width: '100%',
      maxWidth: '100%',
    }}
    >
      {/* Top Bar */}
      <div className="h-10 bg-[#2b2d42] border-b border-[#6f849f] flex items-center px-4 justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#6f849f]" />
          <div className="w-3 h-3 rounded-full bg-[#6f849f]" />
          <div className="w-3 h-3 rounded-full bg-[#6f849f]" />
        </div>
        <span className="text-[14px] font-mono text-pax-tertiary uppercase tracking-widest">Pax Futura Assistant</span>
        <div className="w-14" />
      </div>
      <div className="flex h-[600px]">
        {/* Sidebar */}
        <div className="w-[130px] bg-pax-alt border-r border-pax-border p-4 hidden md:block">
          <div className="space-y-4">
            {conversations.map((text, i) => (
              <div key={i} className={`text-[10px] uppercase tracking-tight cursor-default ${i === 0 ? 'text-pax-text' : 'text-pax-tertiary'}`}>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-pax-bg">
          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.4, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-4 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#2b2d42] border border-[#6f849f] rounded-2xl text-pax-text'
                    : 'bg-transparent text-pax-text flex gap-3'
                }`}>
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 bg-pax-text text-pax-bg flex items-center justify-center text-[10px] font-bold shrink-0">P</div>
                  )}
                  <div>
                    {msg.content}
                    {msg.role === 'assistant' && 'source' in msg && msg.source && (
                      <div className="mt-3 text-[10px] bg-[#2b2d42] p-2 text-pax-secondary border border-pax-border rounded-xl">
                        {msg.source}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Typing indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.3 }}
              className="flex justify-start"
            >
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 bg-pax-text text-pax-bg flex items-center justify-center text-[10px] font-bold shrink-0">P</div>
                <div className="text-pax-secondary text-sm">
                  <span className="cursor-blink">▊</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Input bar */}
          <div className="p-4 border-t border-pax-border bg-pax-card rounded-xl">
            <div className="flex items-center justify-between text-pax-tertiary text-xs px-2">
              <span>Ask anything...</span>
              <div className="w-4 h-4 bg-[#6f849f]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
