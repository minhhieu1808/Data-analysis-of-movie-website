import privateClient from "../client/private.client";

const ratingEndpoints = {
  add: "user/rating",
};

const ratingApi = {
  add: async ({
    mediaId,
    mediaType,
    mediaTitle,
    mediaPoster,
    mediaRate,
    starRating
  }) => {
    try {
      const response = await privateClient.post(
        ratingEndpoints.add,
        {
          mediaId,
          mediaType,
          mediaTitle,
          mediaPoster,
          mediaRate,
          starRating
        }
      );

      return { response };
    } catch (err) { return { err }; }
  }
};

export default ratingApi;