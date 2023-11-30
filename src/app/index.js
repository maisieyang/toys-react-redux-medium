import  { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import store from './providers/store';
import Header from '../shared/ui/Header'; 
import Home from '../pages/home';


const Article = lazy(() =>
  import(
    /* webpackChunkName: "Article", webpackPrefetch: true  */ '../pages/article'
  )
);

const Editor = lazy(() =>
  import(
    /* webpackChunkName: "Editor", webpackPrefetch: true  */ '../pages/editor/EditorPage'
  )
);

const SignUp = lazy(() =>
  import(
    /* webpackChunkName: "SignUp", webpackPrefetch: true  */ '../pages/register'
  )
);

const SignIn = lazy(() =>
  import(
    /* webpackChunkName: "SignIn", webpackPrefetch: true  */ '../pages/login'
  )
);

const Profile = lazy(() =>
  import(
    /* webpackChunkName: "Profile", webpackPrefetch: true  */ '../pages/profile'
  )
);

const Settings = lazy(() =>
  import(
    /* webpackChunkName: "SettingsScreen", webpackPrefetch: true  */ '../pages/setting'
  )
);

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/editor/:slug" element={<Editor />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/article/:slug" element={<Article />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/@:username/favorites"
                element={<Profile isFavoritePage />}
              />
              <Route path="/@:username" element={<Profile />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </>
  );
}





export default App;
