import { useState } from 'react';
import styles from './App.module.css';
import CatalogSection from './components/CatalogSection/CatalogSection';
import Modal from './components/Modal/Modal';

const playersData = [
  {
    id: 'p1',
    title: 'Player Editable KSM',
    url: 'https://player-editable.ksmservicios.com.ar/',
    type: 'player'
  },
  {
    id: 'p2',
    title: 'Repro Hits 20',
    url: 'https://reprohits20.ksmservicios.com.ar/',
    type: 'player'
  },
  {
    id: 'p3',
    title: 'Círculo Radios Mundial',
    url: 'https://circulo-radios-mundial.vercel.app/',
    type: 'player'
  },
  {
    id: 'p4',
    title: 'Radio Centro',
    url: 'https://radiocentro.vercel.app/',
    type: 'player'
  },
  {
    id: 'p5',
    title: 'Radio Player (Local)',
    url: '/players/radioplayer.html',
    type: 'player'
  },
  {
    id: 'p6',
    title: 'Radio Player 2 (Local)',
    url: '/players/radio_player2.html',
    type: 'player'
  }
];

const websData = [
  {
    id: 'w1',
    title: 'KSM Servicios',
    url: 'https://ksmservicios.com.ar/',
    type: 'web'
  },
  {
    id: 'w2',
    title: 'Gente de Medios',
    url: 'https://gente-de-medios.vercel.app/',
    type: 'web'
  },
  {
    id: 'w3',
    title: 'KSM Sorteos',
    url: 'https://ksm-sorteos.vercel.app/',
    type: 'web'
  },
  {
    id: 'w4',
    title: 'Resto y Bares',
    url: 'https://restoybares.vercel.app/',
    type: 'web'
  },
  {
    id: 'w5',
    title: 'KSM Logística',
    url: 'https://ksm-logistica.vercel.app/',
    type: 'web'
  },
  {
    id: 'w6',
    title: 'Gran Remate',
    url: 'https://granremate.vercel.app/',
    type: 'web'
  },
  {
    id: 'w7',
    title: 'Skins Demo (Local)',
    url: '/webs/os-web-skins-demo.html',
    type: 'web'
  },
  {
    id: 'w8',
    title: 'Visual Catalog (Local)',
    url: '/webs/visual-catalog.html',
    type: 'web'
  },
  {
    id: 'w9',
    title: 'Catalogo 2 (Local)',
    url: '/webs/catalogo2.html',
    type: 'web'
  }
];

function App() {
  const [activeItem, setActiveItem] = useState(null);

  const handleOpenModal = (item) => {
    setActiveItem(item);
  };

  const handleCloseModal = () => {
    setActiveItem(null);
  };

  return (
    <div className={styles.app}>
      <header className={styles.app__header}>
        <h1 className={styles.app__title}>Catálogo de Muestras</h1>
        <p className={styles.app__subtitle}>Explora nuestros reproductores y sitios web destacados.</p>
      </header>
      
      <main className={styles.app__main}>
        <CatalogSection 
          title="Reproductores de Radio" 
          items={playersData} 
          onItemClick={handleOpenModal} 
        />
        
        <CatalogSection 
          title="Sitios Web" 
          items={websData} 
          onItemClick={handleOpenModal} 
        />
      </main>

      {activeItem && (
        <Modal item={activeItem} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
