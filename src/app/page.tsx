"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";
import { HttpClient } from "@/api-services/http";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Home() {
  const [form, setForm] = useState({ username: "", password: "" });
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = HttpClient.post({ url: "/login", data: form }).then((res) => {
      console.log({ res });
      // @ts-ignore
      Cookies.set("bbk", res?.accessToken);
      // @ts-ignore
      Cookies.set("bbkuser", res?.id);
      router.push("/chat");
      return res;
    });

    console.log({ data });
  };
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <form
          onSubmit={handleSubmit}
          style={{
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
            width: "25rem",
            zIndex: 1000,
          }}
        >
          <h2>Login</h2>
          <div>
            <label style={{ display: "block" }}>User name</label>
            <input
              name={"username"}
              style={{
                padding: "1rem",
                backgroundColor: "#1B1C1E",
                outline: "none",
                borderRadius: "6px",
                border: "1px solid #475367",
                width: "100%",
              }}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div>
            <label style={{ display: "block" }}>Password</label>
            <input
              name={"password"}
              style={{
                padding: "1rem",
                backgroundColor: "#1B1C1E",
                outline: "none",
                borderRadius: "6px",
                border: "1px solid #475367",
                width: "100%",
              }}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            style={{
              background: "teal",
              padding: "1rem",
              width: "100%",
              outline: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
