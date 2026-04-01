import { useState } from 'react'
import styles from './ItemList.module.css'

interface Item {
  name: string
  price: number
}

export default function ItemList() {
  const [items, setItems] = useState<Item[]>([
    { name: 'たまご', price: 100 },
    { name: 'りんご', price: 160 }
  ])
  const [newItemName, setNewItemName] = useState('')
  const [newItemPrice, setNewItemPrice] = useState(0)

  const addItem = () => {
    if (!newItemName || newItemPrice == null) {
        return
    }
    setItems([...items, { name: newItemName, price: newItemPrice }])
    setNewItemName("")
    setNewItemPrice(0)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>ItemList📝</div>
      <div className={styles.list}>
        {items.map((item) => (
          <div
            key={item.name}
            className={`${styles.card} ${item.price >= 500 ? styles.over500 : ''}`.trim()}
          >
            <div className="name">名前：{item.name}</div>
            <div className="price">{item.price}円</div>
            {item.price >= 10000 && <div>高額商品</div>}
          </div>
        ))}
      </div>
      <div className={styles.form}>
        <label className={styles.formLabel}>
          <span className={styles.labelText}>名前</span>
          <input
            className={styles.input}
            onChange={(e) => setNewItemName(e.target.value)}
            type="text"
            value={newItemName}
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.labelText}>価格</span>
          <input
            className={styles.input}
            onChange={(e) => setNewItemPrice(Number(e.target.value))}
            type="number"
            value={newItemPrice}
          />
        </label>
        <button className={styles.button} onClick={addItem}>add</button>
      </div>
    </div>
  )
}