import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    return 'Content of the file:', contacts;
  } catch (error) {
    console.error('Error reading the file:', error);
  }
};

console.log(await getAllContacts());
