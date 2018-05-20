import { Injectable } from '@angular/core';
import { DiffFile } from './file.interface';
import { FileOperation } from './fileoperation.enum';

@Injectable({
  providedIn: 'root'
})
export class DiffserviceService {

  constructor() { }

  public getFiles(diff: String):String[] {
    var diffLines = diff.split('\n');
    var fileMatch = /^diff --git a\/(.*) b\/(.*)/;
    var files:String[] = [];
    for(let line in diffLines){
      if(fileMatch.test(diffLines[line])) {
        var match = fileMatch.exec(diffLines[line])
        files.push(match[1]);
      }
    }
    return files;
  }

  public getFilesInfo(diff: string): DiffFile[] {
    var addFileMatch = /^--- (a\/(.*)|\/dev\/null)/;
    var removeFileMatch = /^\+\+\+ (b\/(.*)|\/dev\/null)/;
    var fileInfo: DiffFile[] = [];
    var diffLines = diff.split('\n');
    for(let i = 0; i < diffLines.length; i++){
      if(addFileMatch.test(diffLines[i])) {
        if(removeFileMatch.test(diffLines[i+1])) {
          var addMatch = addFileMatch.exec(diffLines[i]);
          var removeMatch = removeFileMatch.exec(diffLines[i+1])
          var fileData = <DiffFile>{};
          fileData.type = addMatch[1] == '/dev/null' ? FileOperation.ADD : removeMatch[1] == '/dev/null' ? FileOperation.REMOVE : FileOperation.MODIFY;
          fileData.name = fileData.type == FileOperation.ADD ? removeMatch[2] : addMatch[2]
          
          fileInfo.push(fileData);

        }
      }
    }

    return fileInfo;
  }

  public getFileDiffDetails(diff: String):any {
    var fileMatch = /diff --git a\/.*[\r\n|\r|\n]+/
    var diffLines = diff.split(fileMatch);
    var results:any[] = [];
    for(let item in diffLines) {
      //var pieces = diffLines[item].split(/(@@.*)/);
      //debugger;
      var trimmedStuff = this.trimMetaData(diffLines[item]);
      results.push(this.chunkDiffIntoParts(trimmedStuff));
    }

    return results;
  }

  private trimMetaData(diffPart: String): any {
    var diffPartLines = diffPart.split('\n');
    return diffPartLines.slice(3).join('\n');
  }

  public chunkDiffIntoParts(diffPart: String): any {
    var diffParts = [];
    var diffPartLines = diffPart.split('\n');
    var currentChunkTitle = "";
    var currentChunkContent = "";

    for(let item in diffPartLines) {
      if(diffPartLines[item].startsWith("@@")){
        diffParts = this.addDetailsToArray(diffParts, currentChunkTitle, currentChunkContent);
        currentChunkTitle = diffPartLines[item];
      } else {
        currentChunkContent += diffPartLines[item] + "\n";
      }
    }

    diffParts = this.addDetailsToArray(diffParts, currentChunkTitle, currentChunkContent);

    return diffParts;
  }

  private addDetailsToArray(parts: any[], title:string, content:string):any {
    if(title.length > 0 && content.length > 0) {
      parts.push({'title': title, 'content': content});

      return parts;
    }
    return parts;
  }

}
