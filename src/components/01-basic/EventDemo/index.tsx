import { useState } from 'react'
import type { MouseEvent, ChangeEvent, KeyboardEvent } from 'react'

// 事件处理示例组件
export function EventDemo() {
  const [message, setMessage] = useState('')
  const [inputValue, setInputValue] = useState('')

  // ========== 1. 基本点击事件 ==========
  const handleClick = () => {
    setMessage('按钮被点击了！')
  }

  // ========== 2. 带参数的事件处理 ==========
  const handleClickWithParam = (text: string) => {
    setMessage(`你点击了：${text}`)
  }

  // ========== 3. 获取事件对象（SyntheticEvent）==========
  const handleClickWithEvent = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('原生事件对象:', e.nativeEvent)
    console.log('React合成事件:', e)
    console.log('点击位置:', { x: e.clientX, y: e.clientY })
    console.log('目标元素:', e.currentTarget)
    setMessage(`点击位置: (${e.clientX}, ${e.clientY})`)
  }

  // ========== 4. 输入框事件 ==========
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    setMessage(`输入内容: ${value}`)
  }

  // ========== 5. 键盘事件 ==========
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setMessage(`你按下了回车，输入的是: ${inputValue}`)
    }
  }

  // ========== 6. 阻止默认行为 ==========
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault() // 阻止表单提交刷新页面
    setMessage('表单提交被拦截了（没有刷新页面）')
  }

  // ========== 7. 阻止事件冒泡 ==========
  const handleParentClick = () => {
    setMessage('父元素被点击')
  }

  const handleChildClick = (e: MouseEvent<HTMLButtonElement>) => {
    // e.stopPropagation() // 阻止事件冒泡到父元素
    setMessage('子元素被点击（事件不会冒泡）')
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2>React 事件处理示例</h2>
      
      {/* 显示消息 */}
      <div style={{ 
        padding: '10px', 
        background: '#f0f0f0', 
        borderRadius: '5px',
        marginBottom: '20px',
        minHeight: '30px'
      }}>
        📢 {message || '等待事件触发...'}
      </div>

      {/* 1. 基本事件 */}
      <section style={{ marginBottom: '15px' }}>
        <h3>1️⃣ 基本点击事件</h3>
        <button onClick={handleClick}>点击我</button>
      </section>

      {/* 2. 带参数的事件 */}
      <section style={{ marginBottom: '15px' }}>
        <h3>2️⃣ 带参数的事件（箭头函数）</h3>
        <button onClick={() => handleClickWithParam('按钮A')}>按钮A</button>
        {' '}
        <button onClick={() => handleClickWithParam('按钮B')}>按钮B</button>
      </section>

      {/* 3. 获取事件对象 */}
      <section style={{ marginBottom: '15px' }}>
        <h3>3️⃣ 获取事件对象（打开控制台查看）</h3>
        <button onClick={handleClickWithEvent}>点击获取事件信息</button>
      </section>

      {/* 4. 输入框事件 */}
      <section style={{ marginBottom: '15px' }}>
        <h3>4️⃣ 输入框事件</h3>
        <input 
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="输入后按回车"
          style={{ padding: '8px', width: '200px' }}
        />
      </section>

      {/* 5. 阻止默认行为 */}
      <section style={{ marginBottom: '15px' }}>
        <h3>5️⃣ 阻止默认行为（表单不刷新页面）</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="输入任意内容" style={{ padding: '8px' }} />
          <button type="submit">提交</button>
        </form>
      </section>

      {/* 6. 事件冒泡 */}
      <section style={{ marginBottom: '15px' }}>
        <h3>6️⃣ 事件冒泡</h3>
        <div 
          onClick={handleParentClick}
          style={{ 
            padding: '20px', 
            background: '#e0e0e0',
            borderRadius: '5px'
          }}
        >
          父元素（点击我）
          <br /><br />
          <button onClick={handleChildClick}>
            子元素（点击我，事件不会冒泡）
          </button>
        </div>
      </section>
    </div>
  )
}
