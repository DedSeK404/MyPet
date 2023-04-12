const express = require("express");
const { addRoom, getAllMessages, pushMessages, deleteRoom, clearMessages } = require("../controllers/roomControllers");

const router = express.Router();

/**
 * @route POST /room/add
 * @description post review
 * @access protected(authentifié+role:client)
 */
router.post("/add", addRoom);

/**
 * @route get /room/
 * @description get all messages
 * @access protected(authentifié)
 */
router.get("/", getAllMessages);
/**
 * @route patch /room/push
 * @description push message
 * @access protected(authentifié)
 */
router.patch("/push", pushMessages); 
/**
 * @route delete /room/delete/:roomID
 * @description delete  room
 * @access protected
 */
router.delete("/delete/:roomID",   deleteRoom);
/**
 * @route patch /room/clear
 * @description clear messages
 * @access protected(authentifié)
 */
router.patch("/clear/:roomID", clearMessages); 

module.exports = router;
