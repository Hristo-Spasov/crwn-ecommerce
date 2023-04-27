import { categories } from "../../constants";
import {
  DirectoriesContainer,
  BackgroundImage,
  Body,
  DirectoryContainer,
} from "./DirectoryItem.styles.jsx";

const DirectoryItem = () => {
  return (
    <DirectoriesContainer>
      {categories.map(({ title, id, imageUrl }) => (
        <DirectoryContainer key={id}>
          <BackgroundImage imageUrl={imageUrl} />
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </DirectoryContainer>
      ))}
    </DirectoriesContainer>
  );
};

export default DirectoryItem;
