import Contact from '../Contact/Contact'
export default function ContactList({ contacts, deleteContact }) {
    return <ul>
        {contacts.map((contact) => (
            <li  key={contact.id}>
                <Contact contacts={contacts} deleteContact={deleteContact} />
            </li>
        ))} 
    </ul>
}