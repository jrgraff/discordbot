import { createContext } from 'react'

import { Guild } from '../types'

type GuildStoreContextType = {
  guilds: Guild[];
  setGuilds: (guilds: Guild[]) => void;
}

export const GuildStoreContext = createContext<GuildStoreContextType>({
  guilds: [],
  setGuilds: (guilds: Guild[]) => {}
})

export const GuildStoreContextProvider = GuildStoreContext.Provider