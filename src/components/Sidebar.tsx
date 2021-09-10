import { Guild } from "../utils/types"

import {
  IconStyle,
  GuildIcon,
  SidebarContent,
  SidebarHeader,
  SidebarStyle
} from "../styles/styles"

type SidebarProps = {
  guilds: Guild[];
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <SidebarStyle>
      <SidebarHeader>
        <IconStyle />
      </SidebarHeader>
      <SidebarContent>
        {props.guilds.map((guild) => (
          <GuildIcon key={guild.id} />
        ))}
      </SidebarContent>
    </SidebarStyle>
  )
}