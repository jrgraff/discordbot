import { MenuGroup } from './types'

export const menuItems = (guildId: string): MenuGroup[] => [
  {
    name: "Teste um",
    path: "/teste",
    routes: [
      {
        name: "Um teste",
        path: `/dashboard/${guildId}/teste/1teste`
      },
      {
        name: "Dois testes",
        path: `/dashboard/${guildId}/teste/2teste`
      },
    ],
  },
  {
    name: "Teste dois",
    path: "/teste2",
    routes: [
      {
        name: "Um teste",
        path: `/dashboard/${guildId}/teste/1teste`
      },
      {
        name: "Dois testes",
        path: `/dashboard/${guildId}/teste/2teste`
      },
    ],
  },
  
  {
    name: "Teste tres",
    path: "/teste3",
    routes: [
      {
        name: "Um teste",
        path: `/dashboard/${guildId}/teste/1teste`
      },
      {
        name: "Dois testes",
        path: `/dashboard/${guildId}/teste/2teste`
      },
    ],
  },
]