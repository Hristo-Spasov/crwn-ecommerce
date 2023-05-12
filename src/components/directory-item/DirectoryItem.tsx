import { useNavigate } from "react-router-dom";
import { categories } from "../../constants";
import {
  DirectoriesContainer,
  BackgroundImage,
  Body,
  DirectoryContainer,
} from "./DirectoryItem.styles";

const DirectoryItem = () => {
  const navigate = useNavigate();

  return (
    <DirectoriesContainer>
      {categories.map(({ title, id, imageUrl, route }) => (
        <DirectoryContainer key={id} onClick={() => navigate(route)}>
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
