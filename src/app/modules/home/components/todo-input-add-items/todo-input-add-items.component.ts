import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss'],
})
export class TodoInputAddItemsComponent implements OnInit {
  @Output() public emitItemTaskList = new EventEmitter()

  public addItemTaskList: string = ''

  constructor() {}

  ngOnInit(): void {}

  public submitItemTasksList() {
    this.addItemTaskList = this.addItemTaskList.trim()

    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList)
      this.addItemTaskList = ''
    }
  }
}
