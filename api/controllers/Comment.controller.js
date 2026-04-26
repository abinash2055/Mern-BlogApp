import { handleError } from '../helpers/handleError.js';
import Comment from '../models/comment.model.js';

export const addComment = async (req, res, next) => {
  try {
    const { author, blogid, comment } = req.body;

    const newComment = await Comment({
      author: author,
      blogid: blogid,
      comment: comment,
    });

    await newComment.save();

    res.status(200).json({
      success: true,
      message: 'Comment submitted Successfully....',
      comment: newComment,
    });
  } catch (error) {
    return next(handleError(500, error.message));
  }
};

export const getComments = async (req, res, next) => {
  try {
    const { blogid } = req.params;

    const comments = await Comment.find({ blogid })
      .populate('author', 'name avatar')
      .sort({ createdAt: -1 })
      .lean()
      .exec();

    res.status(200).json({
      comments,
    });
  } catch (error) {
    return next(handleError(500, error.message));
  }
};
