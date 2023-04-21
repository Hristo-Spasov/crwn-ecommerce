import React from "react";
import { categories } from "../../constants";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <div className="category-container" key={id}>
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
