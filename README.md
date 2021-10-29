# MongoDB_Inlämningsuppgift_MyTODOList
## My TODO List API med NodeJS backend samt MongoDB databas
### Inlämningsdatum: 2021-10-31


### Frågeställningen
#### Hur kan vi implementera en databas till en backend med tillhörande API som vi testar med API-tester?

### Svar - "Implementation" 

1. Skapa en `package.json` fil i backend mapp genom att skriva `cd backend` och `npm init -y` på terminalen.
2. Ladda ned <u>**MongoDB**</u> `MongoDb .msi file`, det är en dokumentbaserad NoSQL-databas som kan bearbeta strukturerad, semistrukturerad och ostrukturerad data. Det är bättre för ostrukturerad data som dokument eller `binary JSON (BSON)`.
3. Installera dessa följande dependencies:
    - <u>**Dotenv**</u> - `npm install dotenv`, den laddar automatiskt miljövariabler från en `.env`-fil i `processen.env` objekt. Och det låter dig separera hemligheter från din källkod.
    - <u>**Express**</u> - `npm install express`, den hjälper till att hantera allt, från rutter, till att hantera förfrågningar och synpunkter.
    - <u>**Cors**</u> - `npm install cors`, den står för Cross-Origin Resource Sharing. Det tillåter oss att slappna av säkerheten som tillämpas på ett API. Detta görs genom att kringgå Access-Control-Allow-Origin-huvudena, som anger vilka ursprung som kan komma åt API:et.
    - <u>**Mongoose**</u> - `npm install mongoose`, den är ett objektdatamodelleringsbibliotek (ODM) för MongoDB och Node. js. Med mongoose kan en användare definiera schemat för dokumenten i en viss samling. Det ger mycket bekvämlighet i skapandet och hanteringen av data i MongoDB.
    - <u>**Helmet**</u> - `npm install helmet`, den skyddar din applikation eller API från vanliga säkerhetsrisker som XSS, Content Security Policy och andra.
    - <u>**Morgan**</u> - `npm install morgan`, den är en node. js och Express-mellanprogram för att logga HTTP-förfrågningar och fel, och förenklar processen. I Node. js och Express, middleware är en funktion som har tillgång till livscykelmetoderna för begäran och svar, och metoden `next()` för att fortsätta logiken i Express-server.
    - <u>**Winston**</u> - `npm install winston`, den kan skicka och spara loggar på olika sätt, som filer, databaser, e-postmeddelanden och konsol. Det kan också tillhandahålla flera loggformat, till exempel när du sparar en logg i en Mongo-databas måste loggformatet vara i JSON-format.
    - <u>**Nodemon**</u> - `npm install --save-dev nodemon`, den hjälper till att utveckla node. js-baserade applikationer genom att automatiskt starta om node applikationen när filförändringar i katalogen upptäcks. För att starta databasen, skriv node `src/Server.js` på terminalen.
4. Ändra "main" i package.json fil till `"main": "src/Server.js"` och "type" till `"type": "module"`.
5. Skapa `.env` fil och lägg till detta:
   - `PORT=3001
     MONGODB_URL=mongodb://localhost:27017/
     MONGODB_DB_NAME=api
     MONGODB_COLLECTION=TODOs_api
     NODE_ENV=development
     `
6. Skapa `.env_template` fil och lägg till detta:
   - `PORT=3001
     MONGODB_URL=mongodb://localhost:27017/
     MONGODB_DB_NAME=api
     MONGODB_COLLECTION=Girlie-MongoDB-assignment
     NODE_ENV=development`
7. Strukturera genom att skapa `src` mapp i backend mapp och inne skapa `Server.js` fil och mappar såsom `utils`, `routes`, `models`, `middlewares`, `controller`, och `configuration`.
8. Skapa dessa följande:
   - I **Server.js** fil
      - [Server.js](https://github.com/girlierazon84/MongoDB_Inlamningsuppgift_MyTODOList/blob/main/backend/src/Server.js)
   - I **configuration** mapp skapa `Configuration.js` fil med dessa innehåll:
      - [Configuration.js](https://github.com/girlierazon84/MongoDB_Inlamningsuppgift_MyTODOList/blob/main/backend/src/configuration/Configuration.js)
   - I **utils** mapp skapa:
     - [Logger.js](https://github.com/girlierazon84/MongoDB_Inlamningsuppgift_MyTODOList/blob/main/backend/src/utils/Logger.js)
   - I **middlewares** mapp skapa dessa följande:
      - [Middlewares.js](https://github.com/girlierazon84/MongoDB_Inlamningsuppgift_MyTODOList/blob/main/backend/src/middlewares/Middlewares.js)
      - [MorganMiddleware.js](https://github.com/girlierazon84/MongoDB_Inlamningsuppgift_MyTODOList/blob/main/backend/src/middlewares/MorganMiddleware.js)
   - I **models** mapp skapa en fil som:
      - [TODOModel.js](https://github.com/girlierazon84/MongoDB_Inlamningsuppgift_MyTODOList/blob/main/backend/src/models/TODOModel.js)
   - I **controller** mapp skapa `TODOController.js` och inne skapa arrow funktioner enligt `CRUD` operationer som:
      - [TODOController.js](https://github.com/girlierazon84/MongoDB_Inlamningsuppgift_MyTODOList/blob/main/backend/src/controller/TODOController.js)
   - I **routes** mapp skapa en fil som:
      - [TODORoutes.js](https://github.com/girlierazon84/MongoDB_Inlamningsuppgift_MyTODOList/blob/main/backend/src/routes/TODORoutes.js)

### <u>Testning med REST Klient</u>  
- **Insomnia**
    - [Insomnia_2021-10-29.json](https://github.com/girlierazon84/MongoDB_Inlamningsuppgift_MyTODOList/blob/main/Insomnia_2021-10-29.json)

### <u>Problem</u>
- Uppdatera TODO med ID fungerar inte på frontend. Uppdaterade data synas inte i frontend och skickats inte till databasen.
  - felet är `http.put ( '/MyToDoLists', payload )`

### <u>Lösning</u>
- Jag har ändrats "single quote character" till "backtick", lagt till en snedstreck och dollartecken, måtsvingeparentes och inne skrivit "listId" d.v.s:
   - http.put ( `/MyToDoLists/${listId}`, payload )

### <u>Förbättringar</u>
- Strukturera frontend genom att
  skapa en separat js-fil för varje **"CRUD"**-funktion.