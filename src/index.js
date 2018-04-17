import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'

import PostList from './components/PostList'
import PostNew from './components/PostNew'
import { Provider } from 'react-redux'
import { Route as ROUTE } from './constants'
import React from 'react'
import ReactDOM from 'react-dom'
import promise from 'redux-promise'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<Switch>
				<Route
					component={PostList}
					exact
					path={ROUTE.root}
				></Route>
				<Route
					component={PostNew}
					path={ROUTE.postNew}
				></Route>
			</Switch>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.container'))
