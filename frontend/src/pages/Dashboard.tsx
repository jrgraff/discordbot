import { useContext, useEffect } from "react";

import { BasePageStyle, DashboardHeader } from "../styles/styles";
import { GuildContext } from "../utils/contexts/GuildContext";
import { GuildStoreContext } from "../utils/contexts/GuildStoreContext";

export const DashboardPage = (props: any) => {
  const { guildId } = props.match.params
  const { guild, setGuild } = useContext(GuildContext)
  const { guilds } = useContext(GuildStoreContext)

  useEffect(() => {
    const findGuild = guilds.find((g) => g.id === guildId)
    setGuild(findGuild!)
  })

  if (!guild) return (
    <BasePageStyle>
      <DashboardHeader>Please select a Guild</DashboardHeader>
    </BasePageStyle>
  )

  return (
    <BasePageStyle>
      <DashboardHeader>
        Dashboard
      </DashboardHeader>
    </BasePageStyle>
  )
}