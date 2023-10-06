import { ItemBtn, ItemText, ListItem } from "./ContactList.styled";

const ContactList = ({contacts, filterValue, deleteContact}) => {
    return (
        <ul>
          {(contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))).map(filteredContact => (
            <ListItem key={filteredContact.id}>
              <ItemText>
                {filteredContact.name}: {filteredContact.number}
              </ItemText>
              
              <ItemBtn onClick={() => deleteContact(filteredContact.id)} >Delete</ItemBtn>
            </ListItem>
          ))}
        </ul>
      )
};


export default ContactList;