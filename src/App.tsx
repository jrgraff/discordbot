import { Switch, Redirect, Route } from 'react-router-dom'

import { Sidebar } from './components/Sidebar';
import { Menu } from './components/Menu';
import { DashboardPage } from './pages/Dashboard';
import { guilds } from "./mocks/guilds"

function App() {
  return (
    <div>
      <Sidebar guilds={guilds} />
      <Menu />
      <Switch>
        <Redirect 
          path="/" 
          exact={true} 
          to="/dashboard"
        />
        <Route 
          path="/dashboard" 
          exact={true} 
          component={DashboardPage} 
        />
        <Route 
          path="/dashboard/:guildId" 
          exact={true} 
          component={DashboardPage} 
        />
      </Switch>
    </div>
  );
}

export default App;
