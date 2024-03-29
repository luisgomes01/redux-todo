import React, { useState, useEffect, useRef } from 'react'
import { toggleTodoStatus, deleteTodo, editTodo } from '../todosSlice'
import { useDispatch } from 'react-redux';
import { isMobile } from '../constants';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';

export const TodoItem = ({ todo, completed }) => {
    const [editable, setEditable] = useState(false)
    const dispatch = useDispatch();

    const completedText = (todoText) => <s>{todoText}</s>

    const CompleteButton = () => (
        <button className='p-2 rounded h-full flex hover:text-green-500' onClick={() => dispatch(toggleTodoStatus(todo.id))}>
            <span className="material-symbols-outlined" title='Complete Todo'>
                done
            </span>
        </button>
    )

    const FinishEditingButton = () => (
        <button className="p-2 rounded h-full flex text-green-500">
            <span className="material-symbols-outlined" title='Finish editing'>
                done
            </span>
        </button >
    )

    const PendingButton = () => (
        <button className='p-2 rounded h-full flex hover:text-yellow-500' onClick={() => dispatch(toggleTodoStatus(todo.id))}>
            <span className="material-symbols-outlined rotate-180" title='Move Back to Pending'>
                trending_flat
            </span>
        </button>
    )

    const RemoveButton = () => (
        <button {...(editable && { disabled: true })} className={`p-2 rounded h-full flex hover:text-red-500 ${editable && 'opacity-80 cursor-not-allowed'}`} onClick={() => dispatch(deleteTodo(todo.id))}>
            <span className="material-symbols-outlined" title='Delete todo'>
                remove
            </span>
        </button >
    )

    const EditButton = () => (
        <button {...(editable && { disabled: true })} className={` p-2 rounded h-full flex hover:text-blue-500 ${editable && 'opacity-80 cursor-not-allowed'}`} onClick={toggleEdit}>
            <span className="material-symbols-outlined" title='Edit todo'>
                edit
            </span>
        </button>
    )

    const TodoText = () => <p>{completed ? completedText(todo.text) : todo.text}</p>

    const toggleEdit = () => {
        setEditable((prev) => !prev)
    }

    const ref = useRef(null)


    const EditTodo = forwardRef((props, ref) => {
        const [todoText, setTodoText] = useState(todo.text)
        const inputRef = useRef(null)
        const enterKeyCode = 13

        const eventListenerFn = (e) => {
            if (e.keyCode === enterKeyCode) {
                ref.current.handleEdit(e)
            }
        }

        useEffect(() => {
            const inputElement = inputRef.current
            if (inputElement) {
                inputElement.focus()
                inputElement.addEventListener('keydown', eventListenerFn)
            }
            return () => {
                if (inputElement) {
                    inputElement.removeEventListener('keydown', eventListenerFn)
                }
            }
        }, [editable])

        const handleEdit = (e) => {
            e.preventDefault()
            dispatch(editTodo({ todoId: todo.id, todoText }))
            toggleEdit()
        }

        useImperativeHandle(ref, () => {
            return {
                handleEdit
            }
        })

        return (
            <div className='flex w-full'>
                {isMobile ?
                    <textarea className='w-full' value={todoText} onChange={(e) => setTodoText(e.target.value)} ref={inputRef} />
                    :
                    <input className='w-full' value={todoText} onChange={(e) => setTodoText(e.target.value)} ref={inputRef} />
                }
            </div>
        )
    })

    return (
        <div className={`${completed ? 'opacity-80' : ''} w-full px-2 pb-2 bg-gray-200 rounded flex flex-col justify-between items-center`}>
            <header className='flex items-center justify-end gap-2 w-full'>
                {todo.completed
                    ?
                    <PendingButton />
                    :
                    (editable ? (<FinishEditingButton />) : <CompleteButton />)
                }
                <RemoveButton />
                {!todo.completed && (
                    <EditButton />
                )}
            </header>
            <hr className='w-[calc(100%+1rem)]  border-solid border-gray-300 mb-2' />
            {editable ? <EditTodo ref={ref} /> : <TodoText />}

        </div >
    )
}