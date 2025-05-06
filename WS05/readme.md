# Viides workshop kansio
Kannettavan tiedot:  
Node versio: v22.13.1  
Npm versio: 10.9.2 
<br><br> 
Pöytäkoneen tiedot:  
Node versio: v22.14.0  
Npm versio: 11.1.0
## Toteutetut tehtävät:

## REST-API sovellus
Sovellukseni hakee tietoa perustuen annettuihin parametreihin. Se on yhdistetty MongoDB tietokantaan, jossa jokaisen käyttäjän kohdalla on käyttäjänimi, lempinimi, ammatti/työ ja puhelinnumero. Alkuperäisistä käyttäjistä puuttuu versio (__v) kokonaan, kun lisäilin niitä alkuun suoraan Atlaksen website dashboardin kautta, mutta ei anneta niiden häiritä. 😄
<br>
## Tässä sovelluksessa on viisi reittiä: 
  
```GET - http://localhost:4000/api/getall```
/api/getall hakee kaikkien käyttäjien tiedot koko databasesta JSON tiedostona.  
Onnistunut haku tulostaa annetun kaikkien käyttäjien tiedot JSON muodossa.  
Epäonnistunut haku tulostaa:  
{ error: '500 - Failed to fetch items' }  

![GETALL](/WS05/screenshots/getall.png)  
<br> 
- - -
```GET - http://localhost:4000/api/id```   
/api/:id hakee käyttäjän tiedot ID:n perusteella.    
Onnistunut haku tulostaa annetun käyttäjän tiedot JSON muodossa.   
![GETONE](/WS05/screenshots/getone.png)  
Epäonnistunut haku tulostaa { error: '404 - User not Found' }  
![GETONE_ERROR](/WS05/screenshots/errorget.png)  
<br>  
- - -
```PATCH - http://localhost:4000/api/update/id```  
/api/update/:id päivittää annetun käyttäjän tiedot (tässä tapauksessa pelkästään työ) annetulle ID:lle.  
Onnistunut haku tulostaa:  
{ "message": "PATCH - request succesfull",  "forUser": "Käyttäjänimi", "updatedJob": "Meripoliisi" }  
Epäonnistunut haku tulostaa:  
{ error: "404 - User with this ID not found"}

Tässä kuva onnistuneesta päivityksestä:  
![UPDATE](/WS05/screenshots/update.png)  
Halusin tehdä asiat itselleni vaikeaksi, joten tässä vielä GET - toiminnolla haettu ID:n mukaan kyseinen käyttäjä päivityksen jälkeen.  
![UPDATED](/WS05/screenshots/getone_updated.png)  
<br> 
- - -

```DELETE - http://localhost:4000/api/delete/id```  
/api/delete/:id poistaa käyttäjän ID:n perusteella tietokannasta.    
Onnistunut poisto tulostaa:  
{ "message": "DELETE - request succesfull","userID": ID }  
Epäonnistunut poisto tulostaa:  
{ error: "404 - User not found" }  
Lisäsin myös erikseen tekstin sellaiselle tilanteelle, jossa käyttäjä on joskus ollut databasessa, mutta se on poistettu.  
{ error: '410 - User with this ID is already deleted' }
- - -
Onnistunut poisto:  
![DELETE](/WS05/screenshots/deletedUser.png)  
Jos käyttäjä on ollut databasessa ja se on aiemmin poistettu:  
![DELETE1](/WS05/screenshots/alreadydeletedUser.png)  
Jos käyttäjä ei ole ollenkaan databasessa:  
![DELETE2](/WS05/screenshots/notfounddeleted.png)  
<br> 
## Maininta AI:n käytöstä
AI:ta on käytetty pääsääntöisesti ongelmienratkontaan. Löysin tämänkin tehtävän kohdalla ihan hyvin vastauksia ja ohjeita Stackoverflown, Youtuben ja opetusmateriaalien kautta. PATCH toiminto on vielä palautuksen aikaan kesken sekä erroreiden kohdalla olisi voinut olla tarkempi, joten aion sitä korjailla vielä palautuksen jälkeen (huomioitu palauttaessa).
## Muuta
Laittelen tänne omasta mielestä hyviä sivuja ja ohjeita, joita tuli käytettyä apuna tehtävää tehdessä.
<br><br>
Error Statukset:
- W3Schools, https://www.w3schools.com/tags/ref_httpmessages.asp   
- Wikipedia, https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

Update - reitti:
- GeeksForGeeks, https://www.geeksforgeeks.org/how-to-use-findoneandupdate-in-mongoose/  

Koska databasen kanssa oli viime viikolla paljon ongelmaa itsellä jostain syystä; tämän avulla pääsin etenemään:
- StackOverflow, https://stackoverflow.com/questions/61388479/how-to-set-db-name-and-collection-name-in-mongoose 

README -tiedoston ulkoasu:
- StackOverflow, https://stackoverflow.com/questions/14494747/how-to-add-images-to-readme-md-on-github
- Github docs, https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
- StackOverflow, https://stackoverflow.com/questions/63731322/how-to-insert-a-horizontal-line-in-a-readme-md-file 

- - -