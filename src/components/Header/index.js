import './index.css'

const Header = props => {
  const {propsHistory} = props
  const onClickSignOut = () => {
    const {history} = propsHistory
    history.replace('/')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickSignOut}
        >
          Sign out
        </button>
      </div>
    </nav>
  )
}
export default Header
