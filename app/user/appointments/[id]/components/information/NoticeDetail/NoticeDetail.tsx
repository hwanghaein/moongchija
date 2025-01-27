"use client";

import Modal from "@/components/modal/Modal";
import styles from "./NoticeDetail.module.scss";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import Button from "@/components/button/Button";
import NoticeBox from "../NoticeBox/NoticeBox";

const NoticeDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleRegister = () => {
    alert("등록되었습니다"); // 등록 버튼 클릭 시 alert 표시
    closeModal(); // 모달 닫기
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>공지사항</span>
          <FaPlus className={styles.plusIcon} onClick={openModal} />
        </div>

        {/* 공지사항 개별 박스 */}
        <div className={styles.wrapper}>
          <NoticeBox />
          <NoticeBox />
          <NoticeBox />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.noticeModalContainer}>
          <div className={styles.noticeModalBox}>
            <span className={styles.noticeTitle}>공지사항 글쓰기</span>
            <textarea
              className={styles.noticeContent}
              placeholder="공지사항을 작성해주세요."
            />
            <div className={styles.noticeButton}>
              <Button
                text="등록"
                size="sm"
                color="--primary-color"
                active={true}
                onClick={handleRegister}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NoticeDetail;
