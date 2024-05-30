export default function Contact({ contacts:{id, name, number}, deleteContact }) {
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
