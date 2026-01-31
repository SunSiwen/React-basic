// 8️⃣ useRef vs useState 对比表
export function RefVsStateComparison() {
  return (
    <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>8️⃣ useRef vs useState 完全对比</h3>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: 'white',
        marginTop: '12px',
        fontSize: '13px'
      }}>
        <thead>
          <tr style={{ background: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>特性</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>useRef</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>useState</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>触发重新渲染</td>
            <td style={{ padding: '12px', color: '#d32f2f' }}>❌ 不会</td>
            <td style={{ padding: '12px', color: '#388e3c' }}>✅ 会</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>每次渲染返回相同对象</td>
            <td style={{ padding: '12px', color: '#388e3c' }}>✅ 是</td>
            <td style={{ padding: '12px', color: '#d32f2f' }}>❌ 否</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>修改后立即更新</td>
            <td style={{ padding: '12px', color: '#d32f2f' }}>❌ 不会</td>
            <td style={{ padding: '12px', color: '#388e3c' }}>✅ 会</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>访问 DOM</td>
            <td style={{ padding: '12px', color: '#388e3c' }}>✅ 最佳</td>
            <td style={{ padding: '12px', color: '#d32f2f' }}>❌ 不推荐</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>存储定时器/订阅</td>
            <td style={{ padding: '12px', color: '#388e3c' }}>✅ 最佳</td>
            <td style={{ padding: '12px', color: '#fbc02d' }}>⚠️ 可以但不优</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>需要时序保证</td>
            <td style={{ padding: '12px', color: '#d32f2f' }}>❌ 无保证</td>
            <td style={{ padding: '12px', color: '#388e3c' }}>✅ 有保证</td>
          </tr>
          <tr>
            <td style={{ padding: '12px' }}>用途</td>
            <td style={{ padding: '12px' }}>DOM 操作、副作用管理</td>
            <td style={{ padding: '12px' }}>UI 状态管理</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: '16px', padding: '12px', background: '#e3f2fd', borderRadius: '4px', fontSize: '13px' }}>
        <strong>🎯 选择指南：</strong>
        <ul style={{ margin: '8px 0 0 0' }}>
          <li>需要改变 UI？➜ 用 <strong>useState</strong></li>
          <li>需要访问 DOM？➜ 用 <strong>useRef</strong></li>
          <li>需要存储不变的值？➜ 用 <strong>useRef</strong></li>
          <li>需要时序或批量更新？➜ 用 <strong>useState</strong></li>
        </ul>
      </div>
    </div>
  )
}
