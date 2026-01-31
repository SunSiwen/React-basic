# React Hooks 学习项目

一个基于 React 19 + TypeScript + Vite 构建的 React Hooks 学习示例项目。

## 📚 项目简介

本项目包含 React 核心概念和 Hooks 的学习示例，从基础到进阶，帮助你深入理解 React 的工作原理。

## 🛠️ 技术栈

- **React** 19.2.0
- **TypeScript** 5.9
- **Vite** 7.2
- **ESLint** 9.x

## 🚀 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview

# 代码检查
pnpm lint
```

## 📂 项目结构

```
src/
├── components/
│   ├── 01-basic/              # React 基础
│   │   ├── CounterButton/     # 计数器按钮
│   │   ├── EventDemo/         # 事件处理演示
│   │   └── Greeting/          # 问候组件
│   │
│   ├── 02-propChildren/       # Props 与 Children
│   │   ├── Alert/             # 警告组件
│   │   ├── Button/            # 按钮组件
│   │   ├── Card/              # 卡片组件
│   │   ├── ChildrenExample/   # Children 示例
│   │   ├── List/              # 列表组件
│   │   ├── ListItem/          # 列表项组件
│   │   └── Modal/             # 模态框组件
│   │
│   ├── 03-useState/           # useState Hook
│   │   ├── BasicCounter/      # 基础计数器
│   │   ├── MultipleStates/    # 多个状态
│   │   ├── ObjectState/       # 对象状态
│   │   ├── ArrayState/        # 数组状态
│   │   ├── FunctionalUpdate/  # 函数式更新
│   │   ├── LazyInitialization/# 惰性初始化
│   │   ├── UseArrayHook/      # 自定义数组 Hook
│   │   ├── ArrayReferenceIssue/ # 数组引用问题
│   │   ├── UseMemoSolution/   # useMemo 解决方案
│   │   └── UseRefComparison/  # useRef 对比
│   │
│   ├── 04-useEffect/          # useEffect Hook
│   │   ├── EffectOnMount/     # 挂载时执行
│   │   ├── EffectWithDependencies/ # 依赖项
│   │   ├── EffectCleanup/     # 清理函数
│   │   ├── EffectNoCleanup/   # 无需清理的场景
│   │   ├── EffectAPIRequest/  # API 请求
│   │   ├── MultipleEffects/   # 多个 Effect
│   │   ├── DependencyArrayTypes/ # 依赖数组类型
│   │   ├── CommonPitfalls/    # 常见陷阱
│   │   ├── ClosureTrap/       # 闭包陷阱
│   │   ├── MemoryLeakTrap/    # 内存泄漏陷阱
│   │   ├── ObjectDependencyTrap/ # 对象依赖陷阱
│   │   ├── RaceConditionTrap/ # 竞态条件陷阱
│   │   └── PracticalTechniques/ # 实用技巧
│   │
│   ├── 05-useRef/             # useRef Hook
│   │   ├── AccessDOMFocus/    # 访问 DOM 焦点
│   │   ├── ReadDOMProperties/ # 读取 DOM 属性
│   │   ├── StoreMutableValues/# 存储可变值
│   │   ├── TrackPreviousValue/# 追踪上一个值
│   │   ├── RefVsState/        # Ref vs State
│   │   ├── RefVsStateComparison/ # Ref 与 State 对比
│   │   ├── RefTrap/           # Ref 陷阱
│   │   └── TextareaAutoSave/  # 文本框自动保存
│   │
│   └── 06-typescript/         # TypeScript 集成
│       └── TypescriptDemo/    # TypeScript 演示
```

## 📖 学习路径

1. **01-basic** - 从基础组件开始，理解 React 组件和事件处理
2. **02-propChildren** - 学习组件间通信，理解 props 和 children
3. **03-useState** - 掌握状态管理，理解状态更新机制
4. **04-useEffect** - 理解副作用处理，掌握生命周期概念
5. **05-useRef** - 学习 DOM 操作和可变值存储
6. **06-typescript** - TypeScript 与 React 的最佳实践

## 📝 License

MIT
