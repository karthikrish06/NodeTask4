import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';

function ForgotPassword() {  

  let navigate = useNavigate()

  const handleCode = async(e) => {
    try {
      e.preventDefault()
      const formData = new FormData(e.target)
      const formProps = Object.fromEntries(formData)
      // console.log(formProps);

      let res = await AxiosService.put(`${ApiRoutes.FORGOTPASSWORD.path}`,formProps)
      // console.log(res);

      if(res.status === 200){
        toast.success(res.data.message)
        // sessionStorage.setItem('token',res.data.token)
        sessionStorage.setItem('role',res.data.role)
        sessionStorage.setItem('id',res.data.id)
        sessionStorage.setItem('email',res.data.email)
        // navigate('/')
        toast.success("Random string created")
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || error.message)
    }
  }

  const handleVerifyCode = async(ele) => {
    try{
      ele.preventDefault()
      const formData = new FormData(ele.target)
      const formProps = Object.fromEntries(formData)
      console.log(formProps);
      
      let res = await AxiosService.post(`${ApiRoutes.VERIFYCODE.path}`,formProps)
      // console.log(res);
      if(res.status === 200){
        toast.success(res.data.message)
        sessionStorage.setItem('role',res.data.role)
        sessionStorage.setItem('id',res.data.id)
        navigate('/passwordReset')        
      }
     
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message || error.message)
    }
  }

  return <>
    <Card style={{ width: '90%',margin : "auto",marginTop:"10%" }}>
      <Card.Body>
        <Card.Title className='text-center'>Forgot Password</Card.Title>

        <Form onSubmit={handleCode}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email'/>
          </Form.Group>
          <Button variant="primary" type="submit">Send Code</Button>      
        </Form>

        <Form onSubmit={handleVerifyCode} className='mt-5'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter code from email</Form.Label>
            <Form.Control type="text" placeholder="Enter code" name="randomString" />
          </Form.Group>
          <Button variant="success" type="submit">Submit</Button>      
        </Form>
      </Card.Body>
    </Card>

  </>
}

export default ForgotPassword