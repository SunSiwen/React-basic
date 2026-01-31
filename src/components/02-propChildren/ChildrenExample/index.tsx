import { Card } from '../Card'
import { Button } from '../Button'
import { Alert } from '../Alert'
import { List } from '../List'
import { ListItem } from '../ListItem'
import { Modal } from '../Modal'

export function ChildrenExample() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>React Children Prop 详解</h2>

      {/* ========== 1. 基础用法 ========== */}
      <Card title="1️⃣ 基础用法：children 作为内容">
        <p>这是卡片的内容，通过 children 传入</p>
        <p>可以包含<strong>多个元素</strong>和<em>各种标签</em></p>
      </Card>

      {/* ========== 2. children 作为文本 ========== */}
      <Card title="2️⃣ children 作为文本">
        <Button variant="primary">主要按钮</Button>
        <Button variant="secondary">次要按钮</Button>
      </Card>

      {/* ========== 3. 嵌套组件 ========== */}
      <Card title="3️⃣ 组件嵌套（组合）">
        <Alert type="info">
          这是一条提示信息
        </Alert>
        <Alert type="warning">
          这是一条警告信息
        </Alert>
        <Alert type="error">
          这是一条错误信息
        </Alert>
      </Card>

      {/* ========== 4. 列表组件 ========== */}
      <Card title="4️⃣ 列表组件">
        <List>
          <ListItem>React 基础知识</ListItem>
          <ListItem>Props 和 State</ListItem>
          <ListItem>Children Prop</ListItem>
          <ListItem>组件组合</ListItem>
        </List>
      </Card>

      {/* ========== 5. 复杂嵌套 ========== */}
      <Card title="5️⃣ 复杂嵌套">
        <Card title="内层卡片">
          <p>children 可以无限嵌套</p>
          <Button>嵌套的按钮</Button>
        </Card>
      </Card>

      {/* ========== 6. 插槽模式（命名children）========== */}
      <div style={{ marginTop: '20px' }}>
        <h3>6️⃣ 插槽模式（类似 Vue 的 slot）</h3>
        <Modal
          header={<span>📢 模态框标题</span>}
          footer={
            <>
              <Button variant="secondary">取消</Button>
              <Button variant="primary">确认</Button>
            </>
          }
        >
          <p>这是模态框的主要内容区域</p>
          <p>通过 children 传入</p>
          <p>header 和 footer 是额外的 props</p>
        </Modal>
      </div>

      {/* ========== 7. 实际应用示例 ========== */}
      <Card title="7️⃣ 实际应用：构建布局">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <Card title="左侧">
            <p>左侧内容</p>
          </Card>
          <Card title="右侧">
            <p>右侧内容</p>
          </Card>
        </div>
      </Card>
    </div>
  )
}
