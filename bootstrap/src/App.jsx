import TextSize from "./components/TextSize.jsx"
import TextPerson from "./components/TextPerson.jsx"
import TextColor from "./components/TextColor.jsx"
import TextBackground from "./components/TextBackground.jsx"
import Imagens from "./components/Imagens.jsx"

function App() {

  return (
    <>
      <div className="container">
        <TextSize />
        <TextPerson />
        <TextColor />
        <TextBackground />
        <Imagens />                                
      </div>
    </>
  )
}

export default App
