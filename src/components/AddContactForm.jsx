import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {TextField, Box, Button} from "@mui/material";

function AddContactForm({ setContacts, editContact, setEditContact, name, lastName, number, setLastName, setNumber, setName }) {

    const handleSubmit  = (e) => {
        e.preventDefault()

        if (editContact !== null) {
            setContacts(prev => prev.map(contact => contact.id === editContact.id ? {
                ...contact,
                name,
                lastName,
                number
            } : contact))

            setEditContact(null)

            setName('');
            setLastName('');
            setNumber('');
        } else {
            if (!name.trim() || !number.trim() || !lastName.trim()) throw new Error('Value is empty')

            const newContact = {
                name: name,
                lastName: lastName,
                number: number,
                isDeleted: false,
                id: uuidv4()
            }

            setContacts((contacts) => {
                return [...contacts, newContact]
            })

            setName('');
            setLastName('');
            setNumber('');
        }
    }

    const actionBtnName = editContact === null ? 'ADD': 'SAVE';

    return (
        <Box component="form"
             sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
             noValidate
             autoComplete="off"

        >
            <TextField id="outlined-basic"
                       label="Name"
                       variant="outlined"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       slotProps={{
                           inputLabel: {
                               shrink: true,
                           },
                       }}/>
            <TextField
                id="outlined-basic"
                label="LastName"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    },
                }}/>
            <TextField
                id="outlined-number"
                label="Number"
                variant="outlined"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    },
                }}
            />

            <Button variant="contained" onClick={handleSubmit}>{actionBtnName}</Button>
        </Box>
    )
}

AddContactForm.propTypes = {
    setContacts: PropTypes.func.isRequired,
    editContact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        lastName: PropTypes.string,
        number: PropTypes.string,
    }),
    setEditContact: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    setNumber: PropTypes.func.isRequired,
};

AddContactForm.defaultProps = {
    editContact: null,
};

export default AddContactForm