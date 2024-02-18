
export const excerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key':'eb8efe9451msh8aabe56a5f5e5c3p1453b5jsn2c3a718732b9'
  }
};

export const youtubeOptions = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'eb8efe9451msh8aabe56a5f5e5c3p1453b5jsn2c3a718732b9'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}