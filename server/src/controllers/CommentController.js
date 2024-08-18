const CommentService = require('../services/commentService');

class CommentsController {
    async getAllComment(req, res) {
        try {
            const comment = await CommentService.getAllComment();
            return res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getOneComment(req, res) {
        try {
            const comment = await CommentService.getOneComment(req.params.id);
            return res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async createComment(req, res) {
        try {
            const comment = await CommentService.createComment(req.body);
            return res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async updateComment(req, res) {
        try {
            const comment = await CommentService.updateComment(req.params.id, req.body);
            return res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async deleteComment(req, res) {
        try {
            const comment = await CommentService.deleteComment(req.params.id);
            return res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}



module.exports = new CommentsController();