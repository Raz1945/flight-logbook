import { NewDiaryEntry } from './types';
import { parseComment, parseDate, parseWeather, parseVisibility } from './validators/parsers';

const toNewDiaryEntry = (object: any): NewDiaryEntry => {

  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry;
}

export default toNewDiaryEntry;