import React from 'react'

export const TodoInput = ({ handleSubmit, handleChange, todoText }) => (
    <div className="flex items-center justify-center">
        <form className='w-2/4 flex flex-col self-center' onSubmit={handleSubmit}>
            <div className='flex items-center relative'>
                <input className='block m-0 p-3 rounded w-full' type='text' placeholder='Todo' value={todoText} onChange={handleChange} />
                <button
                    className='absolute right-0 h-full bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 aspect-square border-blue-700 rounded'
                    type='submit'>
                    <span className="material-symbols-outlined">
                        add
                    </span>
                </button>
            </div>
        </form>
    </div>
)

