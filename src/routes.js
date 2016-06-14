import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

/*const Greeting = () => {
  return(
    <div>Hey there!</div>
  );
}*/

//  <Route path="greet" component={Greeting} /> //el component es pasa com un children! DESPRES DE IndexRoute

export default (
<Route path="/" component={App}>
  <IndexRoute component={PostsIndex} /> //ruta per defecte --> mai entrara nomes a la app
  <Route path="posts/new" component={PostsNew} />
  <Route path="posts/:id" component={PostsShow} />
</Route>
);
