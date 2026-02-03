import { EffectOnMount } from '../EffectOnMount'
import { EffectNoCleanup } from '../EffectNoCleanup'
import { EffectWithDependencies } from '../EffectWithDependencies'
import { EffectCleanup } from '../EffectCleanup'
import { EffectAPIRequest } from '../EffectAPIRequest'
import { MultipleEffects } from '../MultipleEffects'
import { CommonPitfalls } from '../CommonPitfalls'
import { PracticalTechniques } from '../PracticalTechniques'

export function UseEffectDemo() {
  return (
    <div style={{ padding: '20px', maxWidth: '900px' }}>
      <h2>🎯 useEffect Hook 完全指南</h2>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        useEffect 用于处理副作用（side effects），如数据获取、订阅、手动修改 DOM 等。
        它在挂载、更新和卸载阶段都可以执行。
      </p>

      <EffectOnMount />
      <EffectNoCleanup />
      <EffectWithDependencies />
      <EffectCleanup />
      <EffectAPIRequest />
      <MultipleEffects />
      <CommonPitfalls />
      <PracticalTechniques />

      {/* 知识总结 */}
      <div style={{ 
        padding: '20px', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '8px',
        marginTop: '24px'
      }}>
        <h3>📚 useEffect 生命周期</h3>
        <div style={{ marginTop: '12px', fontSize: '14px', lineHeight: '1.8' }}>
          <div style={{ marginBottom: '16px' }}>
            <strong>🔵 挂载（Mount）- 组件首次渲染</strong>
            <p style={{ margin: '4px 0 0 0', opacity: 0.9 }}>
              <code>{'useEffect(() => {...}, [])'}</code> - 依赖数组为空时执行一次
            </p>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <strong>🟡 更新（Update）- 依赖项变化</strong>
            <p style={{ margin: '4px 0 0 0', opacity: 0.9 }}>
              <code>{'useEffect(() => {...}, [dep1, dep2])'}</code> - 依赖项变化时执行
            </p>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <strong>🔴 卸载（Unmount）- 组件销毁或依赖更新前</strong>
            <p style={{ margin: '4px 0 0 0', opacity: 0.9 }}>
              <code>{'useEffect(() => { return () => {...} })'}</code> - 返回清理函数
            </p>
          </div>
          <div>
            <strong>⚠️ 陷阱 - 无依赖数组</strong>
            <p style={{ margin: '4px 0 0 0', opacity: 0.9 }}>
              <code>{'useEffect(() => {...})'}</code> - 每次渲染都执行，通常导致性能问题
            </p>
          </div>
        </div>

        <hr style={{ margin: '16px 0', opacity: 0.3 }} />

        <h3 style={{ marginTop: '0' }}>💡 最佳实践</h3>
        <ul style={{ margin: '12px 0', paddingLeft: '20px' }}>
          <li>✅ 明确指定依赖项</li>
          <li>✅ 每个 Effect 只处理一个职责</li>
          <li>✅ 不要忘记清理函数（移除监听器、取消请求）</li>
          <li>✅ 使用 ESLint 插件验证依赖项</li>
          <li>✅ 在 Effect 中处理竞态条件</li>
          <li>✅ 合理使用防抖和节流</li>
        </ul>
      </div>
    </div>
  )
}
