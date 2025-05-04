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
Sovellukseni hakee tietoa perustuen annettuihin parametreihin. Se on yhdistetty MongoDB tietokantaan, jossa jokaisen käyttäjän kohdalla on käyttäjänimi, lempinimi, ammatti/työ ja puhelinnumero.
<br>
## Tässä sovelluksessa on viisi reittiä: 
  
GET - http://localhost:4000/api/getall  
/api/getall hakee kaikkien käyttäjien tiedot koko databasesta JSON tiedostona.  
Onnistunut haku tulostaa annetun kaikkien käyttäjien tiedot JSON muodossa.  
Epäonnistunut haku tulostaa:  
{ error: '400 Bad Request' }
<br>  
GET - http://localhost:4000/api/id   
/api/:id hakee käyttäjän tiedot ID:n perusteella.    
Onnistunut haku tulostaa annetun käyttäjän tiedot JSON muodossa.  
Epäonnistunut haku tulostaa:  
{ error: '400 Bad Request' }
<br>  
PATCH - http://localhost:4000/api/update/id  
/api/update/id päivittää annetun käyttäjän tiedot (tässä tapauksessa pelkästään työ) annetulle ID:lle.    
En saanut omaa koodiani korjattua deadlineen mennessä, joten tämä toiminto palauttaa:  
{ error: '501 Not Implemented' }
<br>  
DELETE - http://localhost:4000/api/delete/id  
/api/delete/id poistaa käyttäjän ID:n perusteella tietokannasta.    
Onnistunut poisto tulostaa:  
{
    "message": "DELETE request succesfull",
    "userID": "numeroita"
}  
Epäonnistunut poisto tulostaa: 
{error: '400 Bad Request'}
<br> 
## Maininta AI:n käytöstä
AI:ta on käytetty pääsääntöisesti ongelmienratkontaan. Löysin tämänkin tehtävän kohdalla ihan hyvin vastauksia ja ohjeita Stackoverflown, Youtuben ja opetusmateriaalien kautta. PATCH toiminto on vielä palautuksen aikaan kesken sekä erroreiden kohdalla olisi voinut olla tarkempi, joten aion sitä korjailla vielä palautuksen jälkeen (huomioitu palauttaessa).
