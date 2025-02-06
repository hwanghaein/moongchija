"use client";
import { useState } from "react";
import styles from "./UserName.module.scss";
import useInput from "@/app/(anon)/signup/hooks/useInput";
import Button from "@/components/button/Button";

import UserAppointmentCount from "./UserAppointmentCount";
import { useUser } from "@/context/UserContext";

const UserName = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { value: nickname, onChange: handleChangeInput } = useInput("");
  const { user } = useUser();

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };
  return (
    <div className={styles.userNameBox}>
      <div className={styles.editingBox}>
        {isEditing ? (
          <>
            <label htmlFor="nickname" className={styles.hiddenLabel}>
              닉네임
            </label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={handleChangeInput}
              placeholder="닉네임을 입력해 주세요."
              className={styles.userNameInput}
            />
          </>
        ) : (
          <div className={styles.userName}>
            <h1>{user?.nickname}</h1>
          </div>
        )}

        <div className={styles.editButtonBox}>
          <Button
            text={isEditing ? "변경" : "수정"}
            size="xs"
            onClick={handleEditClick}
          />
        </div>
      </div>

      <UserAppointmentCount />
    </div>
  );
};

export default UserName;
