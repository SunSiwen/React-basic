// 欢迎信息组件
// 接收 props：name（要显示的名字）
interface GreetingProps {
  name: string
}

export function Greeting({ name }: GreetingProps) {
  return <h1>Hello, {name}! 👋</h1>
}
