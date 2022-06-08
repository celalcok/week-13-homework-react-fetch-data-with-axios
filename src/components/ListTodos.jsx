import React from 'react'

function ListTodos({list}) {
  return (


    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.userId}</td>
            <td>{item.title}</td>
            <td>{item.completed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ListTodos