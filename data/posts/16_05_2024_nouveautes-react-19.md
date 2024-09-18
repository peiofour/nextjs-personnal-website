---
title: 'Les nouvelles fonctionnalités dans React 19'
description: "React 19 vient tout juste de sortir en version bêta. J'ai listé les nouvelles fonctionnalités qui vont changer la façon dont vous codez en React."
slug: 'les-nouvelles-fonctionnalites-dans-react-19'
date: '2024-05-16'
keywords:
  [
    'React',
    'React 19',
    'ReactJS',
    'React 19 features',
    'React 19 release',
    'hooks',
    'React 19 hooks',
    'React 19 server components',
    'React 19 actions',
    'React 19 document metadata',
    'React 19 resource loading',
    'React 19 compiler',
  ]
tags: ['React', 'UI', 'Frontend', 'Javascript']
image: 'https://res.cloudinary.com/pierrefournier-dev/image/upload/f_auto,q_auto/v1/blog/tnheoai3tgiygi2ep7pb'
alt: 'Les nouvelles fonctionnalités dans React 19'
author: 'Pierre Fournier'
type: 'Post'
---

ReactJS est l'un des framework les plus populaires dans le monde du développement front-end.
Et l'une des raisons pour lesquelles React est populaire, c'est grâce à l'équipe qui se cache derrière et de la communauté qui l'entoure.

Dans cet article, je vais partager toutes les nouveautés à React dans cette version 19, disponible en version beta, afin que vous puissiez commencer à expérimenter et en apprendre davantage sur ce qui va changer.

N'oubliez pas, React 19 est toujours en cours de développement à l'heure actuelle, donc certaines fonctionnalités peuvent changer avant la version finale. Je vous déconseille de l'utiliser en production pour le moment tant que la version finale n'est pas sortie.


## 🌟 Nouveautés dans React 19 - Aperçu 🌟

Voici un aperçu rapide des nouvelles fonctionnalités que React 19 va apporter :

- 🤖 **Compilateur React :** React 19 introduit un nouveau compilateur, beaucoup plus rapide. Il est déjà utilisé sur l'app Instagram.
- 🔥 **Server component :** Déjà présent dans Next.js, cette fonctionnalité sera désormais native à React.
- 💪 **Actions :** Les actions vont révolutionner la façon dont nous interagissons avec les éléments du DOM.
- 🌇 **Document Metadata :** Une autre amélioration très attendue, qui permettra aux développeurs de faire plus avec moins de code.
- 💼 **Chargement des ressources :** Cela permettra aux ressources de se charger en arrière-plan, ce qui améliorera le temps de chargement de l'application et l'expérience utilisateur.
- 🪝 **Nouveaux hooks :** use, useFormStatus, useFormStates.

React 19 va s'attaquer à l'un des problèmes de longue date de React : le problème des re-render excessifs. Les développeurs ont passé d'innombrables heures à résoudre ce problème, qui peut entraîner des problèmes de performances.

La chasse constante au code qui cause les re-render et les efforts d'optimisation qui s'ensuivent ont été une tâche récurrente pour les développeurs. React 19 gérera les re-render automatiquement, pour le plus grand bonheur des développeurs front-end.

Auparavant, les développeurs utilisaient des techniques telles que `useMemo()`, `useCallback()`, `memo`, etc. pour les gérer. Ce ne sera plus nécessaire désormais.

React détectera et mémorisera intelligemment le code, ce qui se traduira par un code plus propre et plus efficace.

## 🤖 Compilateur React

Actuellement, React ne re-render pas automatiquement lors d'un changement d'état. Une façon d'optimiser ces re-render est d'utiliser manuellement `useMemo()`, `useCallback()`, et les `memo`. Selon l'équipe React, il s'agissait d'un "compromis raisonnable". Leur vision était de laisser React gérer ces re-render.

Mais l'équipe React s'est rendu compte que l'optimisation manuelle est pénible.

C'est pourquoi ils ont créé le "compilateur React". Ce compilateur va maintenant gérer ces re-render. React décidera automatiquement quand et comment changer l'état et mettre à jour l'interface utilisateur.

Avec cela, nous les développeurs n'avons plus besoin de le faire manuellement. Cela signifie également qu'il n'est plus nécessaire d'utiliser `useMemo()`, `useCallback()`, et `memo`.

## 🔥 Server component

Ce concept est déjà implémenté dans Next.js. En effet, à partir de Next.js 13, tous les composants sont des composants serveur par défaut et pour faire fonctionner un composant sur le côté client, il faut utiliser la directive `"use client"`.

Les composants serveur seront intégrés directement dans React, ce qui apportera de nombreux avantages :

- **SEO :** Les composants rendus sur le serveur améliorent l'optimisation pour les moteurs de recherche en fournissant un contenu plus accessible aux robots d'exploration web.
- **Performances améliorées :** Les composants serveur contribuent à des temps de chargement de page initiaux plus rapides et à des performances globales améliorées, en particulier pour les applications riches en contenu.
- **Exécution sur le serveur :** Les composants serveur permettent d'exécuter du code sur le serveur, ce qui facilite et rend plus efficaces les tâches telles que les appels API.


Contrairement à Next.js, les composants dans React sont par défaut côté client. Ce n'est que lorsque vous utilisez `'use server'` que le composant devient un composant serveur.

Le code ci-dessous est en React, mais il s'exécutera sur le serveur. Il vous suffit d'ajouter 'use server' en tant que première ligne du composant. Cela fera du composant un "composant serveur". Il ne s'exécutera pas sur le côté client et ne s'exécutera que sur le côté serveur.

```jsx
'use server';

export default async function requestUsername(formData) {
	const username = formData.get('username');
	if (canRequest(username)) {
		// ...
		return 'successful';
	}
	return 'failed';
}
```

## 💪 Actions

Les actions vous permettront d'intégrer des actions avec la balise HTML `<form/>`. En termes plus simples, vous pourrez remplacer l'événement `onSubmit` par des actions. Ces actions sont des attributs de formulaire HTML.

### Avant :

Dans l'extrait de code ci-dessous, nous utiliserons l'événement React `onSubmit`, qui déclenchera l'exécution de la méthode `search` lors de la soumission du formulaire. Cependant, il est important de noter que la méthode `search` ne s'exécute actuellement que sur le côté client. Nous sommes limités à l'utilisation d'événements React pour la soumission de formulaires, ce qui signifie que la recherche ne peut pas être exécutée sur le côté serveur.

```jsx
<form onSubmit={search}>
	<input name="query" />
	<button type="submit">Search</button>
</form>
```

### Après :

Avec l'introduction des composants serveur, les actions peuvent être exécutées sur le côté serveur. Dans notre code, avec `<form/>`, nous pouvons supprimer l'événement `onSubmit` et utiliser l'attribut `action`. La valeur de l'attribut action sera une méthode pour soumettre les données soit sur le côté client, soit sur le côté serveur.

Vous pouvez exécuter à la fois des opérations synchrones et asynchrones avec des actions, ce qui rationalise la gestion de la soumission de données et des mises à jour d'état. L'objectif est de faciliter le travail avec les formulaires et la gestion des données.

Examinons un exemple pour voir comment cela fonctionne :

```jsx
"use server"

const submitData = async (userData) => {
	const newUser = {
		username: userData.get('username'),
		email: userData.get('email')
	}
	console.log(newUser)
}

const Form = () => (
	<form action={submitData}>
		<div>
			<label>Name</label>
			<input type="text" name='username'/>
		</div>
		<div>
			<label>Name</label>
			<input type="text" name="email" />
		</div>
		<button type='submit'>Submit</button>
	</form>
)

export default Form;
```

Dans le code ci-dessus, `submitData` est l'action dans le composant serveur. `form` est un composant côté client qui utilise `submitData` comme action. submitData sera exécuté sur le serveur. La communication entre le client (`form`) et le serveur (`submitData`) n'est possible que grâce à l'attribut action.

Nous pouvons utiliser le formulaire et l'action pour gérer la soumission de données à la fois sur le côté client et sur le côté serveur. 

Dans la section sur les hooks améliorés, vous apprendrez trois nouveaux hooks qui amélioreront également la façon dont vous pouvez travailler avec les formulaires.

## 🌇 Document Metadata

Des éléments tels que "title", "meta tags" et "description" sont cruciaux pour optimiser le référencement et garantir l'accessibilité. Dans React, où les applications à page unique sont courantes, la gestion de ces éléments sur différentes routes peut être un peu fastidieuse.

Actuellement, les développeurs ont souvent recours à l'écriture de code personnalisé ou à l'utilisation de packages tels que react-helmet pour gérer les changements de route et mettre à jour les métadonnées en conséquence. Ce processus peut être répétitif et sujet à des erreurs, en particulier lorsqu'il s'agit d'éléments sensibles au référencement tels que les balises meta.

### Avant :

```jsx
import React, { useEffect } from 'react';

const HeadDocument = ({ title }) => {
	useEffect(() => {
		document.title = title;
		const metaDescriptionTag = document.querySelector('meta[name="description"]');
		if (metaDescriptionTag) {
			metaDescriptionTag.setAttribute('content', 'New description');
		}
	}, [title]);
	
	return null;
};

export default HeadDocument;
```

Dans le code ci-dessus, nous avons un composant `HeadDocument` qui est responsable de la mise à jour du `title` et des balises `meta` en fonction des props. Nous mettons à jour ces éléments dans le hook `useEffect`. Nous utilisons également JavaScript pour mettre à jour le titre et les balises meta. Ce composant sera mis à jour lors d'un changement de route. Ce n'est pas une méthode propre pour le faire.

### Après :

Avec React 19, nous pouvons utiliser directement les balises `title` et `meta` dans nos composants React :

```jsx
const HomePage = () => {
	return (
		<>
			<title>Freecodecamp</title>
			<meta name="description" content="Freecode camp blogs" />
			// Contenu de la page
		</>
	);
}
```

Cela n'était pas possible auparavant dans React. La seule façon de le faire était d'utiliser un package comme react-helmet.

## 💼 Chargement des ressources

Dans React, vous devez gérer soigneusement l'expérience de chargement et les performances de vos applications, en particulier avec les images et autres fichiers de ressources. Souvent, la vue se rend d'abord dans le navigateur, suivie des feuilles de style, des polices et des images. Cela peut entraîner un scintillement "non stylisé" ou un contenu manquant.

Pour atténuer ce problème, les développeurs ont souvent recours à l'ajout de code pour détecter lorsque ces ressources sont prêtes, ce qui garantit que la vue n'est affichée que lorsque tout est chargé.

Dans React 19, les images et autres fichiers seront chargés en arrière-plan lorsque les utilisateurs explorent la page actuelle. Cette amélioration devrait contribuer à réduire les temps de chargement des pages et les temps d'attente.

En outre, React introduit le cycle de vie Suspense pour le chargement des ressources, y compris les scripts, les feuilles de style et les polices. Cette fonctionnalité permet à React de déterminer lorsque le contenu est prêt à être affiché, ce qui élimine tout scintillement "non stylisé".

Il existe de nouvelles API de chargement de ressources telles que `preload` et `preinit` pour fournir un contrôle plus précis sur le moment où une ressource doit être chargée et initialisée.

En permettant aux ressources de se charger de manière asynchrone en arrière-plan, React 19 minimise les temps d'attente et garantit que les utilisateurs peuvent interagir avec le contenu sans interruption. Cette optimisation améliore non seulement les performances des applications React, mais contribue également à une expérience de navigation plus agréable pour les utilisateurs.

## 🪝 Nouveaux hooks

Les hooks React ont été l'une des fonctionnalités majeures des dernières années. Vous utilisez les hooks intégrés de React, et peut-être même essayé de créer vos propres hooks personnalisés.

Dans React 19, la façon dont nous utilisons `useMemo`, `forwardRef`, `useEffect` et `useContext` va changer. Cela est principalement dû à l'introduction d'un nouveau hook, `use`.

## 🥁 useMemo()

Vous n'aurez plus besoin d'utiliser le hook `useMemo()` avec React 19, car le compilateur React mémorisera lui-même les valeurs.

### Avant :
```jsx
import React, { useState, useMemo } from 'react';

function ExampleComponent() {
	const [inputValue, setInputValue] = useState('');

	// Mémoriser le résultat de la vérification si la valeur d'entrée est vide
	const isInputEmpty = useMemo(() => {
		console.log('Vérification si l'entrée est vide...');
		return inputValue.trim() === '';
	}, [inputValue]);

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Tapez quelque chose..."
			/>
			<p>{isInputEmpty ? 'L'entrée est vide' : 'L'entrée n'est pas vide'}</p>
		</div>
	);
}

export default ExampleComponent;
```

### Après :
Dans l'exemple ci-dessous, vous pouvez voir qu'avec React 19, nous n'avons plus besoin de mémoriser les valeurs : React le fera lui-même en coulisse ! Le code est beaucoup plus propre :

```jsx
import React, { useState, useMemo } from 'react';

function ExampleComponent() {
	const [inputValue, setInputValue] = useState('');

	const isInputEmpty = () => {
		console.log('Vérification si l'entrée est vide...');
		return inputValue.trim() === '';
	};

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Tapez quelque chose..."
			/>
			<p>{isInputEmpty ? 'L'entrée est vide' : 'L'entrée n'est pas vide'}</p>
		</div>
	);
}

export default ExampleComponent;
```

## 🥁 forwardRef()

Les ref seront désormais transmises en tant que props plutôt que d'utiliser le hook `forwardRef()`. Cela simplifiera le code. Vous n'aurez plus besoin d'utiliser `forwardRef()`.

### Avant :

```jsx
import React, { forwardRef } from 'react';

const ExampleButton = forwardRef((props, ref) => (
	<button ref={ref}>
		{props.children}
	</button>
));
```

### Après :

La référence peut être transmise en tant que prop. Plus besoin de `forwardRef()`.

```jsx
import React from 'react';

const ExampleButton = ({ ref, children }) => (
	<button ref={ref}>
		{children}
	</button>
));
```

## 🥁 Le nouveau hook use()

React 19 introduira un nouveau hook appelé `use()`. Ce hook simplifiera la façon dont nous utilisons les promesses, le code asynchrone et le contexte.

Voici la syntaxe du hook :

```jsx
const value = use(resource);
```

Le code ci-dessous est un exemple d'utilisation du hook `use` pour effectuer une requête `fetch` :

```jsx
import { use } from "react";

const fetchUsers = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	return res.json();
};

const UsersItems = () => {
	const users = use(fetchUsers());

	return (
		<ul>
			{users.map((user, index) => (
				<div key={index} className='bg-blue-50 shadow-md p-4 my-6 rounded-lg'>
					<h2 className='text-xl font-bold'>{user.name}</h2>
					<p>{user.email}</p>
				</div>
      ))}

		</ul>
	)}

export default UsersItems;
```

Expliquons le code :

- `fetchUsers` est responsable de la requête GET.
- Nous utilisons le hook use pour exécuter `fetchUsers` au lieu d'utiliser les hooks `useEffect` ou `useState`.
- La valeur de retour du hook `useState` est users, qui contiendra la réponse de la requête GET (users).
- Dans le bloc de retour, nous utilisons users pour parcourir la liste et la créer.

Un autre endroit où nous pouvons utiliser le nouveau hook est avec le contexte. L'API de contexte est un moyen populaire de gérer les états globaux dans React sans utiliser de bibliothèques de gestion d'état. Avec le hook `use`, l'API de contexte aura l'aspect suivant :

Au lieu d'utiliser `useContext()`, nous aurons `use(context)`.

```jsx
import { createContext, useState, use } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const Card = () => {
// Utiliser le hook use()
	const { theme, toggleTheme } = use(ThemeContext);

	return (
		<div className={`p-4 rounded-md ${ theme === 'light' ? 'bg-white' : 'bg-gray-800' }`}>
			<h1 className={`my-4 text-xl ${ theme === 'light' ? 'text-gray-800' : 'text-white' }`}>
				Thème de la carte
			</h1>
			<p className={theme === 'light' ? 'text-gray-800' : 'text-white'}>
				Bonjour !! Hook use()
			</p>
			<button
				onClick={toggleTheme}
				className='bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4'
			>
				{theme === 'light' ? 'Passer en mode sombre' : 'Passer en mode clair'}
			</button>
		</div>
	);
};

const Theme = () => {
	return (
		<ThemeProvider>
			<Card />
		</ThemeProvider>
	);
};

export default Theme;
```

Expliquons le code :

- `ThemeProvider` est responsable de la fourniture du contexte.
- Card est le composant où nous allons consommer le contexte. Pour cela, nous allons utiliser le nouveau hook `use` pour consommer le contexte. Le reste est le même qu'avant React 19.

Dans React 19, nous avons également de nouveaux hooks pour gérer l'état et les données des formulaires. Cela facilitera le travail avec les formulaires. En combinant ces hooks avec les actions (nouvelle fonctionnalité de React 19), cela facilitera encore plus le travail avec les formulaires et la gestion des données.

## 🥁 Le hook useFormStatus()

Ce nouveau hook dans React 19 vous aidera à avoir plus de contrôle sur les formulaires que vous créez. Il vous permettra de connaître l'état du formulaire, les données soumises et la méthode HTTP utilisée.

Voici la syntaxe :

```jsx
const { pending, data, method, action } = useFormStatus();
```

ou la version simplifiée :

```jsx
const { status } = useFormStatus()
```

Expliquons ce qui se passe ici :

- `pending` : si le formulaire est dans un état en attente, alors il sera vrai, sinon il sera faux.
- `data` : un objet qui contient les données que le formulaire parent soumet.
- `method` : la méthode HTTP - GET ou POST. Par défaut, ce sera GET.
- `action` : une référence de fonction.

Ce hook sera utilisé pour afficher un état en attente et les données soumises par l'utilisateur.

Voici un exemple de code :

```jsx
import { useFormStatus } from "react-dom";

function Submit() {
	const status = useFormStatus();
	return <button disabled={status.pending}>{status.pending ? 'Soumission en cours...' : 'Soumettre'}</button>;
}

const formAction = async () => {
	// Simuler un délai de 2 secondes
	await new Promise((resolve) => setTimeout(resolve, 3000));
}

const FormStatus = () => {
	return (
		<form action={formAction}>
			<Submit />
		</form>
	);
};

export default FormStatus;
```

Expliquons ce qui se passe dans le code ci-dessus :

- Submit est une méthode - une action de formulaire pour soumettre le formulaire. Cette méthode vérifiera l'état à partir de `useFormStatus`, qui nous indiquera si `status.pending` est vrai ou faux.
- En fonction de `status.pending`, nous pouvons afficher le message dans l'interface utilisateur.
- `formAction` est une méthode factice pour retarder l'envoi du formulaire.

Dans le code ci-dessus, lors de l'envoi du formulaire, à partir du hook `useFormStatus`, nous obtiendrons un état en attente. Tant que `pending` est true, le texte "Envoi en cours..." s'affichera dans l'interface utilisateur.

Ce hook est très puissant et vous sera utile lorsque vous voudrez connaître l'état d'envoie de formulaire (en attente ou non) et afficher les données en conséquence.

### 🥁 Le hook useFormState()

Un autre nouveau hook dans React 19 est `useFormState`. Il vous permet de mettre à jour l'état en fonction du résultat de l'action du formulaire.

Voici la syntaxe :

```jsx
const [state, formAction] = useFormState(fn, initialState, permalink?);
```

- `fn` : la fonction à appeler lorsque le formulaire est soumis ou que le bouton est enfoncé.
- `initialState` : la valeur que vous souhaitez que l'état soit initialement. Il peut s'agir de n'importe quelle valeur sérialisable. Cet argument est ignoré après la première invocation de l'action.
- `permalink` : ceci est facultatif. Une URL ou un lien de page, si fn est exécuté sur le serveur, alors la page sera redirigée vers `permalink`.

Ce hook renverra :

- `state` : la valeur initiale de l'état sera la valeur que nous avons transmise à `initialState`.
- `formAction` : une action qui sera transmise à l'action du formulaire. La valeur de retour de ceci sera disponible dans l'état.

Voici un exemple de son fonctionnement :

```jsx
import { useFormState} from 'react-dom';

const FormState = () => {
	const submitForm = (prevState, queryData) => {
		const name = queryData.get("username");
		console.log(prevState); // état du formulaire précédent
		if(name === 'john'){
			return {
				success: true,
				text: "Bienvenue"
			}
		} else {
			return {
				success: false,
				text: "Erreur"
			}
		}
	}
	
	const [ message, formAction ] = useFormState(submitForm, null)
	return (
		<form action={formAction}>
			<label>Name</label>
			<input type="text" name="username" />
			<button>Submit</button>
			{message && <h1>{message.text}</h1>}
		</form>
	)
}

export default FormState;
```

Expliquons ce qui se passe dans le code ci-dessus :

- `submitForm` est la méthode responsable de l'envoie du formulaire. C'est l'action.
- À l'intérieur de `submitForm`, nous vérifions la valeur du formulaire. Ensuite, en fonction du succès ou de l'échec, nous renvoyons la valeur et le message spécifiques. Dans l'exemple de code ci-dessus, si le nom est autre que "John", alors il renverra une erreur.
- Nous pouvons également vérifier l'état précédent du formulaire. L'état initial sera `null`, et après cela, il renverra l'état précédent du formulaire.

## 🥁 Le hook useOptimistic()

`useOptimistic` est un hook React qui vous permet d'afficher un état différent pendant qu'une action asynchrone est en cours, selon la documentation React.

Ce hook contribuera à améliorer l'expérience utilisateur et devrait entraîner des réponses plus rapides. Il sera utile pour les applications qui doivent interagir avec le serveur.

Voici la syntaxe du hook `useOptimistic` :

```jsx
const [ optimisticMessage, addOptimisticMessage] = useOptimistic(state, updatefn)
```

Par exemple, pendant qu'une réponse est en route, nous pouvons afficher un "état" pour donner à l'utilisateur une réponse immédiate. Une fois la réponse réelle renvoyée par le serveur, l'état "optimiste" sera remplacé par celle-ci.

Le hook `useOptimistic` mettra à jour immédiatement l'interface utilisateur en supposant que la requête réussira. Le nom est "optimiste" car l'utilisateur verra le résultat optimiste (réussite) de l'exécution d'une action, même si l'action prend en fait du temps à se terminer.

Examinons comment nous pouvons mettre en œuvre le hook `useOptimistic`. Le code ci-dessous affiche l'état optimiste sur le clic du bouton soumettre `<form input>` (Envoi en cours...) jusqu'à ce que la réponse ne soit pas renvoyée.

```jsx
import { useOptimistic, useState } from 'react'

const Optimistic = () => {
	const [messages, setMessages] = useState([
		{ text: 'Message optimiste', sending: false, key: 1 },
	])
	const [optimisticMessages, addOptimisticMessage] = useOptimistic(
		messages,
		(state, newMessage) => [
			...state,
			{
				text: newMessage,
				sending: true,
			},
		],
	)

	async function sendFormData(formData) {
		const sentMessage = await fakeDelayAction(formData.get('message'))
		setMessages((messages) => [...messages, { text: sentMessage }])
	}

	async function fakeDelayAction(message) {
		await new Promise((res) => setTimeout(res, 1000))
		return message
	}

	const submitData = async (userData) => {
		addOptimisticMessage(userData.get('username'))

		await sendFormData(userData)
	}

	return (
		<>
			{optimisticMessages.map((message, index) => (
				<div key={index}>
					{message.text}
					{!!message.sending && <small> (Envoi en cours...)</small>}
				</div>
			))}
			<form action={submitData}>
				<h1>Hook OptimisticState</h1>
				<div>
					<label>Username</label>
					<input type='text' name='username' />
				</div>
				<button type='submit'>Submit</button>
			</form>
		</>
	)
}

export default Optimistic

```

- `fakeDelayAction` est une méthode factice pour retarder l'événement de soumission. Cela est fait pour montrer l'état optimiste.
- `submitData` est l'action. Cette méthode est responsable de la soumission du formulaire. Elle peut également être asynchrone.
- `sendFormData` est responsable de l'envoi du formulaire à `fakeDelayAction`.
- La définition de l'état par défaut. messages sera utilisé dans `useOptimistic()` en tant qu'entrée et renverra `optimisticMessages`.

```jsx
const [messages, setMessages] = useState([{ text: "Hey, je suis initial !", sending: false, key: 1 }]);
```

Maintenant, rentrons dans les détails :

À l'intérieur de `submitData`, nous utilisons `addOptimisticMessage`. Cela ajoutera les données du formulaire afin qu'elles soient disponibles dans `optimisticMessage`. Nous utiliserons cela pour afficher un message dans l'interface utilisateur.

```jsx
{optimisticMessages.map((message, index) => (
	<div key={index}>
		{message.text}
		{!!message.sending && <small> (Envoi en cours...)</small>}
	</div>
))}
```

## 🎉 Conclusion

Voilà, c'est tout pour les nouvelles fonctionnalités de React 19. Cette version apporte de nombreuses améliorations et de nouvelles fonctionnalités qui rendront le développement d'applications React plus facile et plus efficace.
React est surement le meilleur framework pour le développement front-end, et avec ces nouvelles fonctionnalités, il deviendra encore plus puissant.