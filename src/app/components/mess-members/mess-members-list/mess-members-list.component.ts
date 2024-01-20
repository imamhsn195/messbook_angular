import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessMember } from '../mess-member';
import { MessMemberService } from '../mess-member.service';

@Component({
  selector: 'app-mess-members-list',
  templateUrl: './mess-members-list.component.html',
  styleUrl: './mess-members-list.component.css'
})
export class MessMembersListComponent {
  tableColumnHeaders: string[] = [ "id",'messbook','members','invidedBy','isAccepted','actions' ];
  messMembers: MessMember[] = [];

  constructor(
    private messMemberService: MessMemberService, 
    private _snackBar: MatSnackBar
    ) {}

  ngOnInit(): void{
    this.getMessMembers();
  }
 
  getMessMembers(): void{
    this.messMemberService.getMessMembers().subscribe((messMembers) => {
      this.messMembers = messMembers });
  }

  deleteMessMember(id: number): void{
    this.messMemberService.deleteMessMember(id).subscribe(() => {
      this.showSnacBar('MessMember deleted successfully!', "OK")
      this.getMessMembers();
    })
  }

  private showSnacBar(message: string, action: string, panelClass?: any): void {
    this._snackBar.open(message , action, { horizontalPosition: 'center', verticalPosition: 'top', panelClass:panelClass});
  }
}
