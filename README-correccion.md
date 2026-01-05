
Estructura Entregada:
.
├── .next/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Avatar.tsx
│       │   ├── Card.tsx
│       │   └── Sidebar.tsx
│       ├── dashboard/
│       │   └── page.tsx
│       ├── home)/
│       │   └── page.tsx
│       ├── login/
│       │   └── page.tsx
│       ├── register/
│       │   └── page.tsx
│       ├── layout.tsx
│       └── page.tsx
├── components/
│   ├── CharacterCard.tsx
│   ├── DashboardHeader.tsx
│   ├── FiltersPanel.tsx
│   ├── LoadingState.tsx
│   └── StatsCard.tsx
├── services/
│   └── api.ts
├── utils/
│   └── helpers.ts
├── .gitignore
├── next-env.d.ts
├── package.json
├── package-lock.json
├── README-correcion.md
├── README.md
└── tsconfig.json


Al ingresar al proyecto se realiza el "npm install" para la descaraga de dependencias y al ingresar "npm run dev" se logra ver un error en pantalla 

```bash
    Coder@usuario-Saturno-Series:$ npm run dev

    > rick-morty-app@0.1.0 dev
    > next dev

    ▲ Next.js 15.0.0
    - Local:        http://localhost:3000

    ✓ Starting...
    SyntaxError: Invalid regular expression: /^/_next/data/development/home).json$/: Unmatched ')'
        at new RegExp (<anonymous>)
        at buildDataRoute (/home/Coder/Escritorio/Assesstment dllo- employibilty test ts next - Yesid Castro/employibilty-test-ts-next/node_modules/next/dist/server/lib/router-utils/build-data-route.js:34:69)
        at Watchpack.<anonymous> (/home/Coder/Escritorio/Assesstment dllo- employibilty test ts next - Yesid Castro/employibilty-test-ts-next/node_modules/next/dist/server/lib/router-utils/setup-dev-bundler.js:645:70)
```
Esto indica que hay un error de sintaxis al ejecutar, advirtiendo que una de las carpetas con la que next hace el App Router no está escrita adecuadamente

Con lo cual he cambiado el "home)" por "home" quitandole el caracter que hacía conflicto en la ejecución.

volviendo a ejecutar el comando npm run dev levanta el proyecto a el puerto 3000
entrando al navegador de prefernecia nos encontramos con un error

public/img-readme/pantallazo-n1-syntaxis-error.png

Esto sugiere que en app/page.ts hay una linea que pide un componente y no lo encuentra, para solucionarlo es simplemente referencial con la ruta exacta
corregido esto aparece el segundo error.

public/img-readme/pantallazo-n2-errortocompile.png

Este nos indica que no encuentra un modulo así que intentare instalarlo con
npm install styled-components

ejecutado logra solucionar ese error de dependencia y nos encontramos con otro contratiempo:
public/img-readme/pantallazo-n3-syntaxis-error-map.png

En app/page.tsx hay algunos errores visibles el primero, nos encontramos con que el useState tiene el tipado "any[]" esto es una mala practica no está usando la ventaja de typescript que es el tipado, para ello creo una interface llamada Character, donde definiré la estructura de lo que quiero recibir, que sería algo así:

```Typescript
    interface Character {
        name: string
        status: string
        image: string
    }
```

hecho esto ya podemos tipar el useState con <Character[]> y estariamos usando buenas practicas en esta parte, lo segundo notorio es que para convertir los datos en array el actual codigo esta usando el setCharacter(data) esto no esta bien porque la api que etamos usando no es el objeto de un usuario, para una respuesta que se encuentra dentro de array o campo lo más recomendado es usar el results entonces tendriamos setCharacter(data.results)
y tercero tenemos que la Card está pidiendo "description" pero la API no proporciona este campo, por lo cual la eliminaré

ya la web funciona aparecen los personajes con su nombre

public/img-readme/pantallazo-n5-pagesucssess.png


ahora se nota la mala estructura de la web, así que trabajare en eso con la lista de personajes

primero creare una carpeta nueva en src llamada types, esto en typescript se usa para centralizar definiciones de tipos, interfaces y esquemas de datos, y así mejoramos la organización, legibilidad y mantenimiento del código al predefinir la estructura de objetos y datos

hecho esto, nos moveremos a src/services/api.ts, acá colocaremos la función getCharacter de una mejor forma con control de errores y dando la respuesta que mande la api, con esto hacemos mucho más modular la web y podemos eliminar codigos repetidos como lo tenemos en home/page.tsx y en app/page.tsx 

Ya teniendo esto es solo restructurar el home view, pero quiero tener un apartado muy importante que para mi es recomendable para este tipo de paginas y esto es crear un directorio "hooks" que este lo usaré como middleware para recibir el resultado de la api, y haga las funciones hooks de react que tiene como useEffect y useState a mi me gusta mucha esta manera porque la web no conoce como se hace la petición ella solo la consume y trabajar webs como microservicios ayuda mucho para hacer mantenimiento y mejorar codigo en partes muy concretas y sin perdidas

y por ultimo adaptamos el app/home/page.tsx para que administre estos cambios

public/img-readme/pantallazo-n6-homepage-ree.png

se ve bastante tosco, pero ya es cuestion de creatividad hacer el diseño de estos personajes de una mejor manera.

por lo pronto seguiré ahora con las vistas de login y register que están separadas, así que usaré la opción que me permite next llamada group router, la cual para separar vistas en la arquitectura visualmente en parte del desarrollador pero que no afecta en el app router en cuanto a la url

en el login, creo un 


├
│
└
─
primer error syntaxis error home)
2do failed to compile en app/page.ts

.
├── src/
│   ├── app/                      # App Router (Next.js)
│   │   ├── (auth)/               # Group routes (no afecta URL)
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   └── home/
│   │   │       └── page.tsx
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Landing / redirect
│   │
│   ├── components/               # Reusable UI components
│   │   ├── ui/                   # Atomic UI (buttons, cards, loaders)
│   │   │   ├── Avatar.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── LoadingState.tsx
│   │   │   └── StatsCard.tsx
│   │   ├── layout/               # Layout-related components
│   │   │   ├── Sidebar.tsx
│   │   │   └── DashboardHeader.tsx
│   │   └── features/             # Feature-based components
│   │       └── characters/
│   │           ├── CharacterCard.tsx
│   │           └── FiltersPanel.tsx
│   │
│   ├── services/                 # API & external services
│   │   └── api.ts
│   │
│   ├── lib/                      # Helpers, configs, utilities
│   │   └── helpers.ts
│   │
│   ├── types/                    # Global TypeScript types
│   │   └── index.ts
│   │
│   ├── constants/                # Constants & enums
│   │   └── routes.ts
│   │
│   └── hooks/                    # Custom React hooks
│       └── useCharacters.ts
│
├── public/                       # Static assets
│   └── images/
│
├── .gitignore
├── next-env.d.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
└── README-correccion.md
