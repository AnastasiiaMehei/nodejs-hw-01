import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  try {
    await fs.appendFile(PATH_DB, data, 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
};

addOneContact();
