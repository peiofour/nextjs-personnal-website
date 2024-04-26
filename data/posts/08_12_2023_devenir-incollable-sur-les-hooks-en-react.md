---
title: 'Devenir incollable sur les hooks en React'
description: 'Les hooks sont une fonctionnalité de React qui permet de manipuler les états et les cycles de vie des fonctions dans les composants fonctionnels. Je vous apprends ici à les utiliser.'
slug: 'devenir-incollable-sur-les-hooks-en-react'
date: '08/12/2023'
keywords:
  [
    'tutoriel',
    'react',
    'reactjs',
    'react.js',
    'hooks',
    'useState',
    'useEffect',
    'useContext',
    'useReducer',
    'useCallback',
    'useMemo',
    'useRef',
    'Pierre Fournier',
    'tutoriel',
    'french',
    'fr',
    'français',
  ]
tags: ['Tutoriel', 'React', 'Javascript', 'Frontend']
image: 'https://res.cloudinary.com/pierrefournier-dev/image/upload/c_scale,h_800,q_100/v1691846892/react-hooksbis_pjr4fu.webp'
alt: 'Les hooks en React'
author: 'Pierre Fournier'
type: 'Post'
---

## Introduction

Les hooks ont été introduits dans la version 16.8 de React et permettent de se passer des classes pour gérer les états et les cycles de vie des composants. Ils permettent également de réutiliser la logique entre les composants. Les hooks sont des fonctions qui permettent d'ajouter des fonctionnalités à un composant fonctionnel. Ils ne peuvent pas être utilisés dans les composants de classe.

## Les hooks de base

### useState

Le hook `useState` permet de gérer les états dans un composant fonctionnel. C'est le hook le plus utilisé, on le retrouvera dans la plupart des composants fonctionnels.

- Ce hook prend en paramètre une valeur initiale.
- Il retourne un tableau avec la valeur initiale `state` et une fonction pour modifier le state.

La fonction pour modifier le state peut prendre en paramètre une nouvelle valeur ou une fonction qui retourne une nouvelle valeur. La fonction pour modifier le stat peut être appelée dans un gestionnaire d'événement ou dans un autre hook.

```tsx
import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount(count + 1)
	}

	return (
		<div>
			<p>Vous avez cliqué {count} fois</p>
			<button onClick={handleClick}>Cliquez ici</button>
		</div>
	)
}

export default Counter
```

Dans cet exemple, on utilise la fonction `useState` pour gérer un compteur. On initialise le compteur à 0. On utilise la fonction `setCount` pour modifier la valeur du compteur. On peut appeler cette fonction dans un gestionnaire d'événement ou dans un autre hook.

```tsx
import React, { useState } from 'react'

const Name = () => {
	const [name, setName] = useState('')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value)
	}

	return (
		<div>
			<p>Votre nom est {name}</p>
			<input type='text' value={name} onChange={handleChange} />
		</div>
	)
}

export default Name
```

Dans cet autre exemple, on utilise la fonction `useState` pour gérer un champ de formulaire. On initialise le champ à une chaîne vide. On utilise la fonction `setName` pour modifier la valeur du champ. On peut appeler cette fonction dans un gestionnaire d'événement ou dans un autre hook.

### useEffect

Le hook `useEffect` permet d'effectuer des effets de bord dans un composant fonctionnel. Il est appelé à chaque rendu du composant. Il prend en paramètre une fonction qui sera appelée à chaque rendu du composant. Cette fonction peut retourner une fonction de nettoyage qui sera appelée avant le prochain rendu du composant.

```tsx
import React, { useState, useEffect } from 'react'

const Search = () => {
	const [search, setSearch] = useState('')
	const [results, setResults] = useState([])

	useEffect(() => {
		if (search.length < 3) {
			return
		}
		fetch(`https://api.github.com/search/repositories?q=${search}`)
			.then((response) => response.json())
			.then((data) => setResults(data.items))
	}, [search])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}

	return (
		<div>
			<input type='text' value={search} onChange={handleChange} />
			<ul>
				{results.map((result) => (
					<li key={result.id}>{result.name}</li>
				))}
			</ul>
		</div>
	)
}

export default Search
```

Dans cet exemple, on utilise la fonction `useEffect` pour effectuer une requête à l'API de Github. On initialise le champ de recherche à une chaîne vide. On utilise la fonction `setSearch` pour modifier la valeur du champ. Le hook `useEffect` est appelé à chaque fois que la valeur du champ change. Si la valeur du champ est inférieure à 3 caractères, on ne fait rien. Sinon, on effectue une requête à l'API de Github et on met à jour la liste des résultats.

### useContext

Le hook `useContext` permet de récupérer une valeur dans le contexte. Il prend en paramètre un objet de type `Context` et retourne la valeur du contexte.

```tsx
import React, { useContext } from 'react'

const ThemeContext = React.createContext('light')

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return <ThemeContext.Provider value='dark'>{children}</ThemeContext.Provider>
}

const Theme = () => {
	const theme = useContext(ThemeContext)

	return <p>Le thème est {theme}</p>
}

export default Theme
```

Dans cet exemple, on utilise la fonction `useContext` pour récupérer la valeur du contexte. On initialise le contexte à `light`. On utilise la fonction `useContext` pour récupérer la valeur du contexte. On peut utiliser la fonction `useContext` dans un composant enfant du composant `ThemeProvider`.

## Les hooks avancés

### useReducer

Le hook `useReducer` permet de gérer les états dans un composant fonctionnel. Il prend en paramètre une fonction de réduction et une valeur initiale. Il retourne un array contenant la valeur du state et une fonction pour la modifier.

La fonction de réduction prend en paramètre la valeur actuelle du state et une action. Elle retourne la nouvelle valeur du state.

Quelle est la différence avec `useState` ? `useState` permet de gérer un seul état alors que `useReducer` permet de gérer plusieurs états et de les modifier avec une seule fonction.

```tsx
import React, { useReducer } from 'react'

type State = {
	name: string
	email: string
}

type Action =
	| { type: 'setName'; payload: string }
	| { type: 'setEmail'; payload: string }

const initialState = {
	name: '',
	email: '',
}

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'setName':
			return { ...state, name: action.payload }
		case 'setEmail':
			return { ...state, email: action.payload }
		default:
			return state
	}
}

const Form = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: event.target.name, payload: event.target.value })
	}

	return (
		<div>
			<input
				type='text'
				name='setName'
				value={state.name}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='setEmail'
				value={state.email}
				onChange={handleChange}
			/>
		</div>
	)
}

export default Form
```

Dans cet exemple on utilise la fonction `useReducer` pour gérer un formulaire. On initialise le state avec un objet contenant les champs du formulaire. On utilise la fonction `dispatch` pour modifier la valeur du state. On peut appeler cette fonction dans un gestionnaire d'événement ou dans un autre hook. Le hook `useReducer` est utile quand on a plusieurs états à gérer plutôt que d'utiliser plusieurs `useState`.

### useMemo vs useCallback

Le hook `useMemo` permet de mémoriser une valeur calculée.

Le hook `useCallback` permet de mémoriser une fonction.

Ces deux hooks prennent en paramètre une fonction et un tableau de dépendances. La fonction est appelée à chaque rendu du composant. Si le tableau de dépendances n'est pas vide et que les valeurs du tableau n'ont pas changé, la valeur calculée ou la fonction est mémorisée.

La différence entre ces deux hooks est que `useMemo` retourne une valeur calculée alors que `useCallback` retourne une fonction.

Quand utiliser `useMemo` ? Quand utiliser `useCallback` ?

Si on a besoin de mémoriser une valeur calculée, on utilise `useMemo`.

Exemple : on a besoin de calculer le factoriel d'un nombre. On utilise `useMemo` pour mémoriser la valeur calculée.

```tsx
import React, { useState, useMemo } from 'react'

const CalculateFactorial = () => {
	const [number, setNumber] = useState(0)

	const factorial = useMemo(() => {
		let result = 1
		for (let i = 1; i <= number; i++) {
			result = result * i
		}
		return result
	}, [number])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNumber(parseInt(event.target.value))
	}

	return (
		<div>
			<p>
				Le factoriel de {number} est {factorial}
			</p>
			<input type='number' value={number} onChange={handleChange} />
		</div>
	)
}

export default CalculateFactorial
```

Si on a besoin de mémoriser une fonction, on utilise `useCallback`.

Exemple : on a besoin de mémoriser une fonction pour incrémenter un compteur. On utilise `useCallback` pour mémoriser la fonction.

```tsx
import React, { useState, useCallback } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)

	const increment = useCallback(() => {
		setCount(count + 1)
	}, [count])

	const decrement = useCallback(() => {
		setCount(count - 1)
	}, [count])

	return (
		<div>
			<p>Le compteur est à {count}</p>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
		</div>
	)
}

export default Counter
```

Ces deux hooks permmettent d'éviter de recalculer une valeur ou de recréer une fonction à chaque rendu du composant. Cela permet d'optimiser les performances de l'application.

### useRef

Le hook `useRef` permet de créer une référence vers un élément du DOM. Il prend en paramètre une valeur initiale et retourne un objet avec une propriété `current` qui contient la valeur initiale. Cette valeur peut être modifiée à l'aide de la propriété `current`.

```tsx
import React, { useRef } from 'react'

const FocusInput = () => {
	const inputRef = useRef<HTMLInputElement>(null)

	const handleClick = () => {
		inputRef.current?.value = 'Hello'
	}

	return (
		<div>
			<input type='text' ref={inputRef} />
			<button onClick={handleClick}>Focus</button>
		</div>
	)
}

export default FocusInput
```

Dans cet exemple on utilise la fonction `useRef` pour créer une référence vers un champ de formulaire. On initialise la référence à `null`. On utilise la propriété `current` pour modifier la valeur du champ. On peut appeler cette propriété dans un gestionnaire d'événement ou dans un autre hook.

## Créer ses propres hooks

Il est possible de créer ses propres hooks. Pour cela, il faut respecter les règles suivantes :

- Le nom du hook doit commencer par `use`.
- Le hook doit être une fonction.
- Le hook peut utiliser d'autres hooks.

```tsx
import React, { useState } from 'react'

const useCounter = (initialCount: number) => {
	const [count, setCount] = useState(initialCount)

	const increment = () => {
		setCount(count + 1)
	}

	const decrement = () => {
		setCount(count - 1)
	}

	return { count, increment, decrement }
}

const Counter = () => {
	const { count, increment, decrement } = useCounter(0)

	return (
		<div>
			<p>Le compteur est à {count}</p>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
		</div>
	)
}

export default Counter
```

Dans cet exemple on crée un hook `useCounter` qui permet de gérer un compteur. On initialise le compteur à 0. On utilise la fonction `useCounter` pour gérer le compteur. On peut appeler cette fonction dans un composant fonctionnel.

Autre exemple :

```tsx
import React, { useState, useEffect } from 'react'

const useFetch = (url: string) => {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setData(data))
	}, [url])

	return data
}

const Fetch = () => {
	const data = useFetch('https://api.github.com/search/repositories?q=react')

	return (
		<div>
			<ul>
				{data?.items.map((item: any) => <li key={item.id}>{item.name}</li>)}
			</ul>
		</div>
	)
}

export default Fetch
```

Dans cet exemple, on crée un hook `useFetch` qui permet de récupérer des données à partir d'une URL. On initialise les données à `null`. On utilise la fonction `useFetch` pour récupérer les données. On peut appeler cette fonction dans un composant fonctionnel.

## Conclusion

Vous savez maintenant ce que sont les "hooks" dans React, quand et comment les utiliser, et comment en créer de nouveaux. Vous pouvez maintenant les utiliser dans vos projets React.

Merci pour votre lecture. N'hésitez pas à le partager sur les réseaux sociaux et à suivre [@peiofour](https://twitter.com/peiofour) sur X/Twitter.
