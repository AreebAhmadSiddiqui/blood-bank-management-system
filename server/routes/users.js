import express  from 'express';
import { signup, login } from '../controllers/auth.js'
import { getUsers, addUser} from '../controllers/users.js'

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.get('/getUsers', getUsers)
router.post('/addUser', addUser)

export default router; 