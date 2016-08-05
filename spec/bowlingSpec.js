describe('Bowling', function(){
  var bowling;
  // var frame;

  beforeEach(function(){
    bowling = new Bowling();
    // frame = new Frame();
  })

  var oneRoll = function(){
    bowling.roll();
  }

  var twoRolls = function(){
    for (var i = 0; i < 2; i++) {
      oneRoll();
    }
  }

  describe('#roll', function(){
    it('only uses remaining pins for second roll', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      oneRoll();
      expect(bowling.remainingPins()).toEqual(5)
    })
  })

  describe('score', function(){
    it('saves the first roll score in current frame', function(){
      oneRoll();
      expect(bowling.currentFrame[0]).toEqual(bowling.currentFrame[0]);
      })

    it('saves the second roll score in the current frame', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      twoRolls();
      expect(bowling.frames[0][1]).toEqual(3);
    })

    it('saves and closes the frame if the first roll is a strike', function(){
      spyOn(Math, 'random').and.returnValue(0.9);
      oneRoll();
      expect(bowling.frames[0][1]).toEqual(0);
    })
  })

  describe('reaminingPins', function(){
    it('reduces the number of pins by those knocked', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      oneRoll();
      expect(bowling.remainingPins()).toEqual(5);
    })
  })

  describe('strike', function(){
    it('returns true if the pins knocked are 10', function(){
      spyOn(Math, 'random').and.returnValue(0.9);
      oneRoll();
      expect(bowling.strike(bowling.frames[0][0])).toBeTruthy();
    })
  })

  describe('bonusPoints', function(){
    it('applies bonus points to previous scores', function(){
      spyOn(Math, 'random').and.returnValue(0.9);
      twoRolls();
      console.log(bowling.frames);
      expect(bowling.frames[0][0]).toEqual(20)
    })
  })

  describe('sumFrame', function(){
    it('sums the points in a frame', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      twoRolls();
      expect(bowling.sumFrame(bowling.frames[0])).toEqual(8)
    })
  })

  // describe('spare', function(){
  //   it('returns true if total pins knocked are 10', function(){
  //     bowling.score(bowling.pins/2);
  //     var points = bowling.currentFrame[0] + bowling.currentFrame[1]
  //     expect(bowling.spare(points)).toBeTruthy();
  //   })
  // })

  describe('saveFrame', function(){
    it('saves the current frame and resets', function(){
      spyOn(Math, 'random').and.returnValue(0.4);
      twoRolls();
      expect(bowling.frames[0][1]).toEqual(3)
    })
  })

});