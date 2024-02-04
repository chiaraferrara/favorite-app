### Obiettivo dell'esercizio

Sviluppare un'applicazione web con ReactJS utilizzando il comando `create-react-app` con il template TypeScript. L'applicazione permetterà agli utenti di creare, visualizzare contenuti e gestire una lista di preferiti. Si richiede di utilizzare, ove possibile, `styled-components` per lo styling, una rigorosa tipizzazione TypeScript per migliorare la manutenibilità del codice, e la persistenza dei dati attraverso `localStorage` per mantenere lo stato dei preferiti anche dopo il riavvio del browser.

### Requisiti

1. **Inizializzazione del Progetto:**
   - Utilizzare `npx create-react-app nome-app --template typescript` per creare un nuovo progetto React con TypeScript.
   - Installare `styled-components` per il CSS-in-JS e aggiungere i tipi necessari per TypeScript con `npm install styled-components @types/styled-components`.

2. **Struttura dell'Applicazione:**
   - Implementare una **barra di navigazione** superiore per spostarsi tra le pagine "Home" e "Preferiti".
   - Nella pagina "Home", visualizzare un **form** per la creazione di un nuovo contenuto con campi per titolo, descrizione e URL dell'immagine.
   - Al di sotto del form, mostrare una **lista di card** che rappresentano i contenuti creati. Ogni card deve visualizzare il titolo, la descrizione, l'immagine e avere un bottone per aggiungere o rimuovere il contenuto dai preferiti.
   - Nella pagina "Preferiti", mostrare le card che sono state aggiunte ai preferiti con la possibilità di rimuoverle dalla lista tramite un bottone.

3. **Funzionalità:**
   - Implementare la logica per **aggiungere un nuovo contenuto** tramite il form. Ogni nuovo contenuto deve essere aggiunto alla lista visualizzata nella home.
   - Consentire agli utenti di **aggiungere o rimuovere contenuti dai preferiti**. Questa preferenza deve essere riflessa in tempo reale sulla UI.
   - Nella pagina dei Preferiti, fornire la funzionalità per **rimuovere contenuti** dalla lista dei preferiti.

4. **Persistenza dei Dati:**
   - Utilizzare `localStorage` per salvare lo stato dei contenuti e dei preferiti, in modo che le informazioni persistano tra le sessioni del browser.

5. **Styled-Components e TypeScript:**
   - Utilizzare `styled-components` per lo styling dei componenti. Definire temi, varianti e stili riutilizzabili per mantenere il codice ordinato e facilmente manutenibile.
   - Applicare una rigorosa tipizzazione TypeScript in tutto il progetto per definire props, stati e oggetti, migliorando così la sicurezza del codice e riducendo gli errori in fase di sviluppo.

### Criteri di Valutazione

- **Funzionalità:** L'applicazione deve soddisfare tutti i requisiti funzionali descritti.
- **Codice Pulito e Organizzazione:** Il codice deve essere ben organizzato, commentato e seguendo le best practice di React e TypeScript.
- **Design e UX:** L'interfaccia utente deve essere intuitiva e piacevole. L'uso di `styled-components` deve contribuire a un'esperienza utente coesa e personalizzata.
- **Persistenza dei Dati:** La gestione dei dati con `localStorage` deve essere implementata correttamente per garantire una buona esperienza utente.
- **Utilizzo di TypeScript:** La tipizzazione deve essere utilizzata in modo efficace per ridurre gli errori e migliorare la leggibilità del codice.

### Risorse Consigliate

- [Documentazione ufficiale di React](https://reactjs.org/docs/getting-started.html)
- [Styled-Components](https://styled-components.com/docs)
- [Uso di localStorage in React](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Documentazione TypeScript per React](https://www.typescriptlang.org/docs/handbook/react.html)
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
