// 计数器按钮组件
// 接收 props：count（当前计数）和 onIncrement（点击时的回调函数）
interface CounterButtonProps {
  count: number
  onIncrement: () => void
}

export function CounterButton({ count, onIncrement }: CounterButtonProps) {
  return (
    <button onClick={onIncrement}>
      点击次数: {count}
    </button>
  )
}


