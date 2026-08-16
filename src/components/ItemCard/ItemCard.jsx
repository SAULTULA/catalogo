import { useState } from 'react';
import styles from './ItemCard.module.css';

const getPreviewUrl = (url) => {
  if (url.startsWith('http')) {
    return `https://image.thum.io/get/width/600/crop/400/${url}`;
  }
  return null;
};

const ItemCard = ({ item, onClick }) => {
  const previewUrl = getPreviewUrl(item.url);
  const [imgError, setImgError] = useState(false);

  return (
    <article className={styles.card} onClick={() => onClick(item)}>
      <div className={styles.card__preview}>
        {previewUrl && !imgError ? (
          <img
            src={previewUrl}
            alt={`Vista previa de ${item.title}`}
            className={styles.card__img}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles['card__img--placeholder']}>
            <span>{item.type === 'player' ? '🎵' : '🌐'}</span>
            <p>Vista previa no disponible</p>
          </div>
        )}
        <div className={styles.card__overlay}>
          <p className={styles.card__action}>Probar Muestra &rarr;</p>
        </div>
      </div>
      <div className={styles.card__footer}>
        <h3 className={styles.card__title}>{item.title}</h3>
      </div>
    </article>
  );
};

export default ItemCard;
