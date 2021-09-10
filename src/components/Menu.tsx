import { 
  MenuContent, 
  MenuHeader, 
  MenuStyle, 
  MenuCategory, 
  MenuCategoryItem 
} from "../styles/styles"
import { menuItems } from "../utils/constants"

type MenuProps = {}

export const Menu = (props: MenuProps) => {
  return (
    <MenuStyle>
      <MenuHeader>
        <span>Menu Dashboard</span>
      </MenuHeader>
      <MenuContent>
        {menuItems("120").map((item) => (
          <MenuCategory key={item.name}>
            <span>{item.name}</span>
            {item.routes.map((route) => (
              <MenuCategoryItem key={route.name}>
                <span># {route.name}</span>
              </MenuCategoryItem>
            ))}
          </MenuCategory>
        ))}
      </MenuContent>
    </MenuStyle>
  )
}