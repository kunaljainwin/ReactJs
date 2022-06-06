import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from'./components/Banner.js';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">  
     <div>
       <Nav/>
       <Banner/>
       <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/> 
       <Row title="Trending today"fetchUrl={requests.fetchTrendingToday}/>   
        <Row title="Trending this week"fetchUrl={requests.fetchTrending}/>
        <Row title="Trending TV shows"fetchUrl={requests.fetchTvShows}/>
      
        <Row title="Action movies"fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy movies"fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Documentaries"fetchUrl={requests.fetchDocumantaries}/>
        {/* <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
        <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
        <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
        <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
        <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
        <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
        <Row title="Trending Now"fetchUrl={requests.fetchTrending}/> */}
     </div>

    </div>
  );
}

export default App;
