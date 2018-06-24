import { FilterJobs} from './filter-jobs.pipe';

describe('FilterJobs', () => {
  it('create an instance', () => {
    const pipe = new FilterJobs();
    expect(pipe).toBeTruthy();
  });
});
