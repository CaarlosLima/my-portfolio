import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/NavigationMenu'
import { RocketIcon } from '@radix-ui/react-icons'

export function PageHeader() {
  return (
    <header className="flex h-12 w-full items-center justify-between px-24">
      <h1>
        <a href="#home" className="flex items-center justify-center font-bold">
          Carlos Eduardo Lima
          <RocketIcon className="ml-1 h-4 w-4 text-blue-500" />
        </a>
      </h1>

      <span className="rounded-lg bg-red-700 px-2">IN PROGRESS</span>

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
