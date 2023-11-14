import Table from './components/Table'
import { useEffect, useState } from "react";


const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=XudgcU3Lc-5IPANEofKaUul4SZqHE9k9s2h8BZq5634xYu_mWqNKvLK7kjkN3YHjmMcCO7eameVoIBHlvpGkmlQkFgipKV3-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHybbN-1pk0ZX1bpdPTNkJX6J74Pz0-i4mGbGIaAtzYfJh2XZ5Fikl6xTNZ42wz04op6II-JTgfXt6VijOia-sj6VKkk5CoMDtz9Jw9Md8uu&lib=MPXnavS6ZCEqar5hvS5tgGi-C3i7ee80U")
      .then((res) => res.json())
      .then((e) => {
        setData(e)
      })
  }, []);
  
  const PushData = () => {
    fetch(`databaseAPI`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
    });
  }

  data && PushData();

  return (
    <div className='container'>
      <h2>Spreadsheet View</h2>
      <Table/>
    </div>
  )
}

export default App
