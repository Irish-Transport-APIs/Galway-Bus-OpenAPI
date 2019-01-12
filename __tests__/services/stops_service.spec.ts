import * as Stops from '../../services/stopsService';

describe('Test Stops Service ', async () => {
    test('gets stops', () => {
        console.log("Starting")
        expect.assertions(0);
        const stops = Stops.getAllStops()
        .catch((err)=> {
            console.log("Encountered an error querying endpoint for Stops." +err)
        });
        
    });
    /*TODO: This test will need updating to perhaps check for a specific type of failure*/
    test('expect the getAllStops to fail', () => {
    expect.assertions(1);
    return expect(Stops.getAllStops()).rejects.toMatch('Got an error');
    });

});