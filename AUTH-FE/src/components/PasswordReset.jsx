import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function PasswordReset() {

  let navigate = useNavigate()

  const handleUpdatePassword = async(e) => {
    try {
      e.preventDefault()
      const formData = new FormData(e.target)
      const formProps = Object.fromEntries(formData)
      console.log(formProps);

      // let res = await AxiosService.post(`${ApiRoutes.UPDATEPASSWORD.path}`,formProps)
      // // console.log(res);

      // if(res.status === 200){
      //   toast.success(res.data.message)
      //   sessionStorage.setItem('token',res.data.token)
      //   sessionStorage.setItem('role',res.data.role)
      //   sessionStorage.setItem('id',res.data.id)
      //   if(res.data.role === 'admin'){
      //     navigate('/adminDashboard')
      //   }else if(res.data.role ==='user'){
      //     navigate('/userDashboard')
      //   }
      // }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || error.message)
    }
  }

    return <>
        <Card style={{ width: '90%',margin : "auto",marginTop:"10%" }}>
          <Card.Body>
            <Card.Title className='text-center'>Reset Password</Card.Title>
            <Form onSubmit={handleUpdatePassword}>
              <Form.Group className="mb-3">
                <Form.Label>Enter new password</Form.Label>
                <Form.Control type="text" placeholder="Enter password" name='newPassword'/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Enter Confirm password" name='confirmPassword'/>
              </Form.Group>
              <Button variant="primary" type="submit">Update Password</Button>      
            </Form>
          </Card.Body>
        </Card>
    </>
}

export default PasswordReset