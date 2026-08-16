import styles from './Modal.module.css';

const Modal = ({ item, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__backdrop} onClick={onClose} />
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          <h2 className={styles.modal__title}>{item.title}</h2>
          <button className={styles.modal__close} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modal__body}>
          <iframe 
            src={item.url} 
            title={item.title}
            className={styles.modal__iframe}
            allow="autoplay; fullscreen"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
