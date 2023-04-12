import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallSitters } from "../../JS/actions/usermanagementactions";
import { getallMessages } from "../../JS/actions/roomactions";
import Chat from "./Chat";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Conversation from "../../Assets/conversation.svg";
import "./Chat.css";

const Messages = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallSitters());
    dispatch(getallMessages());
  }, []);
  const sitters = useSelector((state) => state.userM.sitters);
  const currentUser = useSelector((state) => state.userR.currentUser);
  const messages = useSelector((state) => state.roomR.messages);
  const owners = useSelector((state) => state.offerR.owners);
  const filteredMessages = messages.filter((e) => e.client == currentUser._id);
  const SitterfilteredMessages = messages.filter(
    (e) => e.sitter == currentUser._id
  );
 
  return (
    <div style={{ marginTop: "3%" }}>
      {filteredMessages.length == 0 && SitterfilteredMessages.length == 0 ? (
        <img
          style={{
            width: "100%",
            borderRadius: "20px",
            border: "2px solid white",
            pointerEvents: "none",
          }}
          src={Conversation}
          alt="0"
        />
      ) : (
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            borderTop: "1px #D2D2D2 solid",
            borderRight: "1px #D2D2D2 solid",
            borderLeft: "1px #D2D2D2 solid",
            borderBottom: "2px #DD9679 solid",
            paddingLeft: "30px",
            paddingTop: "20px",
            minHeight: "100vh",
            paddingBottom: "10%",
          }}
        >
          <Tabs defaultActiveKey="" id="fill-tab-example" variant="tabs">
            {messages.map((e) =>
              currentUser._id == e.client ? (
                <Tab
                  tabClassName="profile-tabitem"
                  eventKey={e._id}
                  title={sitters.map((s) =>
                    s._id == e.sitter ? s.first_name : ""
                  )}
                >
                  <Chat ChatData={e} />
                </Tab>
              ) : currentUser._id == e.sitter ? (
                <Tab
                  tabClassName="profile-tabitem"
                  eventKey={e._id}
                  title={owners.map((s) =>
                    s._id == e.client ? s.first_name : ""
                  )}
                >
                  <Chat ChatData={e} />
                </Tab>
              ) : (
                ""
              )
            )}
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default Messages;
