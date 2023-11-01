import  { lazy, Suspense } from 'react';

import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Header from './components/Header'; 
import Home from './pages/Home';

// import Article from './components/Article';
// import Editor from './components/Editor';
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';
// import Profile from './components/Profile';
// import Settings from './components/Settings';


const Article = lazy(() =>
  import(
    /* webpackChunkName: "Article", webpackPrefetch: true  */ './pages/Article'
  )
);

const Editor = lazy(() =>
  import(
    /* webpackChunkName: "Editor", webpackPrefetch: true  */ './pages/Editor'
  )
);

const SignUp = lazy(() =>
  import(
    /* webpackChunkName: "SignUp", webpackPrefetch: true  */ './pages/SignUp'
  )
);

const SignIn = lazy(() =>
  import(
    /* webpackChunkName: "SignIn", webpackPrefetch: true  */ './pages/SignIn'
  )
);

const Profile = lazy(() =>
  import(
    /* webpackChunkName: "Profile", webpackPrefetch: true  */ './pages/Profile'
  )
);

const Settings = lazy(() =>
  import(
    /* webpackChunkName: "SettingsScreen", webpackPrefetch: true  */ './pages/Settings'
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

// function App() {
//   return (
//     <>
//       <Provider store={store}>
//         <BrowserRouter>
//             <Header />
//             <Routes>
//               <Route exact path="/" element={<Home />} />
//               <Route path="/login" element={<SignIn />} />
//               <Route path="/register" element={<SignUp />} />
//               <Route path="/editor/:slug" element={<Editor />} />
//               <Route path="/editor" element={<Editor />} />
//               <Route path="/article/:slug" element={<Article />} />
//               <Route path="/settings" element={<Settings />} />
//               <Route
//                 path="/@:username/favorites"
//                 element={<Profile isFavoritePage />}
//               />
//               <Route path="/@:username" element={<Profile />} />
//             </Routes>
//         </BrowserRouter>
//       </Provider>
//     </>
//   );
// }




export default App;
