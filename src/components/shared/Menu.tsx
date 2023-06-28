"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const Menu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex w-96 justify-between">
                <NavigationMenuItem>
                   Mens
                </NavigationMenuItem>
                <NavigationMenuItem>
                    Womens
                </NavigationMenuItem>
                <NavigationMenuItem>
                    Kids
                </NavigationMenuItem>
                <NavigationMenuItem>
                    All Products
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Menu