import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService,  private router: Router) { 
    this.apiService
    .getUserLists()
    .subscribe((response) => {
      console.log("the response lists is...", response);  
      this.data = response;
      
      // this.router.navigate(['/dashboard']);
    });

  }

  ngOnInit(): void {
  }

}
