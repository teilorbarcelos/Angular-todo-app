import { Component, OnInit } from '@angular/core'

// Interface
import { TaskListItem } from '../../model/task-list-item'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public tasksList: TaskListItem[] = [{ checked: false, name: 'test 1' }]

  constructor() {}

  ngOnInit(): void {}

  public listItemDelete(index: number) {
    this.tasksList.splice(index, 1)
  }

  public listItemsDeleteAll() {
    const confirm = window.confirm(
      'Deseja realmente deletar todos os itens da lista?',
    )
    if (confirm) this.tasksList = []
  }
}
