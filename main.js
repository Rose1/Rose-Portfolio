const downloadResumeButton = document.getElementById('download-resume');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const sendMessage = document.getElementById('sendMessage');


const downloadResume = () => {
    console.log('Presionaste el boton descargar')
    var file_spanish = './assets/Rosario_Ancco_CV.pdf';
    var file_english = './assets/Rosario Ancco Resume.pdf';
    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    const downloadLink2 = document.createElement('a');
    downloadLink.href = file_spanish;
    downloadLink2.href = file_english;
    downloadLink.download = 'RosarioAnccoCV.pdf'; // Specify the filename for download
    downloadLink.target = '_blank';
    downloadLink2.download = "Rosario_Ancco_Resume.pdf";
    downloadLink2.target = '_blank';

    // Append the anchor element to the body
    document.body.appendChild(downloadLink);
    // Trigger the click event of the anchor link
    downloadLink.click();
    // Remove the anchor element from the body
    document.body.removeChild(downloadLink);

    document.body.appendChild(downloadLink2);
    downloadLink2.click();
    document.body.removeChild(downloadLink2);


};



downloadResumeButton.addEventListener('click', downloadResume);