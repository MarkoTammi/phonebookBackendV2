


## HY / Fullstack MOOC / Phonebook backend v2

### Luonti  

srv luotu - npm init  
repo - git init  

### Käynnistys  
Backendin käynnistys kehitysmoodissa  
npm run dev >> localhost:3001  

Tehtävästä 3.9 eteenpäin front kommunikoi backendin kanssa.

Viimeisin versio tehtävän 3-22 jälkeen tallennettu github-master.  
Välitallenukset omissa haaroissa tehtävänumeron mukaan.  


### Edistyminen

3.1 puhelinluettelon backend step1  
Asennettu Express - kirjasto  
npm install express --save  
Asennettu Nodemon tarkkailemaan koodin muutoksia  
npm install --save-dev nodemon  

3.2: puhelinluettelon backend step2  - git branch part3-2step2  
Lisätty API /info. Palauttaa nimien lukumäärän.  
Luotu .gitignore - node_modules  

3.3: puhelinluettelon backend step3 - git branch part3-3Step3  
Lisätty /api/persons/:id yksittäisen käyttäjän tietojen hakemiseen  
Jos id ei ole palautus 404.end()  

3.4: puhelinluettelon backend step4 - git branch part3-4Step4  
Lisätty yksittäisen käyttäjän poisto.  
Jos id ei ole palautus 404.end()  
Lisätty /test-request - hakemisto VS Code REST client - pluginin testeille  

3.5: puhelinluettelon backend step5  
Uuden nimen lisäys.  

3.6: puhelinluettelon backend step6 - git branch part3-6Step6  
Uuden nimen virheenkäsittely  

3.7: puhelinluettelon backend step7  
Asennettu "npm install morgan"  

3.8*: puhelinluettelon backend step8  - git branch part3-8Step8  
Morgan joka näyttää HTTP -pyynnön mukana tulevan datan.  

3.9 puhelinluettelon backend step9  
Asennettu CORS "npm install cors --save"  

Frontend ja backend kommunikoivat nyt paitsi numeron päivitys.  
Data backendin koodissa.  

Mongo käyttöön tehtävästä 3.12 eteenpäin.  

3.12: tietokanta komentoriviltä  
Asennettu "npm install mongoose --save"  
Kirjasto MongoDB'n käyttöön  
Luotu mongo.js testitietosto mongo yhteyden testaamiseen.  

3.13: puhelinluettelo ja tietokanta, step1  
Front hakee datan Mongosta.  
Asennettu "npm install dotenv --save"  
Ja lisätty .env -tiedosto .gitignore  
Kirjasto ympäristömuuttujien hallintaan.  
 
3.14: puhelinluettelo ja tietokanta, step2  
Uuden numeron tallennus Mongoon.  

3.15: puhelinluettelo ja tietokanta, step3 - git branch part3-15  
Nimen poisto Mongosta.  

3.16: puhelinluettelo ja tietokanta, step4  
Virheiden käsittely keskitetty errorHandler middlewareen  

3.17*: puhelinluettelo ja tietokanta, step5  
Olemassa olevan henkilön numeron päivitys.  

3.18*: puhelinluettelo ja tietokanta, step6  
api/persons/:id ja /info käsittelyt ok.  

3.19: puhelinluettelo ja tietokanta, step7  
Asennettu mongoose-unique-validator by npm  
Lisätty backendiin toiminnallisuus joka estää saman nimiset nimet.  

3.20*: puhelinluettelo ja tietokanta, step8  
Laajennettu validaatiota - nimi min 3 ja numero 5 merkkiä.  

3.22: lint-konfiguraatio  - git branch part3-22  
Asennettu npm install eslint --save-dev  
Muodostettu alustava konfis  
node_modules/.bin/eslint --init 
konfis tallentuu .eslintrc.js tiedostoon   
Luotu .eslintignore tiedosto  
npm run lint  
Asennettu ESlint plugin VSCodeen  
Korjattu Eslintin ilmoittavat virheet  

Kaikki ja viimeinen tehtävä tehty.  
Huomioita  
- backendin APIt ilman authentication  


-- END --  







