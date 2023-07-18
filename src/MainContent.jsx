import whiteLogo from './images/react-1-logo-white.png'

function MainContent() {
    return (
      <main>
      <h1>Fun Facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Created by Jordan Walke</li>
        <li>It is composable</li>
        <li>It is a hireable skill</li>
        <li>It is maintained by some of the best developers around the planet</li>
      </ul>
      <img src={whiteLogo} className='white-logo' alt='white-logo'></img>
      </main>
    )
  }

  export default MainContent