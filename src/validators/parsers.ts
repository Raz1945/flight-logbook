import { isString, isDate, isWeather, isVisibility } from './validators';
import { Weather, Visibility } from '../enums';

// Comprueba comentario sea del tipo string
export const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest) || commentFromRequest === '') {
    throw new Error('Incorrect or missing comment');
  }
  return commentFromRequest;
}

// Comprueba fecha sea del tipo fecha
export const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date');
  }
  return dateFromRequest;
}

// Comprueba que Weather sea del tipo Weather
export const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather. It must be one of the following: sunny, rainy, cloudy, windy, stormy');
  }
  return weatherFromRequest;
}

// Comprueba que Visibility sea del tipo Visibility
export const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility. It must be one of the following: great, good, ok, poor');
  }
  return visibilityFromRequest;
}