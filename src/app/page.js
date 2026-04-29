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
    <div className="flex flex-col items-center gap-4">
      <Avatar>
        <AvatarImage src="/lain.jpg" alt="Avatar" />
        <AvatarFallback>P</AvatarFallback>
      </Avatar>
      <h1 className="text-2xl font-semibold">Psyraiser</h1>
    </div>
  )
}