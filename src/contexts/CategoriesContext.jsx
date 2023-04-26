import { createContext, useState, useEffect } from "react";
// import { shopData } from "../constants";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  //! adding the batch collection this will set values every time it runs *We dont want to do that*
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", shopData);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
