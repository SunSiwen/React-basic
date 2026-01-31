import { BasicCounter } from '../BasicCounter'
import { FunctionalUpdate } from '../FunctionalUpdate'
import { ObjectState } from '../ObjectState'
import { ArrayState } from '../ArrayState'
import { MultipleStates } from '../MultipleStates'
import { LazyInitialization } from '../LazyInitialization'
import { ArrayReferenceIssue } from '../ArrayReferenceIssue'
import { UseArrayHookExample } from '../UseArrayHook'
import { UseMemoSolution } from '../UseMemoSolution'
import { UseRefComparison } from '../UseRefComparison'

export function UseStateDemo() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>🎯 useState Hook 完全指南</h2>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        useState 是最常用的 Hook，用于在函数组件中添加状态管理
      </p>

      <BasicCounter />
      <FunctionalUpdate />
      <ObjectState />
      <ArrayState />
      <MultipleStates />
      <LazyInitialization />

      {/* 数组引用问题及解决方案 */}
      <h3 style={{ marginTop: '32px', borderTop: '2px solid #ddd', paddingTop: '16px' }}>
        🎯 进阶：数组引用问题
      </h3>
      <p style={{ color: '#666' }}>
        数组状态更新时会创建新引用，这可能导致回调函数重复执行。以下是 3 种解决方案：
      </p>

      <ArrayReferenceIssue />
      <UseArrayHookExample />
      <UseMemoSolution />
      <UseRefComparison />

      {/* 知识总结 */}
      <div style={{ 
        padding: '20px', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '8px',
        marginTop: '24px'
      }}>
        <h3>📚 知识点总结</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>基本语法：</strong> <code style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '3px' }}>const [state, setState] = useState(初始值)</code></li>
          <li><strong>更新状态：</strong> <code style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '3px' }}>setState(新值)</code> 或 <code style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '3px' }}>setState(prev =&gt; 新值)</code></li>
          <li><strong>对象/数组：</strong> 必须创建新对象/数组，不能直接修改</li>
          <li><strong>多个状态：</strong> 可以多次调用 useState</li>
          <li><strong>性能优化：</strong> 初始值计算复杂时使用惰性初始化</li>
          <li><strong>异步更新：</strong> setState 是异步的，不会立即生效</li>
        </ul>
      </div>
    </div>
  )
}
