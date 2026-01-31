// 7️⃣ 陷阱：在渲染期间使用 ref
export function RefTrap() {

  // ❌ 陷阱：在渲染过程中修改 ref
  // renderCountRef.current += 1

  // ✅ 正确：在 Effect 中修改
  // useEffect(() => {
  //   renderCountRef.current += 1
  // })

  return (
    <div style={{ padding: '16px', background: '#ffebee', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>7️⃣ 常见陷阱</h3>

      <div style={{ padding: '12px', background: '#fff3cd', borderRadius: '4px', marginBottom: '12px', fontSize: '13px' }}>
        <strong>❌ 陷阱 1：在渲染期间修改 ref</strong>
        <pre style={{ background: '#fff', padding: '8px', borderRadius: '4px', overflow: 'auto', fontSize: '12px' }}>
{`// 不要这样做
renderCountRef.current += 1  // ❌ 在渲染期间修改

// ✅ 应该这样做
useEffect(() => {
  renderCountRef.current += 1
}, [])`}
        </pre>
      </div>

      <div style={{ padding: '12px', background: '#fff3cd', borderRadius: '4px', marginBottom: '12px', fontSize: '13px' }}>
        <strong>❌ 陷阱 2：忘记检查 ref.current</strong>
        <pre style={{ background: '#fff', padding: '8px', borderRadius: '4px', overflow: 'auto', fontSize: '12px' }}>
{`// 不要这样做
inputRef.current.focus()  // ❌ 如果 ref 是 null 会报错

// ✅ 应该这样做
if (inputRef.current) {
  inputRef.current.focus()
}`}
        </pre>
      </div>

      <div style={{ padding: '12px', background: '#c8e6c9', borderRadius: '4px', fontSize: '13px' }}>
        <strong>✅ 最佳实践：</strong>
        <ul style={{ margin: '8px 0 0 0' }}>
          <li>✅ 使用 ref 进行 DOM 操作</li>
          <li>✅ 使用 ref 存储不需要触发重新渲染的值</li>
          <li>✅ 总是检查 <code>ref.current</code> 不为 null</li>
          <li>✅ 在 useEffect 中修改 ref，不在渲染期间</li>
        </ul>
      </div>
    </div>
  )
}
