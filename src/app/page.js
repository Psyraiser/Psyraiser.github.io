import { Avatar,AvatarImage,AvatarFallback } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 flex flex-col items-center">
      <div className="self-end">
        <ModeToggle />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <AvatarItems />
      </div>
    </div>
  )
}

export function AvatarItems() {
  return(
    <Avatar>
      <AvatarImage src="/lain.jpg" alt="Avatar" />
      <AvatarFallback>Psyraiser</AvatarFallback>
    </Avatar>
  )
}