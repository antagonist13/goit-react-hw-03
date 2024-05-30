import Contact from '../Contact/Contact'
export default function ContactList({ contacts, deleteContact }) {
    return <>
        <Contact contacts={contacts} deleteContact={deleteContact}/>
    </>
}
