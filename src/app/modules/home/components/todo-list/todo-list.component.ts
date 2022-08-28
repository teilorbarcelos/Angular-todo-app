import { Component, OnInit } from '@angular/core'

// Interface
import { TaskListItem } from '../../model/task-list-item'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public tasksList: TaskListItem[] = []

  constructor() {}

  ngOnInit(): void {}
}
