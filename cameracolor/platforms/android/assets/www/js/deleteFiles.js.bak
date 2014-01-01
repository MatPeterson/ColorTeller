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

var fileNameI = "";
var folderNameI = "";

function deleteFileInRoot(fileName) {
    //alert('Deleting file in root directory named: ' + fileName);
    fadingNotification('Deleting file in root directory named: ' + fileName, 3000);
    fileNameI = fileName;  
    askForFileAccessDFR();  
}

function deleteFileInDirectory(fileName, folderName) {
    //alert('Deleting file in root directory named: ' + fileName); 
    fileNameI = fileName;
    folderNameI = folderName; 
    askForFileAccessDFD();  
}

    //askForFileAccess deleteFileInRoot
    function askForFileAccessDFR() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, delfail);
    }

    function gotFS(fileSystem) {
        fileSystem.root.getFile(fileNameI, {create: false, exclusive: true}, deleteEntry, delfail);
    }

    function deleteEntry(fileEntry) {
        fileEntry.remove(gotFileWriter, delfail);
    }

    function gotFileWriter(writer) {
            console.log(fileNameI + " removed.");
            //alert(fileNameI + ' removed. '); 
            fadingNotification(fileNameI + ' removed. ', 3000);  
                }

    function delfail(error) {
        console.log('deleteFileInRoot failed with error: ' + error.code);
        //alert('Delete failed with error: ' + error.code); 
        fadingNotification('Delete failed with error: ' + error.code + ', File named ' + fileNameI, 3000);
    }


