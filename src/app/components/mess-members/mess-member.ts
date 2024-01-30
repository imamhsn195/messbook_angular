import { Diary } from "../mess-books/diary.model";
import { User } from "../users/users.model";
export interface MessMember {
 id: number;
 messBook: Diary;
 members: User[];
 invitedBy: User;
 isAccepted: boolean
}
