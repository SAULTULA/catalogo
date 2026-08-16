import styles from './ItemCard.module.css';

const ItemCard = ({ item, onClick }) => {
  return (
    <article className={styles.card} onClick={() => onClick(item)}>
      <div className={styles.card__content}>
        <div className={styles.card__icon}>
          {item.type === 'player' ? '🎵' : '🌐'}
        </div>
        <h3 className={styles.card__title}>{item.title}</h3>
        <p className={styles.card__action}>Probar Muestra &rarr;</p>
      </div>
    </article>
  );
};

export default ItemCard;
