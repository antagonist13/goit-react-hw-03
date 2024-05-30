export default function SearchBox({value, onSearching}) {
    return <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onSearching(e.target.value)}
      />
    </div>
}
