# _Mr. Roboger's Neighborhood_

#### _A web application that programmatically generates and displays a response array from a user input number June 12,  2020_

#### By _**Ian Scott**_

## Description

_This is a simple web application that generates an array from 0 to the user-input number. Numbers containing "1", "2", or "3" are altered to display "Beep!" "Boop!" and "Won't you be my neighbor?" respectively, with reverse hierarchy. Additionally, numbers that are divisible by 3 will respond with the users name in the phrase: "Won't you be my neighbor NAME?"_

_This project was created to fulfill the requirements of an independent code review for Epicodus_

## Setup/Installation Requirements

_Open by downloading:_
1. Download this repository onto your computer by clicking the "clone or download button"
2. Double click index.html within your file explorer or GUI to open it in your web browser

_Open via Bash/GitBash;_
1. Clone this repository onto your computer:
https://github.com/Scott-Ian/Mr.-Roboger-s-Neighborhood.git
2. Navigate into the "Mr.-Roboger-s-Neighborhood" directory in Visual Studio Code, or your preferred text editor
3. Enter the command line prompt "code ." or your text editor's equivalent
4. Open index.html in Chrome or your preferred browser: "open index.html" or other equivalent


## Notes

_The "robogerResponse" function within scripts.js contains a line of commented out code. This code review was solved as intended using a loop. However, while keeping in the functioning loop code (function: populateResponseArray) I also rewrote that code with a recursive function (recursivePopulateResponseArray). The recursive code fulfills the same purpose, to populate an array with every number from 0 - user input, and saves a single line of code!_

## Known Bugs

_There are currently no known bugs._

## Support and contact details

_If you have any questions, run into any issues or bugs, or if you would like to contribute to this project, please contact me at: chesnekov@gmail.com_

## Technologies Used

_This project utilizes HTML, CSS, Bootstrap v.3.3.7, an jQuery. This project also utilizes form inputs, logical branching, array manipulation, looping, and a recursive functions._


## Specifications

| | Behavior  |  Sample Input | Sample Output   | Is Complete  |   
|---|---|---|---|---|
|1.|The program returns the number 0, and only the number 0, if the user inputs 0| 0  |  0 |True|   
|2.|The form will not accept non-number inputs| N/A  | N/A  |True|   
|3.|The form will not be submittable if the form is left blank| N/A  | N/A  |True| 
|4.|The program returns a range of numbers from 0 to the users inputted number| 7 | 0, 1, 2, 3, 4, 5, 6, 7  | True  |
|5.|In the range of numbers returned, the program replaces the number with "Beep!" if "1" appears in any digit of the number | 3 | 0, "Beep!", 2, 3  |  True |
|6.| In the range of numbers returned, the program replaces the number with "Boop!" if "2" appears in any digit of the number  | 3  | 0, "Beep!", "Boop!", 3  | True  |
|7.| In the range of numbers returned, the program replaces the number with "Won't you be my neighbor?" if "3" appears in any digit of the number  | 3  | 0, "Beep!", "Boop!", "Won't you be my neighbor?"  | True  |
|8.| For numbers containing "2" and "1", the number will be counted as only containing "2"  | 21  | [range from 0-20].... "Boop!"  | True  |
|9.| For numbers containing "3" and "2" or "3" and "1", the number will be counted as only containing "3"  | 32  | [range from 0-31].... "Won't you be my neighbor?"  | True  |
|10.| The form contains an option to return the output in reversed order (beginning with the largest number)  | 5  | 5, 4, "Won't you be my neighbor?" "Boop!", "Beep!", 0  | True  |
|11.| The form will also take in the users name. For numbers that are divisible by "3", including "3",  the users name will be added to the output  | 8, "Ian"  | 0, "Beep!", "Boop!", "Won't you be my neighbor Ian?", 4, 5, "Won't you be my neighbor Ian?", 7, 8  | True  |



### License

Copyright (c) 2020 **_Ian Scott_** This web project is licensed under the MIT license.