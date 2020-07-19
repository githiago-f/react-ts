import { getRepos } from 'service/github.api';

test('The repos should not return any object that have no language', () => {
    const repos = getRepos();
    return repos.then(res => {
        for(const item of res) {
            expect(item.language).not.toEqual(null);
        }
    });
});
