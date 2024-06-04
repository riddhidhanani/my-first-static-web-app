document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const searchName = document.getElementById('searchInput').value.trim().toLowerCase();
    fetch('https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/14781546/4abc5084-1d60-4097-b2b6-16585a3f17a6/people.csv')
        .then(response => response.text())
        .then(data => {
            const csvData = d3.csvParse(data);
            const user = csvData.find(row => row.Name.toLowerCase() === searchName);
            if (user) {
                displayImage(user.Picture);
            } else {
                alert('User not found');
            }
        });
});

function displayImage(imagePath) {
    const userImage = document.getElementById('userImage');
    if (imagePath) {
        userImage.src = imagePath;
        userImage.style.display = 'block';
    } else {
        userImage.style.display = 'none';
        alert('No image available for this user');
    }
}