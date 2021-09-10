import { MenuGroup } from '../utils/types'

export const menuItems = (guildId: string): MenuGroup[] => [
  {
    name: "Teste um",
    path: "/teste1",
    routes: [
      {
        name: "Um teste",
        path: `/dashboard/${guildId}/teste1/1`
      },
      {
        name: "Dois testes",
        path: `/dashboard/${guildId}/teste1/2`
      },
    ],
  },
  {
    name: "Teste dois",
    path: "/teste2",
    routes: [
      {
        name: "Um teste",
        path: `/dashboard/${guildId}/teste2/1`
      },
      {
        name: "Dois testes",
        path: `/dashboard/${guildId}/teste2/2`
      },
    ],
  },
  
  {
    name: "Teste tres",
    path: "/teste3",
    routes: [
      {
        name: "Um teste",
        path: `/dashboard/${guildId}/teste3/1`
      },
      {
        name: "Dois testes",
        path: `/dashboard/${guildId}/teste3/2`
      },
    ],
  },
]