import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DiffFile } from '../services/file.interface';
import { FileOperation } from '../services/fileoperation.enum';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileListComponent implements OnInit {

  @Input() diffFiles: DiffFile[];
  visible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleVisibility(): void {
    this.visible = !this.visible;
  }

  getSymbol(diffFile:DiffFile):string {
    if(diffFile.type == FileOperation.MODIFY) {
      return '*';
    } else if (diffFile.type == FileOperation.ADD) {
      return '+';
    } else {
      return '-';
    }
  }

  getType(diffFile:DiffFile):string {
    if(diffFile.type == FileOperation.ADD) {
      return "ADDED";
    } else if (diffFile.type == FileOperation.MODIFY) {
      return "CHANGED";
    } else {
      return "DELETED";
    }
  }

}
