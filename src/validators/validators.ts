import { Weather, Visibility } from "../enums";

export const isString = (string: string): boolean => {
  // Valida que lo recibido sea del tipo string
  return typeof string === 'string';
}
//? Otra manera 
// const isString = (object: any): boolean => {
//   return typeof object === 'string' || object instanceof String;
// }

export const isDate = (date: string): boolean => {
  // Valida que lo recibido sea del tipo date
  return Boolean(Date.parse(date))
}

export const isWeather = (param: any): boolean => {
  // Valida que lo recibido sea del tipo Weather
  return Object.values(Weather).includes(param);
}

export const isVisibility = (param: any): boolean => {
  // Valida que lo recibido sea del tipo Visibility
  return Object.values(Visibility).includes(param);
}