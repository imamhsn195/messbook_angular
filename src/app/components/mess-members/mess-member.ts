import { Diary } from "../mess-books/mess-book.model";
import { User } from "../users/users.model";
export interface MessMember {
 id: number;
 messBook: Diary;
 members: User[];
 invitedBy: User;
 isAccepted: boolean
}
