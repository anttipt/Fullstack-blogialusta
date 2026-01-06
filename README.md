# 📝 Fullstack Blogialusta

Tämä on MERN-stackilla (MongoDB, Express, React, Node.js) toteutettu blogialusta, jossa voi:
- Luoda, muokata ja poistaa artikkeleita
- Tarkastella artikkeleita listana ja yksittäin
- Tallentaa datan MongoDB-tietokantaan

## 🔧 Teknologiat

- **Frontend:** React + Axios + React Router
- **Backend:** Express + MongoDB + Mongoose
- **Tietokanta:** MongoDB (local)
- **Tyylit:** CSS (voit lisätä esim. Tailwind jatkossa)

## 🚀 Käynnistys

### Backend
````
cd blog-backend
npm install
npm start
````
### Frontend
````
cd blog-frontend
npm install
npm start
````
## Projektirakenne
````
blog/  
├── blog-backend/  
│   ├── models/  
│   ├── index.js  
├── blog-frontend/  
│   ├── src/  
│   │   ├── pages/  
│   │   ├── components/  
│   │   ├── api.js  
│   ├── public/  
├── README.md  
````

## 🧪 Ominaisuudet

✅ Artikkelin luominen lomakkeella

✅ Artikkelin listaus etusivulla

✅ Artikkelin yksityisnäkymä

✅ Artikkelin muokkaus ja poisto

🔜 Kirjautuminen ja Markdown-tuki (tulossa)

## 📚 Oppimispisteet

## 🔹 Reititys Reactissa ja Expressissä

Projektissa opin rakentamaan reitityksen sekä frontendissä (React) että backendissä (Express).  
Nämä kaksi reitityskerrostoa toimivat yhdessä: React hallitsee käyttöliittymän sivunvaihdot, ja Express tarjoaa API-päätepisteet datan hakemiseen ja muokkaamiseen.

### 🟦 React Router – käyttöliittymän reititys

Reactissa käytin `react-router-dom`-kirjastoa sivujen näyttämiseen ilman sivun uudelleenlatausta.  
Tärkeimmät opitut asiat:

- Reitit määritellään `<Route>`-komponenteilla
- URL-parametreja (kuten artikkelin ID) luetaan `useParams`-hookilla
- Navigointi tehdään `useNavigate`-hookilla
- Komponentit renderöidään dynaamisesti URL:n perusteella

**Esimerkki:**

```jsx
<Route path="/article/:id" element={<ViewArticle />} />
```
Tämä reitti näyttää ViewArticle-komponentin ja välittää URL:ssä olevan :id-parametrin komponentille. 

### 🟩 Express – backendin API-reititys

Expressissä opin rakentamaan REST-tyylisiä reittejä, jotka käsittelevät HTTP-pyyntöjä (GET, POST, PUT, DELETE).
Nämä reitit vastaavat Reactin tekemistä Axios-kutsuista.
Tärkeimmät opitut asiat:
- Reitit määritellään app.get, app.post, app.put, app.delete
- URL-parametrit luetaan req.params
- JSON-data luetaan req.body
- MongoDB-kyselyt tehdään Mongoose-mallien avulla

**Esimerkki:**
```
app.get('/articles/:id', async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.json(article);
});
```
Tämä reitti palauttaa yksittäisen artikkelin ID:n perusteella.
### 🔗 Miten nämä toimivat yhdessä?

- React lähettää Axios-kutsun esim. osoitteeseen /articles/123
- Express vastaanottaa pyynnön ja hakee datan MongoDB:stä
- Express palauttaa JSON-vastauksen
- React näyttää datan käyttöliittymässä

Tämä opetti minulle, miten frontend ja backend keskustelevat keskenään selkeän API-rajapinnan kautta.

## 🔹 Axios-kutsut ja CORS

Projektissa opin tekemään HTTP-pyyntöjä Reactista backendille Axios-kirjaston avulla 
sekä ratkaisemaan CORS-ongelmat, joita syntyy kun frontend ja backend toimivat eri porteissa.

### 🟦 Axios – HTTP-kutsut Reactista

Axiosin avulla opin:
- tekemään GET-, POST-, PUT- ja DELETE-pyyntöjä
- käsittelemään vastaukset ja virheet
- rakentamaan oman `api.js`-tiedoston, joka keskittää kaikki API-kutsut yhteen paikkaan
- käyttämään `async/await`-syntaksia selkeämpään koodiin

**Esimerkki:**

```js
export const getArticles = () => API.get('/articles');
export const createArticle = (data) => API.post('/articles', data);
```
Axiosin käyttö teki koodista selkeää ja helposti ylläpidettävää, koska kaikki API-kutsut 
ovat yhdessä tiedostossa.

### 🟩 CORS – Cross-Origin Resource Sharing

Koska frontend (http://localhost:3000) ja backend (http://localhost:5000) toimivat eri porteissa, selain estää pyynnöt ilman CORS-sallintaa.
Opin:
- miksi CORS-virhe syntyy
- miten Expressissä sallitaan frontendin pyynnöt
- miten cors()-middleware ratkaisee ongelman
Esimerkki Expressissä:
```
const cors = require('cors');
app.use(cors());
```
Tämä sallii kaikki pyynnöt frontendiltä ja poistaa selaimen eston.

### 🔗 Miten nämä toimivat yhdessä?

- React lähettää Axios-pyynnön backendille
- Selain tarkistaa CORS-säännöt
- Express hyväksyy pyynnön cors()-middlewarellä
- Backend palauttaa JSON-datan
- React näyttää datan käyttöliittymässä

Tämä opetti minulle, miten frontend ja backend keskustelevat turvallisesti 
ja miten CORS vaikuttaa selainpohjaisiin sovelluksiin.

## 🔹 MongoDB:n käyttö Mongoose-kirjastolla

Projektissa opin käyttämään MongoDB-tietokantaa Mongoose-kirjaston avulla.  
Mongoose tarjoaa selkeän tavan määritellä tietomallit (schemat), tehdä kyselyitä ja hallita tietokannan rakennetta.

### 🟩 Mongoose-scheman luominen

Opin määrittelemään MongoDB-kokoelman rakenteen Mongoose-schemalla.  
Tämä tekee datasta ennustettavaa ja helpottaa virheiden havaitsemista.

**Esimerkki artikkelimallista:**

```js
const ArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
});
```
Tämä schema määrittelee, millaisia kenttiä artikkeli sisältää.

### 🟦 Mongoose-mallin käyttö

Scheman pohjalta luodaan malli, jonka avulla voidaan tehdä tietokantakyselyitä:
```
const Article = mongoose.model('Article', ArticleSchema);
```
Opin käyttämään mallia seuraaviin operaatioihin:

- uuden dokumentin luominen (Article.create)
- dokumenttien hakeminen (Article.find)
- yksittäisen dokumentin hakeminen ID:llä (Article.findById)
- dokumentin päivittäminen (Article.findByIdAndUpdate)
- dokumentin poistaminen (Article.findByIdAndDelete)

### 🧪 CRUD-operaatiot Mongoosea käyttäen

Projektissa toteutin kaikki keskeiset tietokantaoperaatiot:

Luo:
```
await Article.create(req.body);
````

Lue:
```
const articles = await Article.find();
```

Lue yksittäinen:
```
const article = await Article.findById(req.params.id);
```

Päivitä:
```
await Article.findByIdAndUpdate(req.params.id, req.body);
```

Poista:
```
await Article.findByIdAndDelete(req.params.id);
```

#### 🔗 Yhteys MongoDB:hen

Opin myös muodostamaan yhteyden MongoDB:hen:
```
mongoose.connect('mongodb://localhost:27017/blog');
```
Tämä yhdistää backendin paikalliseen MongoDB-instanssiin.

### 🎯 Mitä opin?

- Miten MongoDB:n dokumenttipohjainen rakenne toimii
- Miten Mongoose helpottaa skeemojen ja mallien hallintaa
- Miten CRUD-operaatiot toteutetaan backendissä
- Miten tietokanta kytketään Express-palvelimeen
- Miten data virtaa frontendistä backendin kautta tietokantaan ja takaisin

Tämä kokonaisuus antoi hyvän ymmärryksen siitä, miten tietokanta integroituu fullstack-sovellukseen.








## 🔹 CRUD-toiminnallisuus fullstack-projektissa

Projektissa opin toteuttamaan täydellisen CRUD‑toiminnallisuuden (Create, Read, Update, Delete) siten, että frontend ja backend toimivat saumattomasti yhdessä. Tämä oli keskeinen osa sovelluksen arkkitehtuuria ja opetti, miten data kulkee koko järjestelmän läpi.

### 🟦 Create – uuden artikkelin luominen

Frontend:
- Käyttäjä täyttää lomakkeen Reactissa
- Axios lähettää POST‑pyynnön backendille

Backend:
- Express vastaanottaa datan `req.body`‑objektina
- Mongoose tallentaa uuden dokumentin MongoDB:hen

**Esimerkki:**
```js
app.post('/articles', async (req, res) => {
  const article = await Article.create(req.body);
  res.json(article);
});
```
### 🟩 Read – artikkelien hakeminen

Frontend:
- Etusivu hakee kaikki artikkelit getArticles()‑funktiolla
- Yksittäinen artikkeli haetaan URL‑parametrin perusteella

Backend:
- Article.find() palauttaa kaikki dokumentit
- Article.findById() palauttaa yhden dokumentin

Esimerkki:
```
app.get('/articles/:id', async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.json(article);
});
```
### 🟧 Update – artikkelin muokkaaminen

Frontend:
- Muokkaussivu esitäyttää lomakkeen nykyisillä arvoilla
- Axios lähettää PUT‑pyynnön backendille

Backend:
- findByIdAndUpdate() päivittää dokumentin ja palauttaa uuden version

Esimerkki:
```
app.put('/articles/:id', async (req, res) => {
  const updated = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});
```
### 🟥 Delete – artikkelin poistaminen

Frontend:
- Käyttäjä painaa "Poista"‑painiketta
- Axios lähettää DELETE‑pyynnön backendille

Backend:
- findByIdAndDelete() poistaa dokumentin tietokannasta

Esimerkki:
```
app.delete('/articles/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.json({ message: 'Artikkeli poistettu' });
});
```
### 🔗 Miten CRUD toimii fullstack‑projektissa?

- React hoitaa käyttöliittymän ja lomakkeet
- Axios välittää datan backendille
- Express käsittelee pyynnöt ja validoi datan
- Mongoose suorittaa tietokantaoperaatiot
- MongoDB tallentaa ja palauttaa datan
- React päivittää näkymän muutosten perusteella

Tämä kokonaisuus opetti minulle, miten fullstack‑sovelluksen eri kerrokset keskustelevat keskenään 
ja miten data virtaa läpi koko järjestelmän.








## 📜 Lisenssi

Tämä projekti on julkaistu MIT-lisenssillä.