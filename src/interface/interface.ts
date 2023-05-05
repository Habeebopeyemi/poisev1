export interface ILinks {
  id?: number;
  location?: string;
  text?: string;
}
export interface Size {
  width: number;
  height: number;
}
export interface IImage{
  src: string;
  alt: string;
  id: number
}
export interface IItems {
  id: number;
  name: string;
  price: number;
  description: string;
  src: string;
  }