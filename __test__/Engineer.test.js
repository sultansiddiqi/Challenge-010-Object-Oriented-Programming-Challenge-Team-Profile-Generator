const Engineer = require("../lib/Engineer");
 test('Can you set the GitHub via constructor',() => {
    const testGithub = 'githubuser'
    const e = new Engineer('tobias', 1, 'tobias@email.com', testGithub)
    expect(e.gitHub).toBe(testGithub);
 });
 test('getRole() returns Engineer', () =>{
     const testRole = 'Engineer'
     const e = new Engineer('tobias', 1, 'tobias@email.com', 'githubuser')
     expect(e.getRole()).toBe(testRole)
 });
 test('Get the githubusername via getHub()', () =>{
     const testUsername = 'githubusername'
     const e = new Engineer('tobias', 1, 'tobias@email.com', testUsername)
     expect(e.getGitHub()).toBe(testUsername)
 });