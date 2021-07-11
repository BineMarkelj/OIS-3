var baza = 'BineMarkelj';
var baseUrl = 'https://teaching.lavbic.net/api/OIS/baza/' + baza + '/podatki/';


/**
 * Generator podatkov za novega pacienta, ki bo uporabljal aplikacijo. Pri
 * generiranju podatkov je potrebno najprej kreirati novega pacienta z
 * določenimi osebnimi podatki (ime, priimek in datum rojstva) ter za njega
 * shraniti nekaj podatkov o vitalnih znakih.
 * @param stPacienta zaporedna številka pacienta (1, 2 ali 3)
 * @return ehrId generiranega pacienta
 */
 
function generirajPodatke(stPacienta) {
  var ehrID; 
  
  if (stPacienta == 1) {
    ehrID = '11111111-1111-4111-y111-111111111111';
  }
  if (stPacienta == 2) {
    ehrID = '33333333-3333-4333-y333-333333333333';
  }
  
  if (stPacienta == 3) {
    ehrID = '55555555-5555-4555-y555-555555555555';
  }
  ///console.log(ehrID);
   
  
  // Potrebno implementirati

  return ehrID;
}

   //trikrat generiraj novega pacienta

// Tukaj implementirate funkcionalnost, ki jo podpira vaša aplikacija
 
 
 
 // lastnosti treh vzorčnih pacientov
 //vzorčni pacienti
 var pacient1 = {
   ehrID: generirajPodatke(1),
   ime: "Viljem",
   priimek: "Nemški",
   spol: "M",
   starost: "25let",
   visina: "185cm",
   teza: "85kg",
   temperatura: "37,6°C",
   sisTlak: "125",
   diaTlak: "87mmHg",
   stanje: "lažja oblika gripe",
 };
 
  var pacient2 = {
   ehrID: generirajPodatke(2),
   ime: "Marija",
   priimek: "Terezija",
   spol: "Ž",
   starost: "44let",
    visina: "165cm",
   teza: "65kg",
   temperatura: "38,7°C",
   sisTlak: "138",
   diaTlak: "90mmHg",
   stanje: "ima koronavirus"
 };
 
 var pacient3 = {
   ehrID: generirajPodatke(3),
   ime: "Franc",
   priimek: "Jožef",
   spol: "M",
   starost: "77let",
   visina: "177cm",
   teza: "90kg",
   temperatura: "37,3°C",
   sisTlak: "135",
   diaTlak: "86mmHg",
   stanje: "kronična bolezen"
 };
 
 
 //pošlji paciente na API
 
function posljiPodatke() { 
 
 console.log("smo v funkciji");
 document.getElementById("skrito1").hidden = false;
 document.getElementById("skrito2").hidden = false;
 document.getElementById("skrito3").hidden = false;

 $.ajax({
      url: baseUrl + "azuriraj?kljuc=" + generirajPodatke(1),
      type: "PUT",
      contentType: "application/json",
      data: JSON.stringify(pacient1),
      success: function myFunction1() {
  var popup1 = window.open("1", "MsgWindow1", "width=500,height=100");
  popup1.document.write("<p>Viljem Nemški je bil dodan v bazo podatkov, <br>njegov EhrID je:"+ generirajPodatke(1)+"</p>");
}
  });
 
 
 $.ajax({
      url: baseUrl + "azuriraj?kljuc=" + generirajPodatke(2),
      type: "PUT",
      contentType: "application/json",
      data: JSON.stringify(pacient2),
      success: function myFunction1() {
  var popup2 = window.open("2", "MsgWindow2", "width=500,height=100");
  popup2.document.write("<p>Marija Terezija je bila dodana v bazo podatkov, <br>njen EhrID je:"+ generirajPodatke(2) +"</p>");
}
  });
  
  $.ajax({
      url: baseUrl + "azuriraj?kljuc=" + generirajPodatke(3),
      type: "PUT",
      contentType: "application/json",
      data: JSON.stringify(pacient3),
      success: function myFunction1() {
  var popup3 = window.open("3", "MsgWindow3", "width=500,height=100");
  popup3.document.write("<p>Franc Jožef je bil dodan v bazo podatkov, <br>njegov EhrID je:"+ generirajPodatke(3) +"</p>");
}
  });
}


//brisanje podatkov iz baze ob začetku uporabe spletne strani

/*nction brisiPodatkeIzBaze() {
 $.ajax({
    url: baseUrl + "brisi",
    type: "DELETE",
    contentType: "application/json",
    success: function () {
      console.log("Pobrisano");
    },
    error: function() {
      console.log("Ni pobrisano");
    }
  });
}
i
*/
//izbira katerega pacienta
function pridobiPodatke() {
    var erhID;
     if (document.getElementById("skrito1").selected == true  || document.getElementById("ročnovnešeni").value == document.getElementById("skrito1").value) {
      erhID = document.getElementById("skrito1").value;
     } else if (document.getElementById("skrito2").selected == true || document.getElementById("ročnovnešeni").value == document.getElementById("skrito2").value) {
         erhID = document.getElementById("skrito2").value;
    } else if (document.getElementById("skrito3").selected == true || document.getElementById("ročnovnešeni").value == document.getElementById("skrito3").value) {
        erhID = document.getElementById("skrito3").value;
    } else {
        alert("Uporabnik s tem EhrID-jem ne obstaja");
    }

console.log(erhID);
console.log(document.getElementById("ročnovnešeni").innerHTML);
console.log(document.getElementById("ročnovnešeni").value);
console.log(document.getElementById("ročnovnešeni").input);

//vračanje vseh treh vzorčnih pacientov iz baze

    console.log();
 $.getJSON(baseUrl + "vrni/" + erhID, function(podatki){
     console.log(podatki);
     console.log(podatki.ime);
     
     var ime = podatki.ime;
     var priimek = podatki.priimek;
     var starost = podatki.starost;
     var spol = podatki.spol;
     var višina = podatki.visina;
     var teža = podatki.teza;
     var tlak = podatki.sisTlak + "|" + podatki.diaTlak;
     var stanje = podatki.stanje;
     
     document.getElementById("ime").innerHTML = ime;
     document.getElementById("priimek").innerHTML = priimek;
     document.getElementById("starost").innerHTML = starost;
     document.getElementById("spol").innerHTML = spol;
     document.getElementById("višina").innerHTML = višina;
     document.getElementById("teža").innerHTML = teža;
     document.getElementById("tlak").innerHTML = tlak;
     document.getElementById("stanje").innerHTML = stanje;
 });
        
  
}
 

 
    


//


//api za sledenje korone


function koronatracker() {
    console.log("dela api");

$.ajax({
  url: 'https://api.thevirustracker.com/free-api?global=stats',
  dataType: 'json',
  success: function(data) {
      let primeriAll = data.results[0].total_cases
      let smrtiAll = data.results[0].total_deaths;
      let zdraviAll = data.results[0].total_recovered;
      let noviAll = data.results[0].total_new_cases_today;
      
      document.getElementById("primeriAll").innerHTML = primeriAll;
      document.getElementById("smrtiAll").innerHTML = smrtiAll;
      document.getElementById("noviAll").innerHTML = noviAll;
      document.getElementById("zdraviAll").innerHTML = zdraviAll;
    console.log(data);
  }
});


$.ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotal=SI',
  dataType: 'json',
  success: function(data) {
      let primeriSlo = data.countrydata[0].total_cases;
      let smrtiSlo = data.countrydata[0].total_deaths;
      let zdraviSlo = data.countrydata[0].total_recovered;
      let noviSlo = data.countrydata[0].total_new_cases_today;

      
      document.getElementById("primeriSlo").innerHTML = primeriSlo;
      document.getElementById("smrtiSlo").innerHTML = smrtiSlo;
      document.getElementById("noviSlo").innerHTML = noviSlo;
      document.getElementById("zdraviSlo").innerHTML = zdraviSlo;
    console.log(data);
  }
});
}