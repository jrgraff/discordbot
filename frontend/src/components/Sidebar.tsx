import { History } from 'history';
import { useContext } from 'react';

import { Guild } from "../utils/types";
import { GuildContext } from '../utils/contexts/GuildContext';

import {
  IconStyle,
  GuildIcon,
  SidebarContent,
  SidebarHeader,
  SidebarStyle
} from "../styles/styles";

type SidebarProps = {
  guilds: Guild[];
  history: History;
}

export const Sidebar = (props: SidebarProps) => {
  const { setGuild } = useContext(GuildContext)

  return (
    <SidebarStyle>
      <SidebarHeader>
        <IconStyle />
      </SidebarHeader>
      <SidebarContent>
        {props.guilds.map((guild) => (
          <GuildIcon 
            key={guild.id}
            onClick={() => {
              setGuild(guild)
              props.history.push(`/dashboard/${guild.id}`)
            }}
          />
        ))}
      </SidebarContent>
    </SidebarStyle>
  )
}