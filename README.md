## Task
Sukurti komponentą šaliai pasirinkti naudojant autocomplete input su pasiūlymais iš api.
Naudoti autocomplete komponentą iš PRIMENG (https://primeng.org/autocomplete);
* Komponentas turi leisti pasirinkti šalį iš pasiūlymo sąrašo, gauto iš api (url: bet koks mock'inis url, response json prisegu)
* Komponentas turi galėti filtruoti pasirinkimus pagal komponente įvestą tekstą;
* Pasirinktos šalies pavadinimas turėtų būti matomas įvedimo komponente;
* Komponentas turi saugoti pasirinktą vertę formoje iš vieno nario;

Nario reikalavimai:
raktas: country;
reikšmė: šalies kodas (parametras code iš api);
tipas: string;
validacija: required;

Ekrane turėtų būti matomas įvedimo komponentas ir mygtukas išspausdinti (ekrane ar console) formos reikšmę;

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
