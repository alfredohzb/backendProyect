const BaseRepository = require("./base.repository");
class CommentRepository extends BaseRepository {
  constructor({ Comment }) {
    super(Comment);
    _comment = Comment;
  }
}
module.exports = CommentRepository;
