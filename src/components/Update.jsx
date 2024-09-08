import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Update = () => {

    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://66d59d58f5859a704266cf75.mockapi.io/crud-test/${id}`, {
            name: name,
            email: email
        })
       .then(() => {
        console.log('Update successfully')
        navigate("/read")
 
       });
    }

  return (
    <>
        <h2>Update</h2>
      <form>
      <div className="mb-3">
    <label className="form-label" style={{marginLeft:"-70%"}}>Name</label>
    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
  </div>
  <div className="mb-3">
    <label className="form-label" style={{marginLeft:"-42%"}}>Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email} />
  </div>
  
 
  <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
  
</form>
    </>
  )
}

export default Update
