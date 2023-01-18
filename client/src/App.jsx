import { Context } from '../Context'
import { useContext } from 'react'

function App() {

  const { testVar } = useContext(Context)

  return (
    <div>
      {testVar}
    </div>
  )
}

export default App
