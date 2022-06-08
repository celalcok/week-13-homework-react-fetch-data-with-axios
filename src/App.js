import {useState,useEffect} from 'react'
import axios from 'axios';
import Button from './components/Button';
import './App.css'
import Loading from './components/Loading';
import ListPosts from './components/ListPosts';
import ListUsers from './components/ListUsers';
import ListTodos from './components/ListTodos';

function App() {
const [request, setRequest] = useState("posts");
const [loading, setLoading] = useState(false);
const [list, setList] = useState(null)
const [error, setError] = useState(false)
const onClick =(e)=>{
  setList(null);
  setLoading(!loading);
  switch (e.target.id) {
    case "post":
      setRequest("posts");
      break;
    case "user":
      setRequest("users");
      break;
      
      default:
        setRequest("todos");
      break;
  }

}

useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/"+request)
  .then((res)=>{
    setTimeout(() => {
      setList(res.data)
    }, 2000);
  })
  .catch((err)=>{
    console.log(err);
    setError(true);
  })

},[loading,request])


  if(list === null)
    return <Loading/>
  if(error)
    return <h1>Server'da bir  hata oluştu.</h1>
  return (
    <div className="App">
      <header className="App-header">
        <div className='btns'>
          <Button btnId="post"title="Get Posts" onClick={onClick}/>
          <Button btnId="user"title="Get Users" onClick={onClick}/>
          <Button btnId="todo"title="Get Todos" onClick={onClick}/>
        </div>
        <div className="data-container">
          {request==="posts" && <ListPosts list={list}/>}
          {request==="users" && <ListUsers list={list}/>}
          {request==="todos" && <ListTodos list={list}/>}
        </div>
        <p>
        {request==="posts" && "Post Count: "+list.length}
          {request==="users" && "User Count: "+list.length}
          {request==="todos" && "Todos Count: "+list.length}
        </p>

      </header>

    </div>
  );
}

export default App;
