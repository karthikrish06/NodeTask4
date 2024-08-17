import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import AxiosService from '../utils/AxiosService';
import { toast } from 'react-toastify';
import { useLogout } from '../hooks/UseLogout';
import ApiRoutes from '../utils/ApiRoutes';
import Button from 'react-bootstrap/esm/Button';
import TopBar from './TopBar'

function UserDashboard() {

  const [user, setUser] = useState([])
  let logout = useLogout()

  let getdata = async() => {
    try {
      let id = sessionStorage.getItem('id')
      let res = await AxiosService.get(`${ApiRoutes.GETALLUSERS.path}/${id}`,{
        authenticate : ApiRoutes.GETALLUSERS.authenticate
      })
      if(res.status === 200){
        toast.success(res.data.message)
        setUser(res.data.user)
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message)
      if(error.response.status === 402){
        logout()
      }
    }
  }
  useEffect(() => {
    getdata()
  },[])

  return <>
    <TopBar/>
    <Container fluid>
      <Button onClick={getdata}>Refresh</Button>
      <div>Name - {user.name}</div>
    <div>Email - {user.email}</div>
    <div>Status - {user.status?"Active":"Inactive"}</div>
    <div>Role - {user.role}</div>
    <div>Random string - {user.randomString}</div>
    </Container>
  </>
}

export default UserDashboard