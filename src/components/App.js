import React, { lazy, Suspense } from 'react';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';

const Article = lazy(() =>
  import(
    /* webpackChunkName: "Article", webpackPrefetch: true  */ './Article'
  )
);

const Editor = lazy(() =>
  import(
    /* webpackChunkName: "Editor", webpackPrefetch: true  */ './Editor'
  )
);

const SignUp = lazy(() =>
  import(
    /* webpackChunkName: "SignUp", webpackPrefetch: true  */ './SignUp'
  )
);

const SignIn = lazy(() =>
  import(
    /* webpackChunkName: "SignIn", webpackPrefetch: true  */ './SignIn'
  )
);

const Profile = lazy(() =>
  import(
    /* webpackChunkName: "Profile", webpackPrefetch: true  */ './Profile'
  )
);

const Settings = lazy(() =>
  import(
    /* webpackChunkName: "SettingsScreen", webpackPrefetch: true  */ './Settings'
  )
);

function App() {
  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp/>} />
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
    </>
  );
}





export default App;
