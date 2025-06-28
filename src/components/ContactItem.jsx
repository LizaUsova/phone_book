import PropTypes from "prop-types";
import { ListItemText, Typography, ListItem, Button, ButtonGroup, Grid, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ContactItem({ contact, onDelete, onEdit, setLastName, setNumber, setName }) {

    const onEditHandler = (contact) => {
        onEdit(contact.id)
        setName(contact.name);
        setLastName(contact.lastName);
        setNumber(contact.number);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container alignItems="center">
                <Grid size={{ xs: 10, md: 10, }}>
                    <ListItem alignItems="flex-start">
                        <ListItemText size={{ xs: 12, md: 12 }}
                                      primary={contact.name + ' ' + contact.lastName}
                                      secondary={
                                          <Typography
                                              component="span"
                                              variant="body2"
                                              sx={{ color: 'text.primary', display: 'inline' }}
                                          >
                                              {contact.number}
                                          </Typography>
                                      }
                        />
                    </ListItem>
                </Grid>
                <Grid size={{ xs: 2, md: 2, }}>
                    <ButtonGroup variant="outlined" aria-label="Basic button group">
                        <Button variant="outlined" onClick={() => onDelete(contact.id)}>
                            <DeleteIcon />
                        </Button>
                        <Button variant="outlined" onClick={() => onEditHandler(contact)}>
                            <EditIcon />
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Box>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    setNumber: PropTypes.func.isRequired,
}

export default ContactItem