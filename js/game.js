// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "Zap! You exist now. Wat do?",
            choices: [
                {
                    text: "do",
                    nextLevel: "field",
                },

                {
                    text: "not do",
                    nextLevel: "kweschiun",
                },
            ]
        },
        field: {
            message: "You see field. Wat do?",
            background_image: "field.jpg",
            choices: [
                {
                    text: "eat grass",
                    nextLevel: "ded",
                },
                
                {
                  text: "move along now",
                  nextLevel: "fork",
                },
            ]
        },
        
        kweschiun: {
            background_image: "blackscreen.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "To do or not to do? Dat iz da kweschiun.",
            choices: [
                {
                    text: "do",
                    nextLevel: "endf",
                },
                
                {
                 text: "still not do",
                 nextLevel: "ded",
                },
            ]
        },
        
        ded: {
          background_image: "fire.gif",
          music:"",
          message:"ded...not big soup rise",
          choices: [
              {
                  text: "back to da start",
                  nextLevel: "start",
              },
              ]
        },

        ded2: {
            background_image: "badend.jpg",
            music:"",
            message:"Too late! You iz ded now",
            choices: [
                 {
                     text:"back to da start",
                     nextLevel:"start",
                 },
                ]
            
        },
        
        fork: {
          music:"",
          message:"You seez a forksez on da road.Wat do? ",
          background_image:"forkindaroad.jpg",
          choices: [
              {
                text: "Go left",
                nextLevel: "endt",  
              },
              {
                  text: "Go right",
                  nextLevel: "ded",
              },
              ]
        },
        
        endf: {
        music:"",
        background_image:"endf.png",
        message:"Youz seez da end!",
        choices: [
        {
            text: "go to it",
            nextLevel: "start",
        },  
        {
            text: "run away",
            nextLevel: "ded2",
        },
            
            ]    
            
        },
    
        endt: {
        music:"",
        background_image:"goodend.jpeg",
        message: "You see the end!",
        choices: [
            {
                text:"go forth and prosper!",
                nextLevel:"final",
            },
            {
                text:"turn back",
                nextLevel:"ded",
            },
            ]
            
        },
    
        final: {
        music:"",
        background_image:"finished.jpg",
        message:"The end",
        choices:[
            {
            text:"Agin?",
            nextLevel:"start",
            },
            ]
        },
    }
};
