import { CategoryItem } from "../categories/category.types";



export enum CART_ACTION_TYPES  {
  SET_CURRENT_ITEM = "SET_CURRENT_ITEM",
  SET_IS_OPEN = "SET_IS_OPEN",
};


export type CartItem = CategoryItem & {
  quantity:number
}