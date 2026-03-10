import { Button } from "@/components/ui/button"
import { UserType } from "@/type"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    AvatarImage,
} from "@/components/ui/avatar"
import { Icons } from "@/components/icon"

interface userProps {
    user: UserType
}

export default function AuthDropdown({ user }: userProps) {
    if (!user) {
        return (
            <Button asChild size={'sm'}>
                {/* Wrap everything in the Link so Button only sees ONE child */}
                <Link href={'/login'}>
                    Sign in
                    <span className="sr-only">This is login button</span>
                </Link>
            </Button>
        )
    } 

    const shotName = `${user.firstName?.charAt(0) ?? ''}${user.lastName?.charAt(0) ?? ''}`;

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="sm" className="size-8 mt-2 rounded-full">
                        <Avatar className="size-8">
                            <AvatarImage src={user.imageUrl} alt={user.username} />
                            <AvatarFallback>{shotName}</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuGroup>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">{user.firstName} {user.lastName}</p>
                                <p className="text-sm leading-none text-muted-foreground">{user.email}</p>
                            </div>
                        </DropdownMenuLabel>

                        {/* FIX: Move Shortcut inside the Link */}
                        <DropdownMenuItem asChild>
                            <Link href={'/dashboard'} className="flex justify-between w-full">
                                <span className="flex items-center">
                                    <Icons.Dashboard className="size-4 mr-2" aria-hidden="true" />
                                    Dashboard
                                </span>
                                <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href={'#'} className="flex justify-between w-full">
                                <span className="flex items-center">
                                    <Icons.Layers className="size-4 mr-2" aria-hidden="true" />
                                    Billing
                                </span>
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href={'#'} className="flex justify-between w-full">
                                <span className="flex items-center">
                                    <Icons.Setting className="size-4 mr-2" aria-hidden="true" />
                                    Settings
                                </span>
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                            <Link href={'#'} className="flex justify-between w-full">
                                <span className="flex items-center">
                                    <Icons.Exit className="size-4 mr-2" aria-hidden="true" />
                                    Log out
                                </span>
                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}