# Stylizacja

Do stylizacji wykorzystujemy biblioteke styled-components ( Jest to biblioteka typu CSS-IN-JS )

### Stylizacja podstawowego komponentu

```ts
export const SBox = styled.div`
  position: relative;
  box-sizing: border-box;
`;
```

- słówka styled mówi nam wykorzystaniu biblioteki styled-components. Jest wymogiem do tworzenia
  styli w owej bibliotece
- następne słówko oddzielone "." oznacza jaki znacznik html będzie stylizować w tym przypadku jest
  to div

### Stylizacja komponentu wraz z przekazaniem propsów

```ts
export const SBox = styled.div<BoxProps>`
  position: relative;
  box-sizing: border-box;
  width: ${(props) => {
    if (props.width?.length) return `${props.width}`;
    if (props.fullwidth) return `100%`;
    return "auto";
  }};
`;
```

- Jeżeli chcemy wykorzystać parametry w stylizacji i wyświetlić jakiś styl w zależności od danego
  parametru to w musimy poinformować styled-components, jakie parametry są zdefiniowane w danej
  stylizacji ( informowanie potrzebne z powodu tego, że piszemy w TS ). Robimy to poprzez podanie
  interfejsu / typu danego komponentu w znacznikach <>

### Nadpisywanie komponentu

```js
export const SVenueList = styled(Column)`
  padding: 0 4vw;
`;
```

- nadpisywanie komponentu nie różni się niczym od tworzenia zwykłego stylu jedynie, zamiast
  informowania jaki znacznik html będzie stylizowany. Informujemy jaki komponent będziemy
  nadpisywany. Podajemy w metodzie styled() komponent jako argument
- Przekazanie propsów odbywa się w taki sam sposób jak w zwykłym stylowaniu. Opisane w sekcji wyżej
