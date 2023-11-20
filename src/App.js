import {useState,useEffect} from 'react'
import './App.css';

function App() {
  const [userInfo,setUserInfo]=useState({
    image:'',
    Fname:'',
    Lname:'',
    gender:'',
    phone:''
  })
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    getdata();
  },[])
  async function getdata() {

    try{
      const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
      const data = await response.json();
      const carddata= data.results[0];
      console.log(carddata)
      setLoading(false);
      setUserInfo({
        image:carddata.picture.large,
        Fname:carddata.name.first,
        Lname:carddata.name.last,
        gender:carddata.gender,
        phone:carddata.phone
      })
    }catch(e){
      console.log('error occured',e)
    }
  }
  return (
    <div className="App">
      {
        loading?<div id="loading"></div>:
        <div className='my-card'>
          <div className='img-div'>
            <img className='user-img'src={userInfo.image}/>
          </div>
          <div className='content-div'>
            <div className='content col1'>
            <p>{userInfo.Fname}</p>
            <p>{userInfo.gender}</p>
            <p className='long-p'>{userInfo.phone}</p>
            </div>
            <div className='content col2'>
            <p>{userInfo.Lname}</p>
            </div>
          </div>
          
        </div>
      }
      
    </div>
  );
}

export default App;
