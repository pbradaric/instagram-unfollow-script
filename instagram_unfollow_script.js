var ufwTotalCounter = 0;
var ufwCounter = 0;
var maxUfwsPerBatch = 13;
var fwDialogSelector = "._4gt3b";
var fwButtonSelector = "._cx1ua button:contains('Following')";
var delayBetweenUfwClicks = 4000;
var delayRandomness = 4000;
var delayBetweenUfwBatches = 600000;

var script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js";
document.getElementsByTagName('body')[0].appendChild(script);

function unfollow() {
    var delay = 5000;
    if (ufwCounter < maxUfwsPerBatch) {
        if (jQuery(fwButtonSelector).length) {
            jQuery(jQuery(fwButtonSelector)[0]).click();
            ufwCounter++;
            ufwTotalCounter++;
            console.log("Unfollowed " + ufwTotalCounter + " person(s)");
        } else {
            jQuery(fwDialogSelector).scrollTop(100000000);
            console.log("No more 'Follow' buttons. Scrolling down.");
        }
        delay = Math.random() * delayRandomness + delayBetweenUfwClicks;
    } else {
        ufwCounter = 0;
        delay = delayBetweenUfwBatches;
        console.log("Pausing with execution for " + delay/1000 + " seconds...");
    }
    setTimeout(function() {
        unfollow();
    }, delay);
}

function waitForjQuery(callback)
{
    if ( !window.jQuery ) {
        setTimeout(function() {
            waitForjQuery(callback);
        }, 50);
    } else {
        callback();
    }
}

waitForjQuery(function() {
    if (!jQuery(fwDialogSelector).length) {
        alert("Open the 'Following' dialog!");
    }
    unfollow();
});