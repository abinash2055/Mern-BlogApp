import express from 'express';
import { addComment, getComments } from '../controllers/Comment.controller.js';

const CommentRoute = express.Router();

CommentRoute.post('/add', addComment);
CommentRoute.get('/get/:blogid', getComments);

export default CommentRoute;
