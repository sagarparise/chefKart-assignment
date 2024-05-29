import { createContext, useEffect, useState } from "react";

 

 export const store = createContext();

 const StoreProvider = ({children})=>{
  const[data, setData] = useState(null)
  useEffect(()=>{
    //fetching data from api
    fetchData();
  }, []);

  const fetchData = async()=>{
    try {
      const response = await fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
      const data = await response.json();
      console.log(data)   
      setData(data)
    } catch (error) {
      console.log(error)
    }

  };
  return (
    <store.Provider value={{data}}>
      {children}
    </store.Provider>
  )
 }

 export default StoreProvider;