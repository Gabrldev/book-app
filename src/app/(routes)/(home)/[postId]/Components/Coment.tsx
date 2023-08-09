import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Comment, User } from "@prisma/client"

interface ComentProps {
  coment: Comment & {
    author: User
  } 
}

const Coment:React.FC<ComentProps> = ({coment}) => {
  return (
    <Card className="h-fit py-6 flex items-center px-4 gap-x-4">
      <Avatar>
        <AvatarImage src={coment.author.image!} alt='profile' />
      </Avatar>
      <span className="text-sm text-muted-foreground">{coment.text}</span>
    </Card>
  )
}
export default Coment