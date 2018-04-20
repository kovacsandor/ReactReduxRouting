import { BrowserRouter, Route as RouteComponent, Switch } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'

import PostDetail from './components/PostDetail'
import PostList from './components/PostList'
import PostNew from './components/PostNew'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from './constants'
import promise from 'redux-promise'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<Switch>
				<RouteComponent
					component={PostNew}
					path={Route.NEW}
				></RouteComponent>
				<RouteComponent
					component={PostDetail}
					path={Route.POST}
				></RouteComponent>
				<RouteComponent
					component={PostList}
					path={Route.ROOT}
				></RouteComponent>
			</Switch>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.container'))
