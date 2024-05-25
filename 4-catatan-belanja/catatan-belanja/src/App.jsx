import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";

/* eslint-disable react/prop-types */
const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: false,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: true,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handlerAddItem(item) {
    setItems([...items, item]);
  }

  function handlerDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlerToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handlerDeleteItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handlerAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handlerDeleteItem}
        onToggleItem={handlerToggleItem}
        onDeleteItems={handlerDeleteItems}
      />
      <Footer items={items} />
    </div>
  );
}
