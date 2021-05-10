class Security {

    constructor(){

        this.access1 = createInput("Name")
        this.access1.position(50,400);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(50,420);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Name")
        this.access2.position(350,400);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(350,420);
        this.button2.style('background', 'lightgrey');


        this.access3 = createInput("Name")
        this.access3.position(900,400);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(900,420);
        this.button3.style('background', 'lightgrey');   

        this.title1 = createElement('h3');
        this.title1.html("Arjun is a big fan of cricket.");
        this.title1.position(450, 50);
        this.title2 = createElement('h3');
        this.title2.html("A month before he had participated in lucky draw competition which he won.");
        this.title2.position(250, 100);
        this.title3 = createElement('h3');
        this.title3.html("Now by winning the competition he can get a chance to meet the Indian cricket team online.");
        this.title3.position(210, 150);
        this.title4 = createElement('h3');
        this.title4.html("But for that he has to give the correct answers of three cricket based questions so that he can meet the players.");
        this.title4.position(210, 200);
        this.title5 = createElement('h3');
        this.title5.html("Help Arjun to give the answers of these three questions.");
        this.title5.position(350, 250);

        this.title6 = createElement('h3');
        this.title6.html("Hint : Captain of the Indian team");
        this.title6.position(50, 350);
        this.title7 = createElement('h3');
        this.title7.html("Hint : Helped India win the 2011 World Cup under his captaincy");
        this.title7.position(350, 350);
        this.title8 = createElement('h3');
        this.title8.html("Hint : God of Indian Cricket");
        this.title8.position(900, 350);

        
//add code for creating and positioning the third input box and button
        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
//add code for what happens when the third button is pressed
        
this.button3.mousePressed(() => {
    if(system.authenticate(accessCode3,this.access3.value())){
        this.button3.hide();
        this.access3.hide();
        this.title1.hide();
        this.title2.hide();
        this.title3.hide();
        this.title4.hide();
        this.title5.hide();
        this.title6.hide();
        this.title7.hide();
        this.title8.hide();
        
        score++;
    }
});
    }
}