import React, { useReducer, useState } from 'react'

const Subscription = () => {
    const defaultStates={
        isModalOpen:false,
        modalContent:'',
        people:[],
        person:{email:'',name:''}
    }
    const reducer=(state,action)=>{
      if (action.type === "UPDATE_EMAIL"){
        state.email=action.payload
      }
      if (action.type === "ADD_PERSON"){
        const {email,name}=action.payload
        console.log(email,name)
        const newPerson={...state.person.email, email, name}
        return {...state, person:newPerson}
      }

    }
    const [state,dispatch]=useReducer(reducer,defaultStates)
    const addEmail=()=>{
      console.log(state.email)
    }
    const getValue=(e)=>{
      const value=e.target.value
      const name=e.target.name
      const payloadData={name:'',email:''}
      dispatch({type:'ADD_PERSON',payload:{...payloadData,[name]:value}})
    }
  return (
    <div>
      <form action="">
      <input type="email" value={state.person.email} name='email' onChange={getValue} />
      <input type="email" value={state.person.name} name='name' onChange={getValue} />
      <button type='submit' onClick={addEmail}>add</button>
      </form>
        
    </div>
  )
}

export default Subscription