const router = require('express').Router();
const handle=require('../handlers');
const auth=require('../middlewares/auth')

router.route('/').get(handle.showPoll).post(auth,handle.createPoll);

router.route('/user').get(auth,handle.userPolls);

router
    .route('/:id')
    .get(handle.getPoll)
    .post(auth,handle.vote)
    .delete(auth,handle.deletePoll); 

module.exports=router;