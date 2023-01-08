import { createContext } from 'react'

import { Guild } from '../types'

type GuildContextType = {
  guild?: Guild;
  setGuild: (guild: Guild) => void;
}

export const GuildContext = createContext<GuildContextType>({
  guild: undefined,
  setGuild: (guild: Guild) => {}
})

export const GuildContextProvider = GuildContext.Provider