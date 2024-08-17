import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import AxiosService from '../utils/AxiosService';
import { toast } from 'react-toastify';
import { useLogout } from '../hooks/UseLogout';
import Table from 'react-bootstrap/Table'
import ApiRoutes from '../utils/ApiRoutes';
import Topbar from './TopBar'
import Button from 'react-bootstrap/esm/Button';

function AdminDashboard() {
  const [users, setUsers] = useState([])
  let logout = useLogout()

  let getdata = async() => {
    try {
      let res = await AxiosService.get(`${ApiRoutes.GETALLUSERS.path}`,{
        authenticate : ApiRoutes.GETALLUSERS.authenticate
      })
      if(res.status === 200){
        toast.success(res.data.message)
        setUsers(res.data.users)
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
  <Topbar/>
  <Container fluid>
    <Button onClick={getdata}>Refresh</Button>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Random string</th>
          <th>Status</th>
          <th>CreatedAt</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((e,i)=> {
            return <tr key={e._id}>
               <td>{i+1}</td>
               <td>{e.name}</td>
               <td>{e.email}</td>
               <td>{e.role}</td>
               <td>{e.randomString}</td>
               <td>{e.status ? "Active" : "Inactive"}</td>
               <td>{e.createdAt}</td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </Container>
  </>
}

export default AdminDashboard