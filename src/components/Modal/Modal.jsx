import styles from './Modal.module.css';

const Modal = ({ item, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__backdrop} onClick={onClose} />
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          <h2 className={styles.modal__title}>{item.title}</h2>
          <div className={styles.modal__actions}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modal__external}
              title="Abrir en nueva pestaña"
            >
              Abrir en nueva pestaña ↗
            </a>
            <button
              className={styles.modal__close}
              onClick={onClose}
              aria-label="Cerrar ventana"
            >
              &times;
            </button>
          </div>
        </div>
        <div className={styles.modal__body}>
          <iframe 
            src={item.url} 
            title={item.title}
            className={styles.modal__iframe}
            allow="autoplay; fullscreen; encrypted-media"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
