import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  let contacts = [];
  //   async read data
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    contacts = JSON.parse(data);
    console.log('Content of the file:', data);
  } catch (error) {
    console.error('Error reading the file:', error);
  }
  //   add contacts
  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('Add contact');
  } catch (error) {
    console.error('Mistake:', error);
  }
};

generateContacts(5);
