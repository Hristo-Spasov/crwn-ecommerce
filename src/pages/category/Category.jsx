import { CategoryContainer, CategoryTitle } from "./Category.styles.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { selectCategoriesMap } from "../../store/categories/category.selector.js";
import { useSelector } from "react-redux";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
