import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf8');
    console.log('All contacts have been removed.');
    return [];
  } catch (error) {
    console.error('Error reading the file:', error);
  }
};

removeAllContacts();
