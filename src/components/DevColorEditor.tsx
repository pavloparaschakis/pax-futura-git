import { useState, useCallback } from 'react';

const COLOR_TOKENS = [
  { key: 'pax-text',      label: 'Text (primary)',     cssVar: '--pax-text',           default: '#e3e3e0' },
  { key: 'pax-secondary', label: 'Text (secondary)',   cssVar: '--pax-text-secondary', default: '#7e858d' },
  { key: 'pax-tertiary',  label: 'Text (tertiary)',    cssVar: '--pax-text-tertiary',  default: '#7e858d' },
  { key: 'pax-bg',        label: 'Background',         cssVar: '--pax-bg',             default: '#1e1f21' },
  { key: 'pax-alt',       label: 'Background (alt)',   cssVar: '--pax-alt',            default: '#2b2d42' },
  { key: 'pax-card',      label: 'Card',               cssVar: '--pax-card',           default: '#2b2d42' },
  { key: 'pax-border',    label: 'Border',             cssVar: '--pax-border',         default: '#6f849f' },
  { key: 'gradient-from', label: 'Gradient start',     cssVar: null,                   default: '#e3e3e0' },
  { key: 'gradient-to',   label: 'Gradient end',       cssVar: null,                   default: '#7e858d' },
];

export const DevColorEditor = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Record<string, string>>(
    () => Object.fromEntries(COLOR_TOKENS.map(t => [t.key, t.default]))
  );
  const [copied, setCopied] = useState(false);

  const changed = COLOR_TOKENS.filter(t => values[t.key] !== t.default);

  const applyToDOM = useCallback((key: string, value: string) => {
    const token = COLOR_TOKENS.find(t => t.key === key);
    if (token?.cssVar) {
      document.documentElement.style.setProperty(token.cssVar, value);
    }
  }, []);

  const handleChange = (key: string, value: string) => {
    setValues(prev => ({ ...prev, [key]: value }));
    applyToDOM(key, value);
  };

  const handleReset = () => {
    COLOR_TOKENS.forEach(t => {
      if (t.cssVar) document.documentElement.style.removeProperty(t.cssVar);
    });
    setValues(Object.fromEntries(COLOR_TOKENS.map(t => [t.key, t.default])));
  };

  const prompt = changed.length === 0
    ? ''
    : `Update the colour palette in my Pax Futura site. Make only these colour changes:\n\n${changed
        .map(t => `- ${t.label}: ${t.default} → ${values[t.key]}`)
        .join('\n')}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: '#2b2d42',
          border: '1px solid #6f849f',
          color: '#e3e3e0',
          fontSize: '18px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        }}
        title="Dev colour editor"
      >
        🎨
      </button>

      {/* Sidebar panel */}
      {open && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: '320px',
            zIndex: 9998,
            background: 'rgba(30,31,33,0.97)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderLeft: '1px solid #6f849f',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          {/* Header */}
          <div style={{ padding: '16px 20px', borderBottom: '1px solid #2b2d42', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7e858d' }}>Colour Editor</span>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', color: '#7e858d', cursor: 'pointer', fontSize: '16px', lineHeight: 1 }}
            >
              ✕
            </button>
          </div>

          {/* Token list */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {COLOR_TOKENS.map(token => (
                <div key={token.key} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {/* Color swatch / native picker */}
                  <input
                    type="color"
                    value={values[token.key]}
                    onChange={e => handleChange(token.key, e.target.value)}
                    style={{
                      width: '32px',
                      height: '32px',
                      border: '1px solid #6f849f',
                      borderRadius: '4px',
                      padding: '2px',
                      background: 'none',
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                  />
                  {/* Label */}
                  <span style={{ flex: 1, fontSize: '12px', color: '#e3e3e0' }}>{token.label}</span>
                  {/* Hex input */}
                  <input
                    type="text"
                    value={values[token.key]}
                    onChange={e => {
                      const v = e.target.value;
                      if (/^#[0-9a-fA-F]{0,6}$/.test(v)) handleChange(token.key, v);
                    }}
                    style={{
                      width: '76px',
                      background: '#2b2d42',
                      border: `1px solid ${values[token.key] !== token.default ? '#6f849f' : '#2b2d42'}`,
                      borderRadius: '4px',
                      color: '#e3e3e0',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      padding: '4px 6px',
                      outline: 'none',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Generated prompt */}
          <div style={{ padding: '16px 20px', borderTop: '1px solid #2b2d42' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7e858d' }}>
                Generated Prompt {changed.length > 0 && `(${changed.length} change${changed.length > 1 ? 's' : ''})`}
              </span>
              <button
                onClick={handleReset}
                style={{ background: 'none', border: 'none', color: '#7e858d', cursor: 'pointer', fontSize: '11px' }}
              >
                Reset
              </button>
            </div>
            <textarea
              readOnly
              value={prompt || 'No changes yet…'}
              style={{
                width: '100%',
                height: '120px',
                background: '#2b2d42',
                border: '1px solid #2b2d42',
                borderRadius: '4px',
                color: changed.length > 0 ? '#e3e3e0' : '#7e858d',
                fontSize: '11px',
                fontFamily: 'monospace',
                padding: '8px',
                resize: 'none',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <button
              onClick={handleCopy}
              disabled={changed.length === 0}
              style={{
                marginTop: '8px',
                width: '100%',
                padding: '8px',
                background: changed.length > 0 ? '#e3e3e0' : '#2b2d42',
                color: changed.length > 0 ? '#1e1f21' : '#7e858d',
                border: 'none',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: changed.length > 0 ? 'pointer' : 'default',
                borderRadius: '2px',
                transition: 'all 150ms',
              }}
            >
              {copied ? 'Copied!' : 'Copy prompt'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
