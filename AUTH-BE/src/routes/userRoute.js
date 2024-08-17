import express from 'express'
import userController from '../controller/userController.js'
import Auth from '../helper/auth.js'

const router = express.Router()

router.get('/',Auth.authenticate,Auth.adminGuard,userController.getAllUsers)
router.get('/:id',Auth.authenticate,userController.getUserById)
router.post('/createUser',userController.createUser)
router.post('/login',userController.login)
router.put('/forgotPassword',userController.forgotPassword)
router.post('/verifyCode',userController.verifyCode)
router.post('/updatePassword',userController.updatePassword)

export default router