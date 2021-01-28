class Question {

    constructor() {
      this.title = createElement('h2')
      this.input1 = createInput("Enter your Name here");
      this.input2 = createInput("Enter the correct option No.");
      this.button = createButton('Sumbit');
      this.question = createElement('h3');
      this.option1 = createElement('h3');
      this.option2 = createElement('h3');
      this.option3 = createElement('h3');
      this.option4 = createElement('h3');
    }
    hide(){
      this.button.hide();
      this.input1.hide();
      this.input2.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("My Quiz Game");
      this.title.position(350, 0);
      this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");
      this.option1.html("1: Everyone");
      this.option2.html("2: Envelope");
      this.option3.html("3: Estimate");
      this.option4.html("4: Example");
      this.input1.position(150,230);
      this.input2.position(350,230);
      this.button.position(200,270);
      this.question.position(150,80);
      this.option1.position(150,100);
      this.option2.position(150,120);
      this.option3 .position(150,140);
      this.option4.position(150,160);

      this.button.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
  
    }
  }