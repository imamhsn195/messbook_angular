import { MessBook } from "../mess-books/mess-book.model";
import { User } from "../users/users.model";
export interface MessMember {
 id: number;
 messBook: MessBook;
 members: User[];
 invitedBy: User;
 isAccepted: boolean
}
