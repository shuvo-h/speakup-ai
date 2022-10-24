export const downloadBlobToAudio = async(dataURLfile,fileName="audio") =>{
    // convert the fileURLData to blob
    const blobData = await (await fetch(dataURLfile)).blob();
    // download the file
    const aElement = document.createElement('a');
    aElement.setAttribute('download', fileName);
    const href = URL.createObjectURL(blobData);
    aElement.href = href;
    aElement.setAttribute('target', '_blank');
    aElement.click();
    URL.revokeObjectURL(href);
}

