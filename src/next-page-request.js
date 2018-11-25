export default function searchNext(searchTerm) {
  const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCfpcPtX2aFu_GcQJ1UIOWB8yYhZYoZY1E&type=video&part=snippet&maxResults=15';
  const next = localStorage.getItem('pageToken');

  return fetch(`${url}&q=${searchTerm}&pageToken=${next}`)
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
      localStorage.removeItem('pageToken');
      localStorage.setItem('pageToken', `${PageToken}`);
      return fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCfpcPtX2aFu_GcQJ1UIOWB8yYhZYoZY1E&id=${idVideo}&part=snippet,statistics`);
    })
    .then(resp => resp.json())
    .then(data => data.items)
    .catch(err => (err));
}
