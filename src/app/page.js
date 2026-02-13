import { Avatar,AvatarImage,AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div>
      <AvatarItems />
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