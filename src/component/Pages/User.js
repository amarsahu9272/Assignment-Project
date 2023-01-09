import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Users() {
    const [users, setUsers] = useState([]);
    const [search, setSearch]= useState()
    // const [filter, setFilter] = useState([])
  
    useEffect(() => {
      
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      }
    }, []);

    //  useEffect(()=>{
    //   const result=users.filter((x)=>{
    //     return x.toLowerCase().match(search.toLowerCase())
    //   });
    //   setFilter(...filter, result);
    //  },[search])

  
    return (
      <div>
      <table>
      <thead>
        <tr>
          <th >Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>State</th>
          <th>City</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.email}>
            <td>{user.name.first} {user.name.last}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.location.state}</td>
            <td>{user.location.city}</td>
            <td><img src={user.picture.medium} alt=''/></td>
          </tr>
        ))}
        
      </tbody>
      <pagination/>
    </table>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    );
  }
  export default Users
