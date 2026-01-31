import { useState } from 'react'

export function TypescriptDemo() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    '基础推断',
    'useState',
    '显式声明',
    'useEffect',
    'useRef',
    '事件类型',
    '最佳实践'
  ]

  const content = [
    {
      title: '基础类型推断',
      items: [
        'const num = 42 → 类型：number',
        'const str = "hello" → 类型：string',
        'const bool = true → 类型：boolean',
        'const arr = [1,2,3] → 类型：number[]',
        'TypeScript 根据初值自动推断类型'
      ]
    },
    {
      title: 'useState 类型推断',
      items: [
        'useState(0) ✅ 推断为 number',
        'useState("") ✅ 推断为 string',
        'useState(null) ❌ 只推断为 null',
        'useState([]) ❌ 推断为 never[]',
        '初值为 null/[] 需要显式声明'
      ]
    },
    {
      title: '显式类型声明',
      items: [
        'useState&lt;User | null&gt;(null)',
        'useState&lt;string[]&gt;([])',
        'useState&lt;Status&gt;("idle")',
        'useRef&lt;HTMLInputElement&gt;(null)',
        '使用 &lt;Type&gt; 明确告诉期望的类型'
      ]
    },
    {
      title: 'useEffect 类型规则',
      items: [
        'useEffect(() =&gt; {...}, []) ✅ 返回 void',
        'useEffect(() =&gt; { return () =&gt; {} }) ✅ 返回清理函数',
        'useEffect(async () =&gt; {}) ❌ 错误',
        '正确：useEffect(() =&gt; { const fn = async () =&gt; {} })',
        'useEffect 回调只能返回 void 或清理函数'
      ]
    },
    {
      title: 'useRef 声明',
      items: [
        'useRef&lt;HTMLInputElement&gt;(null)',
        'useRef&lt;number&gt;(0)',
        'useRef&lt;{ [key: string]: any }&gt;({})',
        'useRef&lt;Timer | null&gt;(null)',
        '总是为 DOM ref 明确指定具体类型'
      ]
    },
    {
      title: '事件处理器类型',
      items: [
        '(e: React.MouseEvent&lt;Button&gt;) =&gt; {}',
        '(e: React.ChangeEvent&lt;Input&gt;) =&gt; {}',
        '(e: React.FormEvent&lt;Form&gt;) =&gt; {}',
        '(e: React.KeyboardEvent&lt;Input&gt;) =&gt; {}',
        '总是明确指定事件类型，避免 any'
      ]
    },
    {
      title: '最佳实践',
      items: [
        '✅ 推断足够就不显式声明',
        '✅ 不确定时显式声明最安全',
        '✅ null/[] 必须显式声明',
        '✅ 定义 interface 或 type',
        '❌ 避免使用 any 类型'
      ]
    }
  ]

  return (
    <div style={{ padding: '20px', maxWidth: '1000px' }}>
      <h2>🔷 TypeScript 和 Hooks 的类型系统</h2>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        掌握类型推断与显式声明的平衡，让你的代码既简洁又安全。
      </p>

      {/* 选项卡 */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            style={{
              padding: '8px 14px',
              background: activeTab === idx ? '#667eea' : '#f0f0f0',
              color: activeTab === idx ? 'white' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: activeTab === idx ? 'bold' : 'normal',
              fontSize: '13px'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 内容 */}
      <div style={{ padding: '16px', background: '#f9f9f9', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>{content[activeTab].title}</h3>
        <ul style={{ marginTop: '12px', fontFamily: 'monospace', fontSize: '13px', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
          {content[activeTab].items.map((item, idx) => (
            <li key={idx} style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>•</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </div>

      {/* 核心要点 */}
      <div style={{
        padding: '20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h3>📚 核心要点</h3>
        <ul style={{ lineHeight: '1.8', marginTop: '12px' }}>
          <li>✅ 基础类型通常推断足够（数字、字符串、布尔值）</li>
          <li>✅ 初值为 null/undefined/[] 时必须显式声明</li>
          <li>✅ 事件处理器总要指定具体的事件类型</li>
          <li>✅ useEffect 不能直接是 async，应在内部定义</li>
          <li>✅ useRef DOM 引用必须声明具体 HTML 元素类型</li>
        </ul>
      </div>

      {/* 快速参考 */}
      <div style={{
        padding: '20px',
        background: '#e8f5e9',
        borderRadius: '8px',
        marginTop: '20px',
        border: '2px solid #4caf50'
      }}>
        <h3>⚡ 快速参考</h3>
        <div style={{ marginTop: '12px', fontFamily: 'monospace', fontSize: '13px', lineHeight: '2.2' }}>
          <div>const [count, setCount] = useState(number)(0)</div>
          <div>const ref = useRef(HTMLInputElement)(null)</div>
          <div>const handleClick = (e: React.MouseEvent) =&gt; void</div>
          <div>useEffect(() =&gt; void | cleanup, [dep])</div>
        </div>
      </div>

      {/* 对比表格 */}
      <div style={{ marginTop: '20px', padding: '20px', background: '#fff3e0', borderRadius: '8px' }}>
        <h3>推断 vs 显式声明</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: '#ffe0b2', borderBottom: '2px solid #ffb74d' }}>
              <th style={{ padding: '8px', textAlign: 'left' }}>场景</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>推断</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>显式</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>推荐</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ffe0b2' }}>
              <td style={{ padding: '8px' }}>useState(0)</td>
              <td style={{ padding: '8px' }}>number</td>
              <td style={{ padding: '8px' }}>number</td>
              <td style={{ padding: '8px' }}>推断 ✅</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ffe0b2' }}>
              <td style={{ padding: '8px' }}>useState(null)</td>
              <td style={{ padding: '8px' }}>null ❌</td>
              <td style={{ padding: '8px' }}>&lt;T | null&gt;</td>
              <td style={{ padding: '8px' }}>显式 ✅</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ffe0b2' }}>
              <td style={{ padding: '8px' }}>useState([])</td>
              <td style={{ padding: '8px' }}>never[] ❌</td>
              <td style={{ padding: '8px' }}>&lt;T[]&gt;</td>
              <td style={{ padding: '8px' }}>显式 ✅</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>useRef(null)</td>
              <td style={{ padding: '8px' }}>null ❌</td>
              <td style={{ padding: '8px' }}>&lt;HTMLElement&gt;</td>
              <td style={{ padding: '8px' }}>显式 ✅</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
