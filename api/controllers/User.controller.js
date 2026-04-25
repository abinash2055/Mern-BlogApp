import { handleError } from '../helpers/handleError.js';
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import cloudinary from '../config/cloudinary.js';

export const getUser = async (req, res, next) => {
  try {
    const { userid } = req.params;
    const user = await User.findOne({ _id: userid }).lean().exec();

    if (!user) {
      next(handleError(404, 'User not Found...'));
    }

    res.status(200).json({
      success: true,
      message: 'User Data Found...',
      user,
    });
  } catch (error) {
    return next(handleError(500, error.message));
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const data = JSON.parse(req.body.data);
    const { userid } = req.params;

    const user = await User.findById(userid);
    user.name = data.name;
    user.email = data.email;
    user.bio = data.bio;

    if (data.password && data.password.length >= 8) {
      const hashedPassword = bcryptjs.hashSync(data.password, 10);
      user.password = hashedPassword;
    }

    // Uploading Image
    if (req.file?.path) {
      const uploadResult = await cloudinary.uploader
        .upload(req.file.path, {
          folder: 'Blog-App',
          resource_type: 'auto',
        })
        .catch((error) => {
          next(handleError(500, error.message));
        });

      user.avatar = uploadResult.secure_url;
    }

    await user.save();

    const newUser = user.toObject({ getters: true });
    delete newUser.password;

    res.status(200).json({
      success: true,
      message: 'User Data Updated...',
      user: newUser,
    });
  } catch (error) {
    return next(handleError(500, error.message));
  }
};
