import { useEffect, useState } from 'react';
import { Switch, Redirect, Route, useHistory } from 'react-router-dom'

import { Sidebar } from './components/Sidebar';
import { Menu } from './components/Menu';
import { DashboardPage } from './pages/Dashboard';
import { guilds as mockGuilds } from "./mocks/guilds"
import { Guild } from './utils/types';
import { GuildContextProvider } from './utils/contexts/GuildContext';
import { GuildStoreContextProvider } from './utils/contexts/GuildStoreContext';

function App() {
  const [guild, setGuild] = useState<Guild | undefined>()
  const [guilds, setGuilds] = useState<Guild[]>([])

  useEffect(() => {
    setGuilds(mockGuilds)
  }, [])

  const history = useHistory()

  return (
    <GuildContextProvider value={{ guild, setGuild }}>
      <GuildStoreContextProvider value={{ guilds, setGuilds }}>
        <Sidebar guilds={guilds} history={history} />
        <Menu history={history} />
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
          <Route
            path="/dashboard/:guildId/teste1/1"
            exact={true}
            component={DashboardPage}
          />
          <Route
            path="/dashboard/:guildId/teste1/2"
            exact={true}
            component={DashboardPage}
          />
          <Route
            path="/dashboard/:guildId/teste2/1"
            exact={true}
            component={DashboardPage}
          />
        </Switch>
      </GuildStoreContextProvider>
    </GuildContextProvider>
  );
}

export default App;
