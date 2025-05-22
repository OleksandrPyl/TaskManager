import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit
{
  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;
  ToDay: Date = new Date();

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  ngOnInit()
  {
    this.Designation = 'Team Leader';
    this.Username = 'Andry Bondarenko';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.ToDay = new Date();

    this.Clients = [
      'ABC Infotech Ltd.',
      'DEF Software Solutions',
      'GHI Industries',
    ];

    this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];

    for (var i = 2025; i >= 2020; i--)
    {
      this.Years.push(i);
    }

    this.TeamMembersSummary = [
      {
        Region: 'East',
        TeamMembersCount: 20,
        TemporarilyUnavailableMembers: 4,
      },
      {
        Region: 'West',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 8,
      },
      {
        Region: 'South',
        TeamMembersCount: 17,
        TemporarilyUnavailableMembers: 1,
      },
      {
        Region: 'North',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 6,
      },
    ];

    this.TeamMembers = [
      {
        Region: 'East',
        Members: [
          { ID: 1, Name: 'Alex', Status: 'Available' },
          { ID: 2, Name: 'Oleh', Status: 'Available' },
          { ID: 3, Name: 'Yura', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' },
        ],
      },
      {
        Region: 'West',
        Members: [
          { ID: 5, Name: 'Anna', Status: 'Available' },
          { ID: 6, Name: 'Artem', Status: 'Available' },
          { ID: 7, Name: 'Sasha', Status: 'Busy' },
          { ID: 8, Name: 'Jasmine', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { ID: 9, Name: 'Kristina', Status: 'Available' },
          { ID: 10, Name: 'Valera', Status: 'Available' },
          { ID: 11, Name: 'Raju', Status: 'Busy' },
          { ID: 12, Name: 'Faradey', Status: 'Busy' },
        ],
      },
      {
        Region: 'North',
        Members: [
          { ID: 13, Name: 'Jon', Status: 'Available' },
          { ID: 14, Name: 'Anton', Status: 'Available' },
          { ID: 15, Name: 'Jones', Status: 'Busy' },
          { ID: 16, Name: 'James', Status: 'Busy' },
        ],
      },
    ];
  }

  onProjectChange($event: any)
  {
    if ($event.target.innerHTML.trim() == 'Project Aa')
    {
      this.ProjectCost = 22343507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 5456;
    } else if ($event.target.innerHTML.trim() == 'Project Bb')
    {
      this.ProjectCost = 88923;
      this.CurrentExpenditure = 22540;
      this.AvailableFunds = 2640;
    } else if ($event.target.innerHTML.trim() == 'Project Cc')
    {
      this.ProjectCost = 66453;
      this.CurrentExpenditure = 7451;
      this.AvailableFunds = 9811;
    } else if ($event.target.innerHTML.trim() == 'Project Dd')
    {
      this.ProjectCost = 94531;
      this.CurrentExpenditure = 562;
      this.AvailableFunds = 883;
    }
  }
}
