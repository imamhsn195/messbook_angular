import { Diary } from "../diaries/diary.model";
import { User } from "../users/users.model";
export interface MessMember {
 id: number;
 messBook: Diary;
 members: User[];
 invitedBy: User;
 isAccepted: boolean
}
