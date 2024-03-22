import './App.css'
import { PlusIcon } from '@heroicons/react/24/outline'

const App = () => (
  <main className='flex items-center justify-center'>
    <form className='w-2/4 flex flex-col self-center'>
      <div className='flex relative'>
        <input className='block m-0 p-3 rounded w-full' type='text' placeholder='Todo' />
        <button
          className='absolute right-0 h-full bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 aspect-square border-blue-700 rounded'
          type='submit'>
          <PlusIcon />

        </button>
      </div>
    </form>
  </main>
)


export default App
