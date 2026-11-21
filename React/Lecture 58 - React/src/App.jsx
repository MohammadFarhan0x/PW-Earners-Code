let colors = ["red" , "yellow" , "pink" , "blue" , "black"]

let user = {
  name : "Farhan",
  isOnline : true
}

function printName() {
  console.log(user.name);
}


function App() {

  return (
    <>
      <div>Hello</div>
      <div>Hii</div>

      <ul>
        {
          colors.map((color) => {
            return <li>{ color }</li>
          })
        }
      </ul>

      <p>{user.isOnline ? `${user.name} is online` : `${user.name} is offline`}</p>
      
      <button onClick={printName}>Click on me</button>
    </>

    
  )
}

export default App
