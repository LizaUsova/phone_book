import PropTypes from "prop-types";
import ContactItem from "./ContactItem.jsx";
import {Box, Typography} from "@mui/material";

function ContactList({ contacts, onDelete, onEdit, setLastName, setNumber, setName }) {

    return (
        contacts.length === 0
            ? <Typography>List is empty</Typography>
            :<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {contacts.map((contact) => (
                    <ContactItem key={contact.id}
                                 contact={contact}
                                 onDelete={onDelete}
                                 onEdit={onEdit}
                                 setName={setName}
                                 setLastName={setLastName}
                                 setNumber={setNumber} />
                ))}
            </Box>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            lastName: PropTypes.string,
            number: PropTypes.string,
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    setNumber: PropTypes.func.isRequired,
};

export default ContactList