import React from 'react'

const CodeBlock = ({ code }) => {
  // Very simplistic syntax highlighting
  const highlightCode = (str) => {
    const strings = [];
    let highlighted = str.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, match => {
      strings.push(match);
      return `__STR${strings.length - 1}__`;
    });

    highlighted = highlighted
      .replace(/\bdef \b/g, '<span class="keyword">def </span>')
      .replace(/\bprint\b/g, '<span class="function">print</span>')
      .replace(/\bif \b/g, '<span class="keyword">if </span>')
      .replace(/\bfor \b/g, '<span class="keyword">for </span>')
      .replace(/\bin \b/g, '<span class="keyword">in </span>')
      .replace(/\belse:\b/g, '<span class="keyword">else:</span>');

    strings.forEach((s, i) => {
      highlighted = highlighted.replace(`__STR${i}__`, `<span class="string">${s}</span>`);
    });
    
    return { __html: highlighted };
  }

  return (
    <div className="code-container glass-panel" style={{ position: 'relative', marginTop: '20px', marginBottom: '20px' }}>
      <div style={{
        position: 'absolute',
        top: '12px',
        left: '16px',
        display: 'flex',
        gap: '8px'
      }}>
        <div style={{width: 12, height: 12, borderRadius: '50%', background: '#ff5f56'}}></div>
        <div style={{width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e'}}></div>
        <div style={{width: 12, height: 12, borderRadius: '50%', background: '#27c93f'}}></div>
      </div>
      <pre style={{ margin: 0, marginTop: '20px', paddingTop: '10px' }}>
        <code dangerouslySetInnerHTML={highlightCode(code)} />
      </pre>
    </div>
  )
}

export default CodeBlock
