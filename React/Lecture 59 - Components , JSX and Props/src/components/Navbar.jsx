
export function Navbar({ user = { isLoggedIn: false, name : "Guest"} }) {
  const { name , isLoggedIn} = user
  return (
      <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>{isLoggedIn ? name : "Login"}</li>
    </ul>
  )
}
