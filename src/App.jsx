import './App.css'

const App = () => (
  <main className='flex items-center justify-center'>
    <form className='w-3/4 flex flex-col'>
      <div className='flex relative'>
        <input className='block m-0 p-3 rounded w-full' type='text' placeholder='Escreva aqui seu todo' />
        <button className='absolute right-0 h-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 aspect-square border-blue-700 rounded' type='submit'>+</button>
      </div>
    </form>
  </main>
)


export default App
