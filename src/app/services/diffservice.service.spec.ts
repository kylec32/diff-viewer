import { TestBed, inject } from '@angular/core/testing';

import { DiffserviceService } from './diffservice.service';
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
    var files = service.getFiles(mockData.main);

    expect(files.length).toBe(12);
    expect(files).toContain('test/line-by-line-tests.js');
    expect(files).toContain('README.md');
    expect(files).toContain('scripts/hulk.js');
    expect(files).toContain('src/diff2html.js');
    expect(files).toContain('src/file-list-printer.js');
    expect(files).toContain('src/hoganjs-utils.js');
    expect(files).toContain('src/html-printer.js');
    expect(files).toContain('src/line-by-line-printer.js');
    expect(files).toContain('src/side-by-side-printer.js');
    expect(files).toContain('test/file-list-printer-tests.js');
    expect(files).toContain('test/hogan-cache-tests.js');
    expect(files).toContain('test/line-by-line-tests.js');
  }));

  it('should get correct titles: with added file', inject([DiffserviceService], (service: DiffserviceService) => {
    var files = service.getFiles(mockData.bigAddRemove);

    expect(files.length).toBe(6);
    expect(files).toContain('.eslintignore');
    expect(files).toContain('docs/demo.html');
    expect(files).toContain('docs/index.html');
    expect(files).toContain('docs/main.css');
    expect(files).toContain('docs/main.min.css');
    expect(files).toContain('docs/url.html');
  }));
});
