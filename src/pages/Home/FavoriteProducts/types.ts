export interface ProductData {
  id: number;
  imageUrl: string;
  imageText: string;
  figureCaption: string;
  category?: string;
  aditionalInfo: string;
  baseValue: number;
  promotionalValue?: number;
  count?: number;
}
