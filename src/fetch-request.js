export default function search(searchTerm) {
  const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCfpcPtX2aFu_GcQJ1UIOWB8yYhZYoZY1E&type=video&part=snippet&maxResults=15';

  return fetch(`${url}&q=${searchTerm}`)
    .then((response) => {
      if (response.status !== 200) {
        return (`Looks like there was a problem. Status Code: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      let idVideo = data.items.map(items => items.id.videoId);
      idVideo = idVideo.join(',');
      const PageToken = data.nextPageToken;
      localStorage.setItem('pageToken', `${PageToken}`);
      return fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCfpcPtX2aFu_GcQJ1UIOWB8yYhZYoZY1E&id=${idVideo}&part=snippet,statistics`);
    })
    .then(resp => resp.json())
    .then(data => data.items)
    .catch(err => (err));
}
