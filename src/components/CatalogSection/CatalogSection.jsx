import styles from './CatalogSection.module.css';
import ItemCard from '../ItemCard/ItemCard';

const CatalogSection = ({ title, items, onItemClick }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>{title}</h2>
      {items.length > 0 ? (
        <div className={styles.section__grid}>
          {items.map((item) => (
            <ItemCard key={item.id} item={item} onClick={onItemClick} />
          ))}
        </div>
      ) : (
        <p className={styles.section__empty}>Próximamente...</p>
      )}
    </section>
  );
};

export default CatalogSection;
