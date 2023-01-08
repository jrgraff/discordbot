import { useContext } from 'react';
import { History } from 'history';

import { menuItems } from "../mocks/constants"
import { GuildContext } from '../utils/contexts/GuildContext';

import { 
  MenuContent, 
  MenuHeader, 
    MenuStyle, 
    MenuCategory, 
    MenuCategoryItem 
  } from "../styles/styles"

type MenuProps = {
  history: History
}

export const Menu = (props: MenuProps) => {
  const { guild } = useContext(GuildContext)

  if(!guild) return (
    <MenuStyle>
      <MenuHeader>Please select a Guild</MenuHeader>
    </MenuStyle>
  )

  return (
    <MenuStyle>
      <MenuHeader>
        <span>Menu Dashboard</span>
      </MenuHeader>
      <MenuContent>
        {menuItems(guild.id).map((item) => (
          <MenuCategory key={item.name}>
            <span>{item.name}</span>
            {item.routes.map((route) => (
              <MenuCategoryItem 
                key={route.name}
                onClick={() => props.history.push(route.path)}
              >
                <span>{route.name}</span>
              </MenuCategoryItem>
            ))}
          </MenuCategory>
        ))}
      </MenuContent>
    </MenuStyle>
  )
}