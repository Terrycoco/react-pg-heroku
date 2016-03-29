import pg from 'pg';
import config from 'config';

describe ('DB Test', () => {
  const conString = "postgres://" + config.get('db.user')
  + ":" + config.get('db.pass')
  + "@" + config.get('db.host')
  + "/" + config.get('db.name');

  describe('Test the connection to the DB', () =>{
    it('should connect to the DB', (done) => {
      pg.connect(conString, (err, client, db_done) => {
        if (err) {
          assert.equal("can-connect", "did-not-connect");
        }
        else {
          assert.equal("can-connect", "can-connect");
        }
        db_done(done());
      });
    });



  });
});
