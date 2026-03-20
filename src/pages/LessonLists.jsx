import { useState } from 'react'
import CodeBlock from '../components/CodeBlock'
import { Plus, Trash2 } from 'lucide-react'

const LessonLists = () => {
  const [inventory, setInventory] = useState(['Sword 🗡️', 'Shield 🛡️', 'Potion 🧪'])
  const [newItem, setNewItem] = useState('')

  const addItem = () => {
    if (newItem.trim()) {
      setInventory([...inventory, newItem])
      setNewItem('')
    }
  }

  const removeItem = (index) => {
    setInventory(inventory.filter((_, i) => i !== index))
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="animated-gradient-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Magical Backpacks: Lists
      </h1>
      
      <div className="glass-panel lesson-card">
        <h2>What is a List?</h2>
        <p style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: 1.6 }}>
          Imagine you're an explorer and you need a backpack to carry your items. A <strong>List</strong> in Python is exactly that! It's one big box that holds many smaller things inside it.
        </p>
        
        <CodeBlock code={`# Creating our backpack (list)
backpack = ["Sword", "Shield", "Potion"]

# What's the very first item? (Computers start counting at 0!)
print(backpack[0]) 
# Outputs: Sword

# Let's add a new item!
backpack.append("Map")`} />
      </div>

      <div className="glass-panel lesson-card" style={{ borderLeft: '5px solid #FF9F1C' }}>
        <h2>Manage Your Inventory 🎒</h2>
        <p style={{ marginBottom: '15px' }}>This is your virtual Python List. Try adding or removing items!</p>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input 
            type="text" 
            value={newItem} 
            onChange={(e) => setNewItem(e.target.value)} 
            placeholder="Type an item (e.g. Map 🗺️)..."
            onKeyDown={(e) => e.key === 'Enter' && addItem()}
            style={{
              padding: '12px 20px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'var(--background)',
              color: 'var(--text)',
              fontSize: '1rem',
              flex: 1
            }}
          />
          <button onClick={addItem} className="btn-primary" style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Plus size={20} /> Add
          </button>
        </div>
        
        <div style={{ background: 'var(--code-bg)', padding: '20px', borderRadius: '12px', fontFamily: 'monospace', color: '#f8f8f2', fontSize: '1.1rem' }}>
          <div style={{ color: '#8be9fd', marginBottom: '10px' }}>my_inventory = [</div>
          {inventory.map((item, index) => (
            <div key={index} style={{ paddingLeft: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px 0' }}>
              <span style={{ color: '#f1fa8c' }}>"{item}"{index < inventory.length - 1 ? ',' : ''}</span>
              <button onClick={() => removeItem(index)} style={{ background: 'transparent', color: '#ff5555' }}>
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          <div style={{ color: '#8be9fd' }}>]</div>
        </div>
      </div>
    </div>
  )
}

export default LessonLists
