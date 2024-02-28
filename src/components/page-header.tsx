import { User } from '@/types/user'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu'

export function PageHeader({ user }: { user?: User }) {
  return (
    <header className="fixed flex h-12 w-full items-center justify-between px-24">
      <a href="#home" className="flex items-center justify-center font-bold">
        {user?.name}

        <p className="font-bold text-blue-600">.</p>
      </a>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#home"
              className="p-0.5 hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2 focus:outline-none"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#about"
              className="p-0.5 hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2 focus:outline-none"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#projects"
              className="p-0.5 hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2 focus:outline-none"
            >
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
