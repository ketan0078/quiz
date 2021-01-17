import express from 'express'
import {createQuiz,getquizbyid,updatequiz} from '../controllers/quizcontroller.js' 
import {protect} from '../middleware/auth.js'

const router= express.Router()

router.route('/createquiz').post(protect,createQuiz)
router.route('/solvequiz/:id').get(protect,getquizbyid)
router.route('/updatequiz/:id').put(protect,updatequiz)

export default router