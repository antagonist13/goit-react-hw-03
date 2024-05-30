export default function Contact({ contacts: {name, id, number}, deleteContact }) {
    console.log(name);
    return (
    <div >
        <p >{name}</p>
        <p >{number}</p>
      <button onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
}
