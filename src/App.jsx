import './App.css'

function App() {

  return (
    <main className='flex items-center justify-center'>
      <form className='w-3/4 flex flex-col'>
        <input className='block m-0 p-3 rounded w-full' type='text' placeholder='todo' />
        <button type='submit'>Adicionar Todo</button>
      </form>
    </main>
  )
}

export default App
