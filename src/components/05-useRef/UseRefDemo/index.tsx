import { AccessDOMFocus } from '../AccessDOMFocus'
import { ReadDOMProperties } from '../ReadDOMProperties'
import { StoreMutableValues } from '../StoreMutableValues'
import { TrackPreviousValue } from '../TrackPreviousValue'
import { RefVsState } from '../RefVsState'
import { TextareaAutoSave } from '../TextareaAutoSave'
import { RefTrap } from '../RefTrap'
import { RefVsStateComparison } from '../RefVsStateComparison'

export function UseRefDemo() {
  return (
    <div style={{ padding: '20px', maxWidth: '900px' }}>
      <h2>🎯 useRef Hook 完全指南</h2>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        useRef 有两个主要用途：访问 DOM 元素和存储不会触发重新渲染的可变值。
      </p>

      <AccessDOMFocus />
      <ReadDOMProperties />
      <StoreMutableValues />
      <TrackPreviousValue />
      <RefVsState />
      <TextareaAutoSave />
      <RefTrap />
      <RefVsStateComparison />

      {/* 知识总结 */}
      <div style={{ 
        padding: '20px', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '8px',
        marginTop: '24px'
      }}>
        <h3>📚 useRef 核心概念</h3>
        <div style={{ marginTop: '12px', lineHeight: '1.8' }}>
          <p><strong>什么是 ref？</strong></p>
          <p style={{ marginLeft: '16px', opacity: 0.9 }}>
            ref 是 "reference" 的缩写，它是一个容器，在组件生命周期中保持不变。
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>两个主要用途：</strong></p>
          <ul style={{ marginLeft: '16px', opacity: 0.9 }}>
            <li>🎯 <strong>访问 DOM：</strong> 获取输入框焦点、读取 DOM 属性、控制媒体元素</li>
            <li>💾 <strong>存储值：</strong> 保存定时器 ID、前一个值、计数器等不需要重新渲染的值</li>
          </ul>

          <p style={{ marginTop: '12px' }}><strong>关键特点：</strong></p>
          <ul style={{ marginLeft: '16px', opacity: 0.9 }}>
            <li>✅ 返回的对象在每次渲染时都相同</li>
            <li>✅ 修改 ref 不会触发重新渲染</li>
            <li>✅ ref.current 包含实际的值或 DOM 元素</li>
          </ul>

          <p style={{ marginTop: '12px' }}><strong>常见用途：</strong></p>
          <ul style={{ marginLeft: '16px', opacity: 0.9 }}>
            <li>🎯 获取输入框焦点</li>
            <li>🎥 控制媒体播放</li>
            <li>⏱️ 管理定时器</li>
            <li>📊 保存前一个值</li>
            <li>🔄 防止无限循环</li>
          </ul>
        </div>
      </div>

      {/* 最佳实践 */}
      <div style={{ 
        padding: '20px', 
        background: '#e8f5e9',
        borderRadius: '8px',
        marginTop: '24px',
        border: '2px solid #4caf50'
      }}>
        <h3>✅ useRef 最佳实践</h3>
        <ul style={{ lineHeight: '2', marginTop: '12px' }}>
          <li>✅ 总是检查 <code>ref.current !== null</code></li>
          <li>✅ 在 useEffect 中修改 ref，不在渲染期间</li>
          <li>✅ 当需要改变 UI 时用 useState 而不是 useRef</li>
          <li>✅ 为 ref 添加类型标注：<code>{'useRef<HTMLInputElement>(null)'}</code></li>
          <li>✅ 在清理函数中清理 ref（如定时器）</li>
        </ul>
      </div>
    </div>
  )
}
