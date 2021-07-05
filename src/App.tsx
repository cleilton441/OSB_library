import React, {useState} from 'react';
import Title from './componets/title/Title';
import Input from './componets/input/Input';
import Button from './componets/button/Button';
import Requests from './componets/requests/Requests';
import api from './services/api';
import './App.css'

function App() {

  const [data, setData] = useState([])
  const [text, setText] = useState('')
  
  async function getData (){

   await api.get(text).then((data)=> {
      setData(data.data.hits)
   }).catch((err)=>{
     console.log("Não foi possivel fazer a requisição pelo erro" + err)
   })

   console.log(data)   
  
  }

  return ( 
    <> 
    <div className="App"> 
      <Title/>
      <div className="main">
      <Input setText={setText}/>
      <Button onclick={getData}/>
      </div>
      <div className="requests">
      {data.length ? 
              data.map((response:any, key: number)=> (
      <Requests  author={response.author ? response.author : "Autor não informado"} title={response.title ? response.title : "Titulo não informado"} url={response.url ? response.url : "Url não informada"} key={key} />
              )) : <p/>}
      </div>
      </div> 
      </>
  );
}

export default App;
