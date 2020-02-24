const { Router } = require("express");

module.exports = function({ CommentController }) {
  const router = Router();
  router.get("/:ideaId", CommentController.getIdeaComments);
  router.get("/:commentId/unique", CommentController.get);
  router.post("/:ideaId", CommentController.create);
  router.patch("/:ideaId", CommentController.update);
  router.delete("/:ideaId", CommentController.delete);
  return router;
};
