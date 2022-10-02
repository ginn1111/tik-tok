import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './Layout/DefaultLayout';
import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map(({ path, component: Component, layout }, index) => {
            const Layout =
              layout === null ? React.Fragment : layout || DefaultLayout;
            return (
              <Route
                path={path}
                key={index}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
