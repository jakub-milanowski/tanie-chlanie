## Architektura

W projekcie będzie bazował na
<a link="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" > "clean
architecture" </a>

- <a link="https://reactjsexample.com/clean-architecture-for-react/" > clean architecture for react
  </a>
- <a link="https://paulallies.medium.com/clean-architecture-typescript-and-react-8e509098abfe" >
  clean architecture typescript </a>
- <a link="https://github.dev/nanosoftonline/clean-typescript-react" > github example </a>

W początkowej fazie nie będziemy stosować wszystkich założeń oraz część może zmienić się w ramach
potrzeb projektu. Stosujemy ogólny koncept "clean architecture", możemy dowoli modyfikować
architekturę jeżeli wybory dokonane będą dobrze opisane i wykażą się mało problematyczne do
wykonania / utrzymania

następujące założenia w "clean architecture"

struktura folderów

```bash
|-- app
    |-- routers
        |-- page
    |-- components
        |-- atoms
        |-- molecules
        |-- organisms
    |-- styles
        |-- global.scss
    |-- modules
        |-- module
            |-- hooks
            |-- validation
            |-- mappers
            |-- presentation
    |-- domain
        |-- use-cases
        |-- repositories
        |-- mappers
        |-- models
            |-- dao
            |-- dto
            |-- enums
        |-- api

```

---

## Opis folderów

<br></br>

#### Routers

Plik w którym znajdą się strony, możliwe do otwarcia przez url w aplikacji </br></br>

#### Components

Zawarte będą tam komponenty, którę będą tworzył naszm design system. Przechowujemy tam uniwersalne
komponenty rozbite według konceptu <a link="https://atomicdesign.bradfrost.com/chapter-2/" > atomic
design </a> np: Button, Header, Box, Input itp. Nie przechowujemy tam biznesowych komponentów które
są przeznaczone do danego modułu.

<table>
    <thead>
        <th style="width: 100px" >katalog</th>
        <th>opis</th>
    </thead>
    <tbody>
        <tr>
            <th>Atoms</th>
            <td>W katalogu Atoms są przechowywane najmniejsze komponentu takie jak Button, Radio, Input.</td>
        </tr>
        <tr>
            <th>Molecules</th>
            <td>W katalogu Molecules przechowujemy już większe komponentu skłądające się z rozbudowanej wersji atoms lub połączeń kilku atomów np lista checkbox, list radio, kolumna w tabeli</td>
        </tr>
        <tr>
            <th>Organisms</th>
            <td>W katalogu Organisms przechowujemy komponentu organizmy, które wykonują już znaczą logike np Search z dropdownem</td>
        </tr>
    </tbody>
</table>

</br></br>

#### Modules

Przechowujemy tam moduły aplikacji. W naszej aplikacji będziemy mieli kilka modułów np: Moduł
odpowiedzialny za wyświetalanie miast i funkcję związane w tym obrębie, Moduł odpowiedzialny za
wyswietlanie barów i funkcję związane w tym obrębie.

<table>
    <thead>
        <th style="width: 100px" >katalog</th>
        <th>opis</th>
    </thead>
    <tbody>
        <tr>
            <th>models</th>
            <td>modele danych potrzebne na realizacje widoku. Czasami jakieś biblioteki zewnętrzne będą wymagały przekazania do komponentów szczególnego typu itp. W tym pliku dla danego modułu definiujemy taki typ, nie jest on potrzebny by był dostępny dla wszystkich modułów</td>
        </tr>
        <tr>
            <th>hooks</th>
            <td>(opcjonalne) kastomowe reactowe hooki</td>
        </tr>
        <tr>
            <th>validation</th>
            <td>(opcjonalne) walidacje yup dla formika jeżel będą występować formularze wymagające walidacji</td>
        </tr>
        <tr>
            <th>mappers</th>
            <td>(opcjonalne) mappery pozwalające nam mapowanie obiektów w celu działania na wybranych danych w obrębie modułu</td>
        </tr>
        <tr>
            <th>presentation</th>
            <td>widok / widoki naszego modułu np widok Miast może mieć widok dodawania, wyświetlania, zarządzania itp</td>
        </tr>
    </tbody>
</table>

</br></br>

#### Domain

Jest to mózg aplikacji. Wykonywane są tutaj wszystkie pozwiązania z Backendem

<table>
    <thead>
        <th style="width: 100px" >katalog</th>
        <th>opis</th>
    </thead>
    <tbody>
        <tr>
            <th>models</th>
            <td>modele danych</td>
        </tr>
        <tr>
            <th>use-cases</th>
            <td>metody do wywołania REST API</td>
        </tr>
        <tr>
            <th>mappers</th>
            <td>mappery związane z REST API np obiekt z formularza mappujemy do obiektu umożliwiającego nam wysłanie POSTa</td>
        </tr>
        <tr>
            <th>repositories</th>
            <td>interfejsy, które będą nam mówiły jakie może wykonać zapytania</td>
        </tr>
        <tr>
            <th>api</th>
            <td>konfiguracja api</td>
        </tr>
    </tbody>
</table>

</br></br></br>

---

## Nazewnictwo

- Pliki z widokiem XXXX.tsx
- Pliki zawierające typ XXXX.type.ts
- Pliki z stylizacją XXXX.style.ts
- Pliki storybook XXXX.stories.tsx
- Pliki z custom Hook XXXX.hook.ts
- Pliki z mapperami XXXX.mapper.ts
- Pliki z helperami XXXX.helper.ts

</br></br></br>

---

## Budowanie modułów, jak tworzyć hierarchie plików dla danego widoku
