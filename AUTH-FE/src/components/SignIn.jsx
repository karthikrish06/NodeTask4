import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
  let navigate = useNavigate()
  const handleSubmit = async(e) => {
    try {
      //for printing the entered data in console without using state, use first 3 lines 
      e.preventDefault()
      const formData = new FormData(e.target)
      const formProps = Object.fromEntries(formData)
      console.log(formProps);

      let res = await AxiosService.post(`${ApiRoutes.SIGNIN.path}`,formProps)
      // console.log(res);

      if(res.status === 200){
        toast.success(res.data.message)
        sessionStorage.setItem('token',res.data.token)
        sessionStorage.setItem('role',res.data.role)
        sessionStorage.setItem('id',res.data.id)
        if(res.data.role === 'admin'){
          navigate('/adminDashboard')
        }else if(res.data.role ==='user'){
          navigate('/userDashboard')
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || error.message)
    }
  }

  return <>
    <Container fluid>
      <h2 className='text-center'>Sign-In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' />
        </Form.Group>

        <Form.Group className="mb-3">
          <Link to={'/forgotPassword'}>ForgotPassword</Link>
        </Form.Group>        

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    </Container>
  </>
}

export default Signin