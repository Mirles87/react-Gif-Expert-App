import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["First"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }

    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h3>Mirles Gif's App</h3>

      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
