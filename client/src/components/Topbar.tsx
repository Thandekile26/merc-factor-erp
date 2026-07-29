import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <h2 className="font-semibold">
        Workshop Dashboard
      </h2>

      <Avatar>
        <AvatarFallback>
          MF
        </AvatarFallback>
      </Avatar>
    </header>
  )
}