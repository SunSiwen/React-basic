import { useState } from 'react'
import './components/App.css'
// 导入子组件（一个组件一个文件夹）
import { Greeting } from './components/01-basic/Greeting'
import { CounterButton } from './components/01-basic/CounterButton'
import { EventDemo } from './components/01-basic/EventDemo'
import { ChildrenExample } from './components/02-propChildren/ChildrenExample'
import { UseStateDemo } from './components/03-useState/UseStateDemo'
import { UseEffectDemo } from './components/04-useEffect/UseEffectDemo'
import { UseEffectDependenciesDemo } from './components/04-useEffect/UseEffectDependenciesDemo'
import { UseRefDemo } from './components/05-useRef/UseRefDemo'
import { TypescriptDemo } from './components/06-typescript/TypescriptDemo'

// ============ 父组件：App ============
function App() {
  // useState 是 React 的 Hook，用于管理组件状态
  // count 是状态值，setCount 是更新状态的函数
  const [count, setCount] = useState(0)
  const [showEventDemo, setShowEventDemo] = useState(false)
  const [showChildrenDemo, setShowChildrenDemo] = useState(false)
  const [showUseStateDemo, setShowUseStateDemo] = useState(false)
  const [showUseEffectDemo, setShowUseEffectDemo] = useState(false)
  const [showDependenciesDemo, setShowDependenciesDemo] = useState(false)
  const [showUseRefDemo, setShowUseRefDemo] = useState(false)
  const [showTypescriptDemo, setShowTypescriptDemo] = useState(false)

  // 处理计数增加的函数
  const handleIncrement = () => {
    setCount(count + 1) // 更新状态，触发重新渲染
  }

  return (
    <div className="app">
      {/* 使用子组件，通过 props 传递数据 */}
      <Greeting name="React 新手" />
      
      <div className="card">
        <p>这是一个简单的 React 示例，演示了：</p>
        <ul>
          <li>✅ 函数式组件</li>
          <li>✅ 父子组件通信（Props）</li>
          <li>✅ 状态管理（useState）</li>
          <li>✅ 事件处理（onClick）</li>
        </ul>
      </div>

      <div className="card">
        {/* 子组件：接收 count 和点击处理函数 */}
        <CounterButton count={count} onIncrement={handleIncrement} />
        <p className="hint">👆 点击按钮试试看！</p>
      </div>

      <div className="card">
        <button onClick={() => setShowEventDemo(!showEventDemo)}>
          {showEventDemo ? '隐藏' : '查看'}事件处理详解
        </button>
        {' '}
        <button onClick={() => setShowChildrenDemo(!showChildrenDemo)}>
          {showChildrenDemo ? '隐藏' : '查看'}Children Prop 详解
        </button>
        {' '}
        <button onClick={() => setShowUseStateDemo(!showUseStateDemo)}>
          {showUseStateDemo ? '隐藏' : '查看'}useState 详解
        </button>
        {' '}
        <button onClick={() => setShowUseEffectDemo(!showUseEffectDemo)}>
          {showUseEffectDemo ? '隐藏' : '查看'}useEffect 详解
        </button>
        {' '}
        <button onClick={() => setShowDependenciesDemo(!showDependenciesDemo)}>
          {showDependenciesDemo ? '隐藏' : '查看'}useEffect 依赖项深度
        </button>
        {' '}
        <button onClick={() => setShowUseRefDemo(!showUseRefDemo)}>
          {showUseRefDemo ? '隐藏' : '查看'}useRef 详解
        </button>
        {' '}
        <button onClick={() => setShowTypescriptDemo(!showTypescriptDemo)}>
          {showTypescriptDemo ? '隐藏' : '查看'}TypeScript 详解
        </button>
      </div>

      {showEventDemo && <EventDemo />}
      {showUseRefDemo && <UseRefDemo />}
      {showTypescriptDemo && <TypescriptDemo />}
      {showChildrenDemo && <ChildrenExample />}
      {showUseStateDemo && <UseStateDemo />}
      {showUseEffectDemo && <UseEffectDemo />}
      {showDependenciesDemo && <UseEffectDependenciesDemo />}
    </div>
  )
}

export default App
