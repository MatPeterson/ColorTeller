//ColorTeller Version 061, Eng, Copyright 2013 Matthaeus Peterson, http://www.madcats.de
//ColorTeller licensed under GNU General Public License GPL v3
//Tells you the color of Parts of the image that was captured with the Camera or previous Images on the Phone. You point with your finger on the parts of the image to find out the exact color. 
//		This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.
// 
//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.
// 
//     You should have received a copy of the GNU General Public License
//     along with this program.  If not, see <http://www.gnu.org/licenses/>.
// 
//     Dieses Programm ist Freie Software: Sie können es unter den Bedingungen
//     der GNU General Public License, wie von der Free Software Foundation,
//     Version 3 der Lizenz oder (nach Ihrer Wahl) jeder neueren
//     veröffentlichten Version, weiterverbreiten und/oder modifizieren.
// 
//     Dieses Programm wird in der Hoffnung, dass es nützlich sein wird, aber
//     OHNE JEDE GEWÄHRLEISTUNG, bereitgestellt; sogar ohne die implizite
//     Gewährleistung der MARKTFÄHIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK.
//     Siehe die GNU General Public License für weitere Details.
// 
//     Sie sollten eine Kopie der GNU General Public License zusammen mit diesem
//     Programm erhalten haben. Wenn nicht, siehe <http://www.gnu.org/licenses/>.    
 
 
 
// Get hex Color text and display the Name of a color    
    function rgbToColorName(color) {
 //alert("Hello World");
 //var n_match  = ntc.name("#6195ED");
 var n_match  = ntc.name(color);
    n_rgb = n_match[0]; // This is the RGB value of the closest matching color
    n_name = n_match[1]; // This is the text string for the name of the match
    n_shade_rgb = n_match[2]; // This is the RGB value for the name of colors shade
    n_shade_name = n_match[3]; // This is the text string for the name of colors shade
    n_exactmatch = n_match[4]; // True if exact color match, False if close-match

	messageText = "The selected color is: " + n_name + ", a type of: " + n_shade_name + ". In RGB this color has the value: " + n_rgb;
    alert(messageText); 
    //alert("Color data is: " + n_match);
    //alert("Color is in text, exact name:  " + n_match[1]);
    //alert("Color is in text, name:  " + n_match[3]);
    //alert("n_match length is :  " + n_match.length);

}

//Needs jquerys/jquery-1.10.2.min.js
function fadingNotification(notificationText, msec) {
        console.log(notificationText);
        $('.messageBox').text(notificationText); // Change the Message of the Notification
        $('.messageBox').fadeIn('fast');
        setTimeout(function() {
			$('.messageBox').fadeOut('fast');
			}, msec); // <-- time in milliseconds
        //alert(notificationText);               
    }