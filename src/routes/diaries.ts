import express from 'express';
import * as diaryService from '../services/diaryService';
import toNewDiaryEntry from '../utils';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo());
});

router.get('/:id', (req, res) => {
  const diary = diaryService.findByIdWithoutSensitiveInfo(+req.params.id);
  
  return (diary != null) ? res.send(diary) : res.sendStatus(404);
});

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedDiaryEntry = diaryService.addDiary(newDiaryEntry);

    res.json(addedDiaryEntry);
  } catch (error: any) {
    res.status(400).send(error.message);
  }  
});

export default router;