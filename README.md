# 🎵 ZEE The Don - Portfolio

Portfolio personale multi-pagina per DJ e Producer, sviluppato come progetto finale per il corso di Web Development di EPICODE.

## 📋 Descrizione del Progetto

Questo progetto consiste in un portfolio completo e responsive realizzato con HTML5, CSS3 e JavaScript vanilla. Il sito presenta l'identità artistica di ZEE The Don attraverso sei sezioni dedicate: Home, About, Music, Events, Gallery e Contact.

Il design segue un approccio **mobile-first** con particolare attenzione all'esperienza utente e all'accessibilità. La struttura è stata realizzata utilizzando HTML semantico, mentre i layout sono gestiti tramite **CSS Grid** e **Flexbox**.

### 🎯 Obiettivi

- Dimostrare la comprensione delle basi del web development
- Creare un'esperienza utente fluida e professionale
- Garantire la piena responsività su tutti i dispositivi
- Implementare interazioni JavaScript funzionali

## 🛠️ Tecnologie Utilizzate

- **HTML5** - Struttura semantica
- **CSS3** - Styling e animazioni
  - CSS Grid & Flexbox
  - Custom Properties (CSS Variables)
  - Media Queries
- **JavaScript** - Interazioni dinamiche
- **Font Awesome** - Icone social
- **Google Fonts** - Tipografia (Poppins)

## ✨ Funzionalità Principali

- ✅ **Responsive Design** - Ottimizzato per desktop, tablet e mobile
- ✅ **Drawer Menu** - Navigazione laterale animata con overlay
- ✅ **Sticky Navigation** - Navbar sempre visibile durante lo scroll
- ✅ **Form di Contatto** - Validazione HTML5
- ✅ **Gallery Dinamica** - Grid responsive di immagini
- ✅ **Timeline Eventi** - Visualizzazione cronologica
- ✅ **SEO Ottimizzato** - Meta tags e struttura semantica
- ✅ **Accessibilità** - ARIA labels e navigazione da tastiera

## 📁 Struttura del Progetto

```
portfolio/
├── index.html              # Homepage principale
├── README.md              # Documentazione progetto
├── css/
│   ├── style.css          # Stili globali e navbar
│   ├── about.css          # Stili pagina About
│   ├── contact.css        # Stili form contatto
│   ├── events.css         # Stili timeline eventi
│   ├── gallery.css        # Stili gallery grid
│   └── music.css          # Stili pagina Music
├── js/
│   ├── main.js            # Logica drawer menu
│   └── contact.js         # Gestione form contatto
├── pages/
│   ├── about.html         # Chi sono
│   ├── contact.html       # Form contatti
│   ├── events.html        # Timeline eventi
│   ├── gallery.html       # Galleria fotografica
│   └── music.html         # Musica e produzioni
└── images/
    ├── covers/            # Copertine album/tracce
    ├── events/            # Grafiche eventi
    ├── gallery/           # Galleria immagini
    ├── logo_arancione.svg # Logo principale
    ├── loro_nero.svg      # Favicon
    ├── sfondo_bianconero.jpg
    ├── bolo.jpg
    └── classic.jpg
```

## � Dettagli Tecnici

### JavaScript

Il progetto implementa due script principali:

- **main.js**: Gestisce la logica del drawer menu con:

  - Apertura/chiusura tramite hamburger button
  - Overlay per chiusura al click esterno
  - Supporto chiusura con tasto ESC
  - Blocco scroll durante apertura menu

- **contact.js**: Gestisce il form di contatto con:
  - Validazione HTML5
  - PreventDefault per submit
  - Alert di conferma invio
  - Reset automatico del form

### CSS

Ogni pagina ha il proprio foglio di stile dedicato oltre a `style.css` che contiene:

- Reset e variabili CSS globali
- Stili della navbar e drawer menu
- Layout responsive con media queries
- Animazioni e transizioni

## 💡 Processo di Sviluppo

Durante lo sviluppo del progetto ho affrontato diverse sfide tecniche, in particolare nella gestione della logica JavaScript per il drawer menu e nell'implementazione di layout complessi con CSS Grid e Flexbox.

Per superare queste difficoltà ho utilizzato:

- Documentazione ufficiale (MDN Web Docs)
- Tutorial e risorse online
- **GitHub Copilot** come assistente di sviluppo
- Test iterativi su dispositivi reali

Ogni soluzione è stata studiata, compresa e adattata alle specifiche esigenze del progetto, garantendo così un apprendimento effettivo delle tecnologie utilizzate.

## 🎨 Design

- **Palette colori**: Nero, bianco, arancione (#fe8c55)
- **Tipografia**: Poppins (Google Fonts)
- **Stile**: Minimal, moderno, professionale
- **Approccio**: Mobile-first, responsive

## 📱 Compatibilità

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 👤 Autore

**Matteo Zuppiroli**

- GitHub: [@Zuppi7](https://github.com/Zuppi7)
- Email: matteozuppiroli@gmail.com
- Progetto: Portfolio ZEE The Don

---

**Corso**: Web Development - EPICODE  
**Anno**: 2025  
**Licenza**: Progetto didattico
