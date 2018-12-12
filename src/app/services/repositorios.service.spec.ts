import { TestBed } from '@angular/core/testing';

import { RepositoriosService } from './repositorios.service';

describe('RepositoriosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoriosService = TestBed.get(RepositoriosService);
    expect(service).toBeTruthy();
  });
});
