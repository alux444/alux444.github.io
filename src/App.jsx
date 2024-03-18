import ThreeBackground from './components/ThreeBackground'
import TypewriterTitle from './components/TypewriterTitle'

function App() {

  return (
    <div className='flex flex-col justify-center items-center align-center h-screen w-screen'>
      <div className="background-container">
                <ThreeBackground/>
      </div>
      <h1 className='text-red'>alex liang</h1>
      <TypewriterTitle/>
    </div>
  )
}

export default App
