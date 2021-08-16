import React, {useState, useEffect} from "react";
import "./index.css"
const axios = require('axios').default;



  const DisplayList = () =>{
    const [usersList, setUsersList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(()=>{
        axios.get('https://reqres.in/api/users', {
        params: {
          page: pageNumber
        }
      })
      .then(function (response) {
        console.log(response.data);
        setUsersList(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    },[pageNumber]);
    const handleClick= (evt,i) =>{
        evt.preventDefault();
        setPageNumber(i);
    }

    
      return(
          <>
          <div className="list-container">
              {
                  usersList && usersList.map((obj,index)=>{
                    return(
                        <div className="list" key={index}>{obj.first_name}</div>
                    )
                  })
                  
                  
              }
          </div>
        <div className="paging-container">
            {Array(10).fill(1).map((el, i) =>
                <a className="page-item" href="" onClick={(evt)=>{handleClick(evt,i+1)}}>{i+1}</a>
            )}
        </div>
        </>
      )
  }

  export default DisplayList;
  

