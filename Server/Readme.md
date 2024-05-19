#### Connect To DB

- [] get connection string
- [] setup .env with MONGO_URL variable and assign the value
- [] import 'dotenv' and setup package
- [] import connect() and invoke in the starter
- [] restart the server
- [] mongoose V6 info

#### Basic Routes and Middleware

- [] setup / GET Route
- [] setup express.json() middleware
- [] setup 404 and errorHandler middleware
- [] import 'exress-async-errors' package

#### 404 vs ErrorHandler Middleware

#### Morgan Pacakge

- [Morgan Package](https://www.npmjs.com/package/morgan)

#### User Model

- [] create models folder and User.js file
- [] create schema with name,email, password (all type:String)
- [] export mongoose model

#### Validator Package

- [Validator](https://www.npmjs.com/package/validator)

#### Auth Routes Structure

- [] create controllers folder
- [] add authController file
- [] export (register,login,logout) functions
- [] res.send('some string value')
- [] create routes folder
- [] setup authRoutes file
- [] import all controllers
- [] setup three routes
- [] post('/register') post('/login') get('/logout')
- [] import authRoutes as authRouter in the app.js
- [] setup app.use('/api/v1/auth', authRouter)

#### Test Routes in Postman

#### Register Controller

- [] create user
- [] send response with entire user (only while testing)
- [] check if email already in use (schema and controller)
- [] ignore 'role'
- [] alternative 'admin' setup

#### Handle Password

- [] UserSchema.pre('save') - hook
- this points to User
- bcrypt.genSalt - number of rounds
- bcrypt.hash

#### JWT

- [] require 'jsonwebtoken' package
- [] create jwt - jwt.sign(payload,secret,options)
- [] verify jwt - jwt.verify(token,secret)
- [] add variables in .env JWT_SECRET=jwtSecret and JWT_LIFETIME=1d
- [] restart the server !!!!
- [] refactor code, create jwt functions in utils
- [] refactor cookie code
- [] setup func attachCookiesToResponse
- [] accept payload(res, tokenUser)
- [] create token, setup cookie
- [] optionally send back the response

#### Login Route

- [] check if email and password exist, if one missing return 400
- [] find user, if no user return 401
- [] check password, if does not match return 401
- [] if everything is correct, attach cookie
  and send back the same response as in register

#### Logout Route

- [] set token cookie equal to some string value
- [] set expires:new Date(Date.now())

#### User Routes Structure

- [] add userController file
- [] export (getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword) functions
- [] res.send('some string value')
- [] setup userRoutes file
- [] import all controllers
- [] setup just one route - router.route('/').get(getAllUsers);
- [] import userRoutes as userRouter in the app.js
- [] setup app.use('/api/v1/users', userRouter)

#### GetAllUsers and GetSingleUser

- [] Get all users where role is 'user' and remove password
- [] Get Single User where id matches id param and remove password
- [] If no user 404

#### Authenticate User Setup

#### Auth User Complete

#### Authorize Permissions Setup

- [] hardcode

#### Authorize Permissions Complete

- [] introduce params

#### ShowCurrentUser

- [] get user from req
- [] send response with user

#### UpdateUserPassword

- [] almost identical to login user
- [] add authenticateUser middleware in the route
- [] check for oldPassword and newPassword in the body
- [] if one missing 400
- [] look for user with req.user.userId
- [] check if oldPassword matches with user.comparePassword
- [] if no match 401
- [] if everything good set user.password equal to newPassword
- [] await user.save()

#### createTokenUser in Utils

- [] create a file in utils (createTokenUser)
- [] setup a function that accepts user object and returns userToken object
- [] export as default
- [] setup all the correct imports/exports and refactor existing code

#### updateUser with User.findOneAndUpdate()

- [] add authenticateUser middleware in the route
- [] check for name and email in the body
- [] if one is missing, send 400 (optional)
- [] use findOneAndUpdate()
- [] create token user, attachCookiesToResponse and send back the tokenUser

#### updateUser with user.save()

#### Setup and Apply checkPermissions()

#### Auth Continuation

#### Front End App

[Auth Workflow](https://react-node-user-workflow-front-end.netlify.app/)

#### Update User Model

- [] add following three properties
- [] verificationToken - String
- [] isVerified - {type:Boolean, default:false}
- [] verified - Date

#### Update Register Controller

- [] setup fake verificationToken - 'fake token'
- [] remove everything after User.create()
- [] send back success message and token

#### Update Login Controller

- [] right after isPasswordCorrect
- [] check if user.isVerified, if not 401

#### Verify Email Controller

- [] create verifyEmail in authController
- [] get verificationToken and email from req.body
- [] setup a '/verify-email' route in authRoutes
- [] test in a Postman
- [] check for user using email
- [] if no user 401
- [] if token does not match user token 401
- [] if correct set
- [] user.isVerified = true
- [] user.verified = Date.now()
- [] user.verificationToken = ''
- [] save use with instance method
- [] return msg:'email verified'

#### Email Setup

- [] re-watch project 08
- [] ethereal credentials (create account/login)
- [] install nodemailer
- [] create (nodemailerConfig, sendEmail,
  sendResetPasswordEmail, sendVerficationEmail) files in utils

#### Send Verification Link

- [] refactor sendEmail
- [] setup sendVerificationEmail.js
- [] pass arguments

#### Token Model

- [] create Token.js in models
- [] refreshToken,ip,userAgent - all String and required
- [] isValid - Boolean, default:true
- [] ref user
- [] timestamps true

#### Setup Token in Login Controller

#### Send Multiple Cookies

#### Check for Existing Token

#### Refactor Auth Middleware - Access , Refresh Token

#### Logout

#### Forgot/Reset Password Functionality

- User Model
- passwordToken {type:String}
- passwordTokenExpirationDate {type:Date}
- authController
- forgotPassword and resetPassword
- authRoutes
- post '/forgot-password' '/reset-password'

#### Forgot Password Controller

#### Send Reset Password Email

#### Reset Password Controller

#### Hash Password Token
