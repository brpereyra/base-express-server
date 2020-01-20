const {server} = require('../app/utils/helpers/testServer')


describe('Test 1', () => {
    const req = server()
    it('should return status 200', (done) => {
        req.get('/').expect(200, done);
    });

    it('should return status 404', (done) => {
        req.get('/notfountpage').expect(404, done);
    });
})
