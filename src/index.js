fetch('https://api.themoviedb.org/3/trending/all/day?api_key=3284913a940180ec63ebc0044db949d5')
    .then(res => res.json())
    .then(console.log)
