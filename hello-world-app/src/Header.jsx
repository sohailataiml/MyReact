export default function Header({ name }) {
  return (
    <header className="app-header">
      <h1>{name ? `Groceries List for ${name}` : 'Groceries List'}</h1>
    </header>
  )
}
