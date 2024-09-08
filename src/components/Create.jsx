import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const history = useNavigate()

    const [header, setHeader] = useState("Header")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email)
        axios.post(
            'https://66d59d58f5859a704266cf75.mockapi.io/crud-test',
           {
                name:name,
                email:email,
                header
            }
        )
        
        .then(() => {
            history("/read")
        })
    }

  return (
    <div>
      <>
      <h2>Create</h2>
      <form>
      <div className="mb-3">
    <label className="form-label" style={{marginLeft:"-70%"}}>Name</label>
    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label className="form-label" style={{marginLeft:"-42%"}}>Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
  </div>
  
 
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
  
</form>

      </>
    </div>
  )
}

export default Create
