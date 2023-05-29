export interface ILinks {
  id?: number;
  location?: string;
  text?: string;
}
export interface Size {
  width: number;
  height: number;
}
export interface IImage {
  src: string;
  alt: string;
  id: number;
}
export interface IItems {
  id: number;
  name: string;
  price: number;
  description: string;
  src: string;
  // viewProductHandler: () => void;
}
export interface IProduct {
  _id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}
export interface IButton {
  text: string;
  onclick?: () => void;
}
export interface IDetails {
  id: number;
  name: string;
  price: number;
  description: string;
  src: string;
  details: string;
}
