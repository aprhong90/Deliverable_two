let name = prompt ("Welcome to GC mini-golf! What is your name?");

let holes = prompt ("Hi, " + name + "! Would you like to play 3 or 6 holes?");

let total = 0;

for (let i = 1; i <= holes; i++) 
        {let putts = prompt ("How many putts for hole " + i + "?");
        let par = 3;
        total += putts - par;
        }


if (total > 0) {
    console.log ("Nice try, " + name + "... Your total par was: + " + total);
}
else if (total < 0) {
    console.log ("Great job, " + name + "! Your total par was: " + total );
}
else if (total = 0) {
    console.log ("Good game, " + name + "Your total par was: 0.");
}



