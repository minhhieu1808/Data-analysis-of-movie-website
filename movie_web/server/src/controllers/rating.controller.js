import responseHandler from "../handlers/response.handler.js";
import ratingModel from "../models/rating.model.js";

const addRating = async (req, res) => {
  try {
    const ratedMedia = await ratingModel.findOne({
      user: req.user.id,
      mediaId: req.body.mediaId
    });

    if (ratedMedia) {
        await ratedMedia.remove();
        
    }
    
    const newRatedMedia = new ratingModel({
        ...req.body,
        user: req.user.id,
      });
      await newRatedMedia.save();
      
    responseHandler.created(res, newRatedMedia);
  } catch {
    responseHandler.error(res);
  }
};

const getRating = async (req, res) => {
    try {
        const ratingMedia = await ratingModel.findOne({
            user: req.user.id,
            mediaId: req.body.mediaId
          });
    if (!ratingMedia) return responseHandler.notfound(res);
      responseHandler.ok(res, ratingMedia);
    } catch {
      responseHandler.error(res);
    }
  };

export default { addRating, getRating };