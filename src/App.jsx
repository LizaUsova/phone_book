import './App.css'
import AddContactForm from "./components/AddContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import {useState} from "react";
import {Grid} from "@mui/material";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [number, setNumber] = useState('')

  const handleDelete = (id) => {
    setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
  };

  const handleEdit = (id) => {
    const contactToEdit = contacts.find(contact => contact.id === id);
    setEditContact(contactToEdit)
  }

  return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12 }} >
        <Grid size={{ xs: 12, sm: 6 }}>
          <AddContactForm
              name={name}
              lastName={lastName}
              number={number}
              setName={setName}
              setLastName={setLastName}
              setNumber={setNumber}
              setContacts={setContacts}
              editContact={editContact}
              setEditContact={setEditContact}/>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ContactList contacts={contacts}
                       onDelete={handleDelete}
                       onEdit={handleEdit}
                       setNumber={setNumber}
                       setName={setName}
                       setLastName={setLastName}
                       setContacts={setContacts}
                       editContact={editContact}/>
        </Grid >
      </Grid>
  )
}

export default App
