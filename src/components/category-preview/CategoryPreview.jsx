import {
  CategoryPreviewContainer,
  Preview,
} from "./CategoryPreview.styles.jsx";
import ProductCard from "../product-card/ProductCard";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>{title.toUpperCase()}</Link>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
