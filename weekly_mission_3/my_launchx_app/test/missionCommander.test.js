
const MissionCommander = require('./../app/missionCommander');


describe("Unit Test for Mission Commander Class", () => {
    test('Test 1.- Create a mission commander  object', () => {
        
        // Here we can user the code as we want to use
        const myMissionCommander = new MissionCommander('Woopa')
        
        // This line is to validate the expected result 
        expect(myMissionCommander.name).toBe('Woopa');
    });
})