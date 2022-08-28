import { Component, DoCheck } from '@angular/core'

// Interface
import { TaskListItem } from '../../model/task-list-item'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public tasksList: TaskListItem[] = JSON.parse(
    localStorage.getItem('myAngularTo-do-List:') ?? '[]',
  )

  constructor() {}

  ngDoCheck(): void {
    this.tasksList.sort((a, b) => Number(a.checked) - Number(b.checked))
    localStorage.setItem('myAngularTo-do-List:', JSON.stringify(this.tasksList))
  }

  public setEmitTaskList(event: string) {
    this.tasksList.push({ name: event, checked: false })
  }

  public listItemDelete(index: number) {
    this.tasksList.splice(index, 1)
  }

  public listItemsDeleteAll() {
    const confirm = window.confirm(
      'Deseja realmente deletar todos os itens da lista?',
    )
    if (confirm) this.tasksList = []
  }

  public inputChangeValidation(itemName: string, index: number) {
    if (!itemName.trim()) {
      const confirm = window.confirm(
        'O nome digitado não é válido! Deseja deletar a task?',
      )
      if (confirm) this.listItemDelete(index)
    }
  }
}
