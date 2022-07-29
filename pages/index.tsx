import type { NextPage } from 'next';
import Navbar from '../layouts/navbar';
import Home from '../layouts/home';

import useTheme from '../hooks/theme';

const App: NextPage = () => {
  const { ThemeProvider, initial } = useTheme();
  return (
    <ThemeProvider value={initial}>
      <div>
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
