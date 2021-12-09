import { ProductData } from "../pages/Home/FavoriteProducts/types";

export interface CartContextProps {
  cart: ProductData[];
  addItem: (item: ProductData) => void;
  plusOne: (id: number) => void;
  minusOne: (id: number) => void;
  removeItem: (id: number) => void;
}
