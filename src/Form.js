import React, { useState } from 'react'

const Form = ({ func }) => {

  const [title, setTitle] = useState("")
  const [descr, setDescr] = useState("")

  const handleForm = () => {

    func(title, descr);
    setTitle('');
    setDescr('');

  }

  return (
    <>
      <h3>Todos</h3>
      <table>
        <tbody>
          <tr>
            <td>Title</td>
            <td><input
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            /></td>
          </tr>
          <tr>
            <td>Descrption</td>
            <td><input
              value={descr}
              onChange={({ target }) => setDescr(target.value)}
            /></td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleForm}>Add</button>
    </>
  )
}
export default Form;