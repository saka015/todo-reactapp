import React from 'react'
import Task from './Task'


const Home = () => {
  return (
    <div className='container'> 

        <form >
            <input type="text" placeholder='Title' />
            <textarea placeholder='Description'></textarea>


            <button type='submit'>ADD</button>
        </form>

        <Task />

    </div>
  )
}

export default Home