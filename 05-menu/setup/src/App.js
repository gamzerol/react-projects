import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map(item => item.category))]

function App() {
  const [meals, setMeals] = useState(items);
  const [categoryItems, setCategoryItems] = useState(allCategories);
  const filterItems = (item) => {
    if(item === 'all') {
      setMeals(items);
      return;
    }
    const newItems = items.filter(itemInfo => itemInfo.category === item);
    setMeals(newItems);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categoryItems} filterCategory={filterItems} />
        <Menu items={meals} />
      </section>
    </main>
  )
}

export default App;
