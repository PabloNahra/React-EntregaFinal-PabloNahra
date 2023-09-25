
import React, { Component, useState } from "react"
import { render } from "react-dom"

export default function CheckOut() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleChange = event => {
    setName(event.target.value)
  }
  const handleChange2 = event => {
    setEmail(event.target.value)
  }
  const handleChange3 = event => {
    setPhone(event.target.value)
  }

  return (
    <form style={{display:'flex'}}>
      <div>Tus Datos</div>
      <label>Name</label>
      <input type="text" value={name} onChange={handleChange} />
      <label>email</label>
      <input type="mail" value={email} onChange={handleChange2} />
      <label>Phone</label>
      <input type="number" value={phone} onChange={handleChange3} />
    </form>
  )
}

