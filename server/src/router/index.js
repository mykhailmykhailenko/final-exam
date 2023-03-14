const {Router} = require('express');
const userRouter = require('./userRouter');
const chatRouter = require('./chatRouter');
const contestRouter = require ('./contestRouter');
const rootRouter = Router();

rootRouter.use('/users', userRouter);
rootRouter.use('/chats', chatRouter);
rootRouter.use('/contests', contestRouter);


module.exports = rootRouter;
