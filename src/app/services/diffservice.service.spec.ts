import { TestBed, inject } from '@angular/core/testing';

import { DiffserviceService } from './diffservice.service';
import { FileOperation } from './fileoperation.enum';
import { DiffFile } from './file.interface';
var mockData = require('./mockdata.json');

describe('DiffserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiffserviceService]
    });
  });

  it('should be created', inject([DiffserviceService], (service: DiffserviceService) => {
    expect(service).toBeTruthy();
  }));

  it('should get correct files: main example', inject([DiffserviceService], (service: DiffserviceService) => {
    var files = service.getDiffInfo(mockData.main);

    expect(files.length).toBe(12);
    let fileNames = files.map((file) => file.name);
    expect(fileNames).toContain('test/line-by-line-tests.js');
    expect(fileNames).toContain('README.md');
    expect(fileNames).toContain('scripts/hulk.js');
    expect(fileNames).toContain('src/diff2html.js');
    expect(fileNames).toContain('src/file-list-printer.js');
    expect(fileNames).toContain('src/hoganjs-utils.js');
    expect(fileNames).toContain('src/html-printer.js');
    expect(fileNames).toContain('src/line-by-line-printer.js');
    expect(fileNames).toContain('src/side-by-side-printer.js');
    expect(fileNames).toContain('test/file-list-printer-tests.js');
    expect(fileNames).toContain('test/hogan-cache-tests.js');
    expect(fileNames).toContain('test/line-by-line-tests.js');
  }));

  it('should get correct titles: with added file', inject([DiffserviceService], (service: DiffserviceService) => {
    var files = service.getDiffInfo(mockData.bigAddRemove);

    expect(files.length).toBe(6);
    expect(files).toContain(<DiffFile>{'name': '.eslintignore', type: FileOperation.MODIFY});
    expect(files).toContain(<DiffFile>{'name': 'docs/demo.html', type: FileOperation.REMOVE});
    expect(files).toContain(<DiffFile>{'name': 'docs/index.html', type: FileOperation.MODIFY});
    expect(files).toContain(<DiffFile>{'name': 'docs/main.css', type: FileOperation.MODIFY});
    expect(files).toContain(<DiffFile>{'name': 'docs/main.min.css', type: FileOperation.ADD});
    expect(files).toContain(<DiffFile>{'name': 'docs/url.html', type: FileOperation.ADD});
  }));
});
