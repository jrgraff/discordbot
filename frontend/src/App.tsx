import { useState } from 'react';
import { Switch, Redirect, Route, useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client';

import { Sidebar } from './components/Sidebar';
import { Menu } from './components/Menu';
import { DashboardPage } from './pages/Dashboard';
import { Guild } from './utils/types';
import { GuildContextProvider } from './utils/contexts/GuildContext';
import { GuildStoreContextProvider } from './utils/contexts/GuildStoreContext';
import { getUser } from './graphql';

function App() {
  const [guild, setGuild] = useState<Guild | undefined>()
  const [guilds, setGuilds] = useState<Guild[]>([])
  const history = useHistory();

  const { loading, error } = useQuery(getUser, {
    onCompleted: ({ getUser }) => {
      const { guilds } = getUser;
      console.log(guilds)
      setGuilds(guilds);
    },
  });

  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error)
    return <h1>You are making too many requests.</h1>
  };

  return (
    <Providers
      guild={guild}
      setGuild={setGuild}
      guilds={guilds}
      setGuilds={setGuilds}
    >
      <Sidebar guilds={guilds} history={history} />
      <Menu history={history} />
      <Routes />
    </Providers>
  );
}

function Providers({ children, guild, setGuild, guilds, setGuilds }: any) {
  return (
    <GuildContextProvider value={{ guild, setGuild }}>
      <GuildStoreContextProvider value={{ guilds, setGuilds }}>
        {children}
      </GuildStoreContextProvider>
    </GuildContextProvider>
  );
}

function Routes() {
  return (
    <Switch>
      <Redirect path="/" exact={true} to="/dashboard" />
      <Route path="/dashboard" exact={true} component={DashboardPage} />
      <Route
        path="/dashboard/:guildId"
        exact={true}
        component={DashboardPage}
      />
      <Route
        path="/dashboard/:guildId/general/muted"
        exact={true}
        component={DashboardPage}
      />
    </Switch>
  );
}

export default App;
