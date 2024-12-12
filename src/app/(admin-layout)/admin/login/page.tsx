"use client";
import { adminLogin } from "@/actions/admin";
import styles from "./login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await adminLogin(password);

    if (result.success) {
      router.push("/admin/courses");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password (password=cantor)</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              className={styles.passwordInput}
            />
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
