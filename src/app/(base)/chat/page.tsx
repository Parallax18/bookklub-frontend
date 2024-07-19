"use client";

import styles from "../../page.module.css";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
import { FormEvent, useEffect, useState } from "react";
import { HttpClient } from "@/api-services/http";

const FromBubble = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        marginBottom: "0.5rem",
      }}
    >
      <div
        style={{
          padding: "1rem",
          background: "teal",
          width: "max-content",
        }}
      >
        This is the first message
      </div>
    </div>
  );
};

const ToBubble = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        marginBottom: "0.5rem",
      }}
    >
      <div
        style={{
          padding: "1rem",
          background: "#af926b",
          width: "max-content",
        }}
      >
        This is the Response
      </div>
    </div>
  );
};

export default function Chat() {
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getAllUsers = async () => {
    const data = await HttpClient.get({ url: "/users" }).then((res) => res);
    // @ts-ignore
    data && setUsers(data);
    return data;
  };
  const socket = io("http://localhost:3000", {
    transports: ["websocket", "polling"],
    autoConnect: true,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    extraHeaders: {
      Authorization: Cookies.get("bbk") as string,
    },
  });

  useEffect(() => {
    getAllUsers();
    // getAllUsers();
  }, []);

  const handleOpenChat = () => {
    if (!socket.connected) {
      socket.connect();
    }
    console.log(socket.connected);
    // socket.emit("join-room", {
    //   recpientId: user,
    //   senderId: Cookies.get("bbkuser"),
    // });
  };
  useEffect(() => {
    console.log(socket);
    handleOpenChat();
  }, [socket.connected]);
  const [recipient, setRecepient] = useState({ id: "", username: "" });
  const [form, setForm] = useState("");
  //   useEffect(() => {
  socket.on("user-connected", (message) => {
    console.log("visitor ==>", {
      id: message?.from,
      username: message?.msg?.username,
    });
    setRecepient({ id: message?.from, username: message?.msg?.username });
    //   console.log("visitor ===>", message);
  });
  //   }, [socket]);

  // Client-side error handling
  const handleSendMessage = (e: FormEvent) => {
    socket.emit("test-fire", recipient.id);
    e.preventDefault();
    console.log({ form, id: recipient.id });

    try {
      if (socket.connected) {
        socket.emit("direct-message", {
          recipient: recipient.id,
          message: form,
        });
      }
    } catch (error) {
      console.error("Error emitting direct message:", error);
      // Handle error and disconnect logic, if needed
    }
  };

  socket.on("direct-message", (message) => {
    console.log({ message });
  });

  socket.on("connect_error", (err) => {
    console.log({ err });
  });

  // Client-side reconnection events
  socket.on("reconnect", (attemptNumber) => {
    console.log(`Reconnected after ${attemptNumber} attempts.`);
  });

  socket.on("reconnect_error", (error) => {
    console.error("Reconnection error:", error);
  });

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div
          style={{
            background: "rgb(58, 58, 58)",
            height: "100%",
            width: "20rem",
            zIndex: 1000,
          }}
        >
          {users?.map((item) => (
            <div
              // @ts-ignore
              key={item?.id}
              style={{
                padding: "2rem",
                borderBottom: "1px solid rgb(125, 125, 125)",
              }}
            >
              {/* @ts-ignore */}
              {item?.username} - {item?.email}
            </div>
          ))}
        </div>
        <div style={{ zIndex: 1000, padding: "1rem" }}>
          <h2 style={{ textAlign: "left", width: "100%" }}>
            {" "}
            {recipient?.username} - {recipient?.id}{" "}
          </h2>
          <button
            type="button"
            style={{
              background: "teal",
              padding: "1rem",
              outline: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              textAlign: "center",
            }}
            onClick={() => handleOpenChat()}
          >
            Connect
          </button>
          <div
            style={{
              height: "30rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <ToBubble />
            <FromBubble />
          </div>
          <form
            onSubmit={handleSendMessage}
            style={{
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
              width: "25rem",
            }}
          >
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                name={"message"}
                onChange={(e) => setForm(e.target.value)}
                style={{ padding: "1rem", width: "100%", border: "none" }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "primary.100",
                  // padding: "1rem",
                  width: "20%",
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                GO
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
