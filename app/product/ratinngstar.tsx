import { Icons } from "@/components/icon";
import { cn } from "@/lib/utils";


export default function RatingStar({rating} : {rating : number}) {
    return (
        <div className="flex items-center space-x-1">
            {Array.from({length : 5}).map((_ , index) => (
              <Icons.Star key={index} className={cn("size-4" , rating >= index + 1 ? "text-yellow-500" : "text-muted-foreground" ) } />
            ))}
        </div>
    )
}