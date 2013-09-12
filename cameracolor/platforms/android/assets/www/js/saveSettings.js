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
    
    //var imageNumber = 0;   // picture source
    //var imagepathData = "Init phase.";   // picture source


function savingData() {
    sessionStorage.setItem('imageNumberData', imageNumber);
    sessionStorage.setItem('imagepathData', "file:///mnt/sdcard/currentColorTelling" + imageNumber + ".jpg");
    sessionStorage.setItem('imagepathPrefix', "file:///mnt/sdcard/currentColorTelling");
    sessionStorage.setItem('imagepathPostfix', ".jpg");
    
    sessionStorage.setItem('imageNumberDataGal', imageNumberGal);
    sessionStorage.setItem('imagepathDataGal', "file:///mnt/sdcard/currentColorTellingG" + imageNumberGal + ".jpg");
    sessionStorage.setItem('imagepathPrefixGal', "file:///mnt/sdcard/currentColorTellingG");
    sessionStorage.setItem('imagepathPostfixGal', ".jpg");
    //alert('Saving Data  ' + imageNumber);
    fadingNotification('Saving Camera Image Nr. ' + imageNumber + 'and Gallery Image Nr. ' + imageNumberGal, 1000);
}

function retrieveData() {
	var savedimageNumber = sessionStorage.getItem('imageNumberData');    
    var savedimagepath = sessionStorage.getItem('imagepathData');
    //alert('retrieved Data imagepathData is: ' + savedimagepath);
    var savedimagepathPrefix = sessionStorage.getItem('imagepathPrefix');
    var savedimagepathPostfix = sessionStorage.getItem('imagepathPostfix');
    imagepathPrefix = savedimagepathPrefix;
    imagepathPostfix = savedimagepathPostfix;
    imagepathData = savedimagepath;
    imageNumber = savedimageNumber;
    
    var savedimageNumberGal = sessionStorage.getItem('imageNumberDataGal');
    var savedimagepathGal = sessionStorage.getItem('imagepathDataGal');
    var savedimagepathPrefixGal = sessionStorage.getItem('imagepathPrefixGal');
    var savedimagepathPostfixGal = sessionStorage.getItem('imagepathPostfixGal');
    imagepathPrefixGal = savedimagepathPrefixGal;
    imagepathPostfixGal = savedimagepathPostfixGal;
    imagepathDataGal = savedimagepathGal;
    imageNumberGal = savedimageNumberGal;
    
    //alert('retrieved Data imageNumber is: ' + savedimageNumber);
    fadingNotification('retrieved Camera image Number is: ' + savedimageNumber + 'retrieved Gallery image Number is: ' + savedimageNumberGal, 2000);
}

function increaseImageNumber() {
    imageNumber = (imageNumber *1) + 1.0;
}

function decreaseImageNumber() {
    imageNumber = (imageNumber *1) - 1.0;
}

function increaseImageNumberGal() {
    imageNumberGal = (imageNumberGal *1) + 1.0;
}

function decreaseImageNumberGal() {
    imageNumberGal = (imageNumberGal *1) - 1.0;
}