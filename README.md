# Instagram Unfollow Script

## About
This Javascript snippet automatically unfollows everyone in your Instagram account. It is designed to be used in the Javascript browser console - just copy/paste it (while you are logged into your Instagram account - you have to be on the profile page) and that's it. The speed of the unfollow events is ~67 unfollows per hour.

## Usage
1. Log into your Instagram account
2. Go to your Profile page
3. Open the "Following" dialog (by clicking on the line that says "NNN following" - where "NNN" is the number of the people you are following at the moment)
4. Open browser's developer tools (hit F12 - for Google Chrome and Firefox) and click on the "Console" tab
5. Copy/paste this Javascript snippet to the "Console" dialog in the browser
6. That's it - the script should start unfollowing people one by one, slowly (~67 unfollows per hour)

## History
Instagram has a time-based limitation on follow/unfollow events. I was specifically interested in unfollow events and at the moment (2. February 2017.) it's ~70 unfollows per hour.
I created this script because my Instagram account was hacked and someone followed ~1400 people with it. Because of the time-based limitation stated above, it's really difficult to correct this issue by hand. Hence, I decided to automate the task using Javascript via browser's developer tools.

## Possible Issues
- The script assumes that the "Following" dialog has a class of a certain name (defined in the script as `fwDialogSelector`). That name might be unique on a per user basis - I'm not sure since I didn't have the time to test that. If the script is not doing anything then inspect the DOM tree and see if the "Following" DOM element has a sub-element with the specified class (this can be done quickly using the jQuery command in the "Console" window).
- The script also assumes that the "Unfollow" button has a class of a certain name (defined in the script as `fwButtonSelector`). The story is the same as in the previous case with `fwDialogSelector` (above).

## How It Works
The script first imports jQuery Javascript library by injecting the `<script>` DOM. It then waits for it to completely load and then it executes the `unfollow()` function.
The `unfollow()` function searches the DOM tree for "Unfollow" buttons and triggers `click` event on each of the buttons - once every ~6 seconds. After 13 clicks it pauses the execution for 10 minutes. It then repeats the whole process after the pause.
It will automatically scroll the "Following" modal in order to load more "Unfollow" buttons.
