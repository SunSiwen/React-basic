import { DependencyArrayTypes, NoDependencyVsEmpty } from '../DependencyArrayTypes'
import { ClosureTrap, ClosureTrapFixed } from '../ClosureTrap'
import { ObjectDependencyTrap, ObjectDependencyFixed1, ObjectDependencyFixed2 } from '../ObjectDependencyTrap'
import { RaceConditionTrap, RaceConditionFixed } from '../RaceConditionTrap'
import { MemoryLeakTrap, MemoryLeakFixed, CleanupChecklist } from '../MemoryLeakTrap'

export function UseEffectDependenciesDemo() {
  return (
    <div style={{ padding: '20px', maxWidth: '1000px' }}>
      <h2>🎯 useEffect 依赖项数组详解</h2>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        依赖项数组是 useEffect 最容易出错的地方。掌握这些陷阱，你就能写出安全的异步代码！
      </p>

      {/* 基础知识 */}
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ borderBottom: '2px solid #667eea', paddingBottom: '8px' }}>📚 基础知识</h3>
        <DependencyArrayTypes />
        <NoDependencyVsEmpty />
      </section>

      {/* 陷阱 1: 闭包 */}
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ borderBottom: '2px solid #f57c00', paddingBottom: '8px' }}>⚠️ 陷阱 1: 闭包陷阱</h3>
        <ClosureTrap />
        <ClosureTrapFixed />
      </section>

      {/* 陷阱 2: 对象依赖 */}
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ borderBottom: '2px solid #d32f2f', paddingBottom: '8px' }}>⚠️ 陷阱 2: 对象作为依赖项</h3>
        <ObjectDependencyTrap />
        <ObjectDependencyFixed1 />
        <ObjectDependencyFixed2 />
      </section>

      {/* 陷阱 3: 竞态条件 */}
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ borderBottom: '2px solid #c62828', paddingBottom: '8px' }}>⚠️ 陷阱 3: 竞态条件</h3>
        <RaceConditionTrap />
        <RaceConditionFixed />
      </section>

      {/* 陷阱 4: 内存泄漏 */}
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ borderBottom: '2px solid #1565c0', paddingBottom: '8px' }}>⚠️ 陷阱 4: 内存泄漏</h3>
        <MemoryLeakTrap />
        <MemoryLeakFixed />
        <CleanupChecklist />
      </section>

      {/* 总结 */}
      <div style={{ 
        padding: '20px', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '8px',
        marginTop: '24px'
      }}>
        <h3>🏆 依赖项黄金法则</h3>
        <ol style={{ lineHeight: '2', marginTop: '12px' }}>
          <li>✅ <strong>完整列出依赖项</strong>：在 Effect 中使用的所有外部值都要列出</li>
          <li>✅ <strong>使用 ESLint 插件</strong>：<code>eslint-plugin-react-hooks</code> 会自动检查</li>
          <li>✅ <strong>不要手动禁用规则</strong>：如果发现"不必要"的依赖，通常是代码结构的问题</li>
          <li>✅ <strong>稳定函数引用</strong>：用 useCallback 或 useMemo 包装不稳定的值</li>
          <li>✅ <strong>处理异步操作</strong>：竞态条件需要特殊处理（isMounted 或 AbortController）</li>
          <li>✅ <strong>不要忘记清理</strong>：监听器、定时器、订阅都需要清理</li>
        </ol>
      </div>

      {/* 最佳实践代码示例 */}
      <div style={{ 
        padding: '20px', 
        background: '#e8f5e9',
        borderRadius: '8px',
        marginTop: '24px',
        border: '2px solid #4caf50'
      }}>
        <h3>📝 最佳实践代码模板</h3>
        <pre style={{
          background: '#fff',
          padding: '12px',
          borderRadius: '4px',
          overflow: 'auto',
          fontSize: '12px',
          border: '1px solid #4caf50'
        }}>
{`// ✅ 标准的 API 请求 Pattern
useEffect(() => {
  let isMounted = true
  
  const fetchData = async () => {
    try {
      const data = await fetch(url)
      if (isMounted) {  // 防竞态条件
        setData(data)
      }
    } catch (err) {
      if (isMounted) {
        setError(err)
      }
    }
  }
  
  fetchData()
  
  // 清理函数
  return () => {
    isMounted = false  // 防止状态更新
  }
}, [url])  // ✅ 完整的依赖项
`}
        </pre>
      </div>
    </div>
  )
}
