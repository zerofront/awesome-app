import * as React from 'react'

import Home from './views/Home'

interface IAppProps {

}

class App extends React.Component {

  public render(): React.ReactElement<IAppProps> {
    return (
      <Home />
    );
  }
}

export default App
