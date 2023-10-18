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
    /* webpackChunkName: "AuthScreen", webpackPrefetch: true  */ './SignUp'
  )
);

const Profile = lazy(() =>
  import(
    /* webpackChunkName: "Profile", webpackPrefetch: true  */ './Profile'
  )
);

const SettingsScreen = lazy(() =>
  import(
    /* webpackChunkName: "SettingsScreen", webpackPrefetch: true  */ './SettingsScreen'
  )
);

function App() {
  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<SignUp />} />
                <Route path="/register" element={<SignUp/>} />
                <Route path="/editor/:slug" element={<Editor />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/article/:slug" element={<Article />} />
                <Route path="/settings" element={<SettingsScreen />} />
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
