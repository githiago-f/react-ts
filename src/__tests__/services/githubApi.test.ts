import { getRepos } from 'service/github.api';

test('', () => {
    const repos = getRepos();
    return repos.then(() => {
        expect('');
    });
});
