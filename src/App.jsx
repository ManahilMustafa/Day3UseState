
import './App.css'
import ColorSelector from './components/colorSelector/ColorSelector'

import Counter from './components/counter/Counter'
import NameInput from './components/nameInput/NameInput'
import ThemeToggle from './components/themeToggle/ThemeToggle'
import TextToggle from './components/toogle/TextToggle'


function App() {

  return (
   <div>
    <Counter />
    <TextToggle />
    <NameInput />
    <ThemeToggle />
    <ColorSelector />
   </div>
  )
}

export default App
