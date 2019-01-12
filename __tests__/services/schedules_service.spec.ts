
import * as Schedules from '../../services/SchedulesService';

describe('Test', () => {
  test('gets schedules to contain the salthill route ', () => {
      const salthill_schedule  = { route_id: 401, route_name: 'Salthill - Eyre Square', pdf_link : 'http://www.buseireann.ie/timetables/1425472464-401.pdf' };
      Schedules.getSchedules().then(
        (result/*Promise*/)=>{
        //Parse the JSON
        const schedules = JSON.parse(result['schedules'])
        
        //Given an Array of objects
        expect(typeof schedules.toBe(Array))

        //Then expect the details to match
        expect(schedules[0].route_id == salthill_schedule.route_id)
        expect(schedules[0].route_name == salthill_schedule.route_name)
        expect(schedules[0].pdf_link == salthill_schedule.pdf_link)
      })
      .catch(() =>{
        
      });
    
    });

  test('expect a clean execution ', () => {
    expect.assertions(0);
    Schedules.getSchedules();
  });
  
});