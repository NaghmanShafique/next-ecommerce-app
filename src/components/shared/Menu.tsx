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
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"



const Menu = () => {
    return (
        // <NavigationMenu>
        //     <NavigationMenuList className="flex w-96 justify-between">
        //         <NavigationMenuItem>
        //            <NavigationMenuTrigger>Mens</NavigationMenuTrigger>
        //         <NavigationMenuContent>
        //          <NavigationMenuLink>Link</NavigationMenuLink>
        //           </NavigationMenuContent>
        //         </NavigationMenuItem>
        //         <NavigationMenuItem>
        //             Womens
        //         </NavigationMenuItem>
        //         <NavigationMenuItem>
        //             Kids
        //         </NavigationMenuItem>
        //         <NavigationMenuItem>
        //             All Products
        //         </NavigationMenuItem>
        //     </NavigationMenuList>
        // </NavigationMenu>
        <NavigationMenu>
            <NavigationMenuList className="flex w-96 justify-between">
                <NavigationMenuItem>
                    <Link href="/female" legacyBehavior passHref>
                        <NavigationMenuLink>
                            Female
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/male" legacyBehavior passHref>
                        <NavigationMenuLink>
                            Male
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/kids" legacyBehavior passHref>
                        <NavigationMenuLink>
                            Kids
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/product" legacyBehavior passHref>
                        <NavigationMenuLink>
                            All Products
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}

export default Menu