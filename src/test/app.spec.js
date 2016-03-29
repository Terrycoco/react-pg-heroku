import config from 'config';
import pg from 'pg';

describe('my app', () => {
  // describe('testing chai', () => {
  //   it('1 should equal 1', () => {
  //     assert.equal( 1,1);
  //   });
  // });

  const myApp = require('../../server/app.js');
  const port = 3000;
  const baseUrl = 'http://localhost:' + port;
  const conString = "postgres://" + config.get('db.user') + ":"
   + config.get('db.pass') + "@" + config.get('db.host')
   + "/" + config.get('db.name');

  before(function(done) {
    myApp.start(port, done);
  });

  after(function(done) {
    myApp.stop(done);
  })

  describe('when requested at /db', ()=> {
    it('should return 200', (done) =>  {
      request.get(baseUrl + '/db').end(function(err, res) {
        assert.equal(res.status, 200);
        done();
      });
    });

    it('should return test message where id=1', (done) => {
      request.get(baseUrl + '/db').end(function(err, res) {
        getMessage(1, function(msg){
          assert.equal(res.text, msg);
          done();
        });
      });
    });

  function getMessage(id, next) {
    pg.connect(conString, function(err, client, done){
      if (err) {
        next(undefined);
      }
      else {
        client.query("select * from test where id=" + id + ";", function( err, result ){
          if (err) {
            next(undefined);
          }
          else {
            next(result.rows[0].name);
          }
        });
      }
      done();
    });
  }
});

});
