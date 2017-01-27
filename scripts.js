/**
 * Created by melanie.myers on 1/23/17.
 */



function nowPlaying(elmnt){

    console.log("clicked");
    console.log(elmnt['data-key']);
    elmnt.className = "playing";

}

const audio =  document.querySelector(`audio`)
