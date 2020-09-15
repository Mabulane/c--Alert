
const signUp =document.querySelector('#signup-form');
const signIn =document.querySelector('#signin-form');
const logUserOut =document.querySelector('#log-user-out');


signUp.addEventListener('submit',(e)=>{
    e.preventDefault();
//get input variable 
    const email = signUp['user-email'].value;
    const pass= signUp['user-password'].value;

    auth.createUserWithEmailAndPassword(email,pass).then(cred=>{
       // console.log(cred.user);
        document.location.href="system.html";
        signUp.reset();
    });
});

signIn.addEventListener('submit',(e)=>{
    e.preventDefault();
//get input variable 
    const email = signUp['user-email'].value;
    const pass= signUp['user-password'].value; 
    auth.signinUserWithEmailAndPassword(email,pass).then(cred=>{
       // console.log(cred.user);
        document.location.href="index.html";
        signUp.reset();
    }); 
});
logUserOut.querySelector('click',(e)=>{
    e.preventDefault();

    auth.signOut().then(()=>{
        document.location.href="index.html";
    });

});
