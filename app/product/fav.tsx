import { Icons } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


interface FavouriteProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  rating: number;
  isFavourite: boolean;
}

export default function Fav({id , rating , className , ...props} : FavouriteProp) {
    return (
         <Button  variant={'secondary'} size={'icon'}  className={cn("size-8 shrink-0 " , className)} {...props}> 
            <Icons.Heart className="size-4" />
         </Button>
    )
}