import axios from "axios";

axios.defaults.baseURL = "https://662a7bab67df268010a41e86.mockapi.io/";

export const fetchContacts = async () => {
  const data = await axios.get("/contacts");
  return data;
};

export const addContact = async (newContact) => {
  const data = await axios.post("/contacts", newContact);
  return data;
};

export const deleteContact = async (contactId) => {
  const data = await axios.delete(`/contacts/${contactId}`);
  return data;
};
