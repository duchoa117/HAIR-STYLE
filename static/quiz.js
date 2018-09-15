$(document).ready(function (){
    let ques = document.getElementById('ques');
let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let result=document.getElementById('result')
ques.innerHTML = 'Would you consider your face to be longer than it is wide?';
a1.innerHTML='Think so...';
a2.innerHTML='Not really...';


a1.addEventListener("click", function(){
    ques.innerHTML = "Considerably?";
    a1.innerHTML = "Definitely";
    a2.innerHTML = "Enough to notice";
    a1.addEventListener("click", function(){
        result.innerHTML='Your face is oblong';
        a1.hidden= true;
        a2.hidden = true;
        ques.hidden=true;
        $('#result').attr('href','http://localhost:5000/face_detail/Longface') 
    })
        
    a2.addEventListener("click", function(){
        ques.innerHTML = "Is your jawline glenty rounded?";
        a1.innerHTML = "Yes";
        a2.innerHTML = "No";
        a1.addEventListener("click", function(){
            ques.innerHTML='Are your checkbones narrower than your forehead';
            a1.innerHTML= "Yes";
            a2.innerHTML= "No";
            ques.hidden=false;
            a1.hidden=false;
            a2.hidden=false;
            result.hidden=true;
            a1.addEventListener("click", function(){
                result.innerHTML = "Your face is heart";
                a1.hidden= true;
                a2.hidden = true;
                ques.hidden=true;
                result.hidden=false;
                $('#result').attr('href','http://localhost:5000/face_detail/Heartface')
            })
            a2.addEventListener("click", function(){
            result.innerHTML = "Your face is oval";
            a1.hidden= true;
            a2.hidden =true;
            ques.hidden=true;
            result.hidden=false;
            $('#result').attr('href','http://localhost:5000/face_detail/Ovalface') 

            })
        })
        a2.addEventListener("click", function(){
            ques.innerHTML='Are your checkbones pronounced';
            a1.innerHTML= 'yes';
            a2.innerHTML= 'no';
            a1.addEventListener("click", function(){
                result.innerHTML='Your face is diamond';
                a1.hidden= true;
                a2.hidden= true;
                ques.hidden=true;
                result.hidden=false;
                $('#result').attr('href','http://localhost:5000/face_detail/Diamondface')  

            })
            a2.addEventListener("click", function(){
                result.innerHTML='Your face is triangle';
                a1.hidden=true;
                a2.hidden=true;
                ques.hidden=true;
                result.hidden=false;
                $('#result').attr('href','http://localhost:5000/face_detail/Triangleface')
            })    
        })
    })        
})

a2.addEventListener("click", function(){
    ques.innerHTML = "Not even a little?";
    a1.innerHTML = "Enough to notice";
    a2.innerHTML = "Nope";
    a1.addEventListener("click", function(){
        ques.innerHTML = "Is your jawline glenty rounded?";
        a1.innerHTML = "Yes";
        a2.innerHTML = "No";
        a1.addEventListener("click", function(){
            ques.innerHTML='Are your checkbones narrower than your forehead';
            a1.innerHTML= "Yes";
            a2.innerHTML= "No";
            result.hidden=true;
            a1.hidden=false;
            a2.hidden=false;
            ques.hidden=false;
            a1.addEventListener("click", function(){
                result.innerHTML = "Your face is heart";
                a1.hidden = true;
                a2.hidden = true;
                ques.hidden=true;
                result.hidden=false;
                $('#result').attr('href','http://localhost:5000/face_detail/Heartface')
            })
            a2.addEventListener("click", function(){
            result.innerHTML = "Your face is oval";
            a1.hidden= true;
            a2.hidden =true;
            ques.hidden=true;
            result.hidden=false;
            $('#result').attr('href','http://localhost:5000/face_detail/Ovalface') 

            })
        })
        a2.addEventListener("click", function(){
            ques.innerHTML='Are your checkbones pronounced';
            a1.innerHTML= 'yes';
            a2.innerHTML= 'no';
            a1.addEventListener("click", function(){
                result.innerHTML='Your face is diamond';
                a1.hidden= true;
                a2.hidden= true;
                ques.hidden=true;
                result.hidden=false;
                $('#result').attr('href','http://localhost:5000/face_detail/Diamondface')  

            })
            a2.addEventListener("click", function(){
                result.innerHTML='Your face is triangle';
                a1.hidden=true;
                a2.hidden=true;
                ques.hidden=true;
                result.hidden=false;
                $('#result').attr('href','http://localhost:5000/face_detail/Triangleface')
            })    
        })
    })  
    a2.addEventListener("click", function(){
        ques.innerHTML="How's that jawline of yours?";
        a1.innerHTML= "Hard";
        a2.innerHTML= "Soft";
        a1.hidden=false;
        a2.hidden=false;
        result.hidden=true;
        ques.hidden=false;
        a1.addEventListener("click", function(){
            result.innerHTML = "Your face is square";
            a1.hidden = true;
            a2.hidden = true;
            ques.hidden=true;
            result.hidden=false;
            $('#result').attr('href','http://localhost:5000/face_detail/Squareface') 
        })
        a2.addEventListener("click", function(){
        result.innerHTML = "Your face is round";
        ques.hidden=true;
        a1.hidden= true;
        a2.hidden =true;
        result.hidden=false;
        $('#result').attr('href','http://localhost:5000/face_detail/Roundface')
        })
    })      
})

})
