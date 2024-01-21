const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter.js');
// const adminRouter = require('./adminRouter.js');


router.use('/user', userRouter);
// router.use('/admin', adminRouter);


module.exports = router;
