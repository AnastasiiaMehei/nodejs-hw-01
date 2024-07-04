import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    contacts.splice(-1);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error reading the file:', error);
  }
};

removeLastContact();
