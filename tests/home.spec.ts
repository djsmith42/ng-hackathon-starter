import Home from '../src/home.ts';

describe('Home Component', function () {
  let home;

  beforeEach(()=>{
      home = new home();
  });

  it('does stuff', function(){
    expect(home.name).toEqual('ng-hackathon');
  });
});
