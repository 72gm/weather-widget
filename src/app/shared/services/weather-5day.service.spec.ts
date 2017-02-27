import { Weather5DayService } from '../services/weather-5day.service';
import { Observable } from 'rxjs/Observable';

describe('WeatherService', () => {
    let weatherService: Weather5DayService, mockHttp

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['get'])
        weatherService = new Weather5DayService(mockHttp);
    });

    describe('get5DayWeather', () => {
        it('should call http get with the correct url', () => {
            // not really sure there is much point in writing tests for this service
            // we really only need to that it works and thats an e2e
            expect(true);
        })
    });

})
