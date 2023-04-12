import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
import {
  clearMessage,
  deleteRoom,
  getallMessages,
  pushMessage,
} from "../../JS/actions/roomactions";
import "./Chat.css";
import MessageOfferModal from "../Home/Offer/MessageOfferModal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const socket = io.connect("http://localhost:8000");

const Chat = ({ ChatData }) => {
  const prevMessages = ChatData.messages;
  const dispatch = useDispatch();
  const sitters = useSelector((state) => state.userM.sitters);
  const currentUser = useSelector((state) => state.userR.currentUser);
  const owners = useSelector((state) => state.offerR.owners);
  
  const [messageList, setMessageList] = useState([]);
 
  useEffect(() => {
    socket.emit("join_room", ChatData._id);
    socket.on("recieve_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
  const [message, setmessage] = useState("");

  const handleChange = (e) => {
    setmessage(e.target.value);
  };

  const pushMsgData = {
    roomID: ChatData._id,
    messages: [
      {
        role: currentUser.role,
        message: message,
        created_on:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      },
    ],
  };
  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        room: ChatData._id,
        author: currentUser.first_name,
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      dispatch(pushMessage(pushMsgData));
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);

      setmessage("");
    }
  };

 
  const handleShow = () => setShow(true);
  const [OfferData, setOfferData] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setOfferData({});
    setShow(false);
  };

  const [showDeleteModal, setshowDeleteModal] = useState(false);

  const handleCloseDeleteModal = () => setshowDeleteModal(false);
  const handleShowDeleteModal = () => setshowDeleteModal(true);
  const handleDelete = () => {
    dispatch(deleteRoom(ChatData._id));
  };

  const [showClearModal, setshowClearModal] = useState(false);

  const handleCloseClearModal = () => setshowClearModal(false);
  const handleShowClearModal = () => setshowClearModal(true);
  
  const handleClear = () => {
     dispatch(clearMessage(ChatData._id));
    setshowClearModal(false);
    
    setMessageList([]);
    setTimeout(() => {
      dispatch(getallMessages())
    }, 500);
    
  };
  return (
    <div className="container py-4" style={{ paddingRight: "40px" }}>
      <div>
        <div className="card" id="chat2">
          <div style={{background:"#751DD5"}} className="card-header d-flex justify-content-between align-items-center p-3">
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              {sitters.map((s) =>
                s._id == ChatData.sitter &&
                currentUser._id != ChatData.sitter ? (
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      border:"1px white solid",
                      borderRadius: "50%",
                    }}
                    src={s.img}
                    alt="0"
                  />
                ) : (
                  ""
                )
              )}

              <h5 className="mb-0" style={{color:"white"}}>
                {sitters.map((s) =>
                  s._id == ChatData.sitter && currentUser._id != ChatData.sitter
                    ? `${s.first_name} ${s.last_name}`
                    : ""
                )}
                {owners.map((o) =>
                  o._id == ChatData.client && currentUser._id != ChatData.client
                    ? `${o.first_name} ${o.last_name}`
                    : ""
                )}
              </h5>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={handleShowClearModal} className="Clear">
                <i class="fas fa-eraser"></i>
              </button>
              <button onClick={handleShowDeleteModal} className="Delete">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
          <div
            className="card-body overflow-auto"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: 400 }}
          >
            <div>
              <div>
                <ScrollToBottom className="Height_container">
                  {ChatData.messages.length == 0&&messageList.length==0 ? (
                    <p
                      style={{
                        fontSize: "small",
                        color: "gray",
                        textAlign: "center",
                      }}
                    >
                      <i class="fas fa-paw"></i>Type a message to start a
                      conversation<i class="fas fa-paw"></i>
                    </p>
                  ) : (
                    prevMessages.map((e) => (
                      <div>
                        <div
                          className={
                            e.role == currentUser.role
                              ? "d-flex flex-row justify-content-start"
                              : "d-flex flex-row justify-content-end"
                          }
                        >
                          <p
                            style={{ backgroundColor: "#dd9679" }}
                            className={
                              e.role == currentUser.role
                                ? "small p-2 ms-3 mb-1 rounded-3 "
                                : "small p-2 me-3 mb-1 text-white rounded-3 bg-primary "
                            }
                          >
                            {e.message}
                          </p>
                          {sitters.map((s) =>
                            s.role == e.role &&
                            ChatData.sitter == s._id &&
                            currentUser._id !== ChatData.sitter ? (
                              <img
                                src={s.img}
                                alt="0"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "50%",
                                }}
                              />
                            ) : (
                              ""
                            )
                          )}
                          {owners.map((o) =>
                            o.role == e.role &&
                            ChatData.client == o._id &&
                            currentUser._id !== ChatData.client ? (
                              <img
                                src={o.img}
                                alt="0"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "50%",
                                }}
                              />
                            ) : (
                              ""
                            )
                          )}
                        </div>
                        <div>
                          <p
                            className="small me-3 rounded-3 text-muted "
                            style={
                              e.role == currentUser.role
                                ? {
                                    display: "flex",
                                    justifyContent: "start",
                                    paddingLeft: "15px",
                                  }
                                : {
                                    display: "flex",
                                    justifyContent: "end",
                                    paddingRight: "40px",
                                  }
                            }
                          >
                            {e.created_on}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                  {/* ChatData.messages.length==0?"no mesg": */}
                  {messageList.length==0&&ChatData.messages.length == 0?"":messageList.map((msgContent) =>
                    msgContent.room == ChatData._id ? (
                      <div>
                        <div
                          className={
                            msgContent.author == currentUser.first_name
                              ? "d-flex flex-row justify-content-start"
                              : "d-flex flex-row justify-content-end"
                          }
                        >
                          <p
                            style={{ backgroundColor: "#dd9679" }}
                            className={
                              msgContent.author == currentUser.first_name
                                ? "small p-2 ms-3 mb-1 rounded-3 "
                                : "small p-2 me-3 mb-1 text-white rounded-3 bg-primary "
                            }
                          >
                            {msgContent.message}
                          </p>
                          {sitters.map((s) =>
                            s.first_name == msgContent.author &&
                            currentUser.first_name !== msgContent.author ? (
                              <img
                                src={s.img}
                                alt="0"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "50%",
                                }}
                              />
                            ) : (
                              ""
                            )
                          )}
                          {owners.map((o) =>
                            o.first_name == msgContent.author &&
                            currentUser.first_name !== msgContent.author ? (
                              <img
                                src={o.img}
                                alt="0"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "50%",
                                }}
                              />
                            ) : (
                              ""
                            )
                          )}
                        </div>
                        <div>
                          <p
                            className="small me-3 rounded-3 text-muted "
                            style={
                              currentUser.first_name == msgContent.author
                                ? {
                                    display: "flex",
                                    justifyContent: "start",
                                    paddingLeft: "15px",
                                  }
                                : {
                                    display: "flex",
                                    justifyContent: "end",
                                    paddingRight: "40px",
                                  }
                            }
                          >
                            {msgContent.time}
                          </p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  )}
                </ScrollToBottom>
              </div>
            </div>
          </div>
          <div
            className="card-footer text-muted p-3"
            style={{ display: "flex", gap: "20px", alignItems: "center"  }}
          >
            <img
              src={currentUser.img}
              alt="avatar 3"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <input
              type="text"
              value={message}
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Type message"
              onChange={handleChange}
              onKeyPress={(e) => {
                e.key === "Enter" && sendMessage();
              }}
            />
            {currentUser.role == "client" ? (
              <button onClick={handleShow} className="Submit_two">
                Send offer
              </button>
            ) : (
              ""
            )}

            <a onClick={sendMessage} className="ms-3" href="#!">
              <i className="fas fa-paper-plane" />
            </a>
            <MessageOfferModal
              handleClose={handleClose}
              show={show}
              data={sitters.find((s) => (s._id == ChatData.sitter ? s : ""))}
              setOfferData={setOfferData}
              OfferData={OfferData}
            />
          </div>
        </div>
      </div>
      {/* delete modal */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header style={{ background: "white" }} closeButton>
          <Modal.Title>Delete conversation</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "white" }}>
          Are you sure you want to permanently delete this conversation?
        </Modal.Body>
        <Modal.Footer style={{ background: "white" }}>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      {/* clear modal */}
      <Modal show={showClearModal} onHide={handleCloseClearModal}>
        <Modal.Header style={{ background: "white" }} closeButton>
          <Modal.Title>Clear conversation</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "white" }}>
          Are you sure you want to clear this conversation?
        </Modal.Body>
        <Modal.Footer style={{ background: "white" }}>
          <Button variant="secondary" onClick={handleCloseClearModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClear}>
            Clear
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Chat;
