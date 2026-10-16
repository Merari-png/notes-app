import NoteForm from './components/NoteForm'

function App() {
  

  return (
    <>
      <div className="max-w-1g mx-auto mt-10 p-6 bg-gray-100 rounded-1g shadow-1g">
       <h2 className="text-2x1 font-bold mb-4 text-center">Notes App </h2>

       {/*Entradas controladas en formas*/}

       <NoteForm />
       </div>
    </>
  )
}

export default App
