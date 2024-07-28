// const express=require('express')
import express from 'express'
// const { register, login, logout } = require('../controllers/authController.js')
import { register,login,logout } from '../controllers/authController.js'
const router= express.Router()

router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)

export default router