import Head from 'next/head'
import Card from '../components/Card'
import NavBar from '../components/NavBar'

const frontPageData = {
    "projects":{
        "cardTitle":"Projects",
        "cardImage":"./images/project1_edited.jpg",
        "cardText":"Check out my past projects, maybe there's something interesting.",
        "cardLink":"./projects",
    },
    "research":{
        "cardTitle":"Research",
        "cardImage":"./images/project3_edited.jpg",
        "cardText":" I'm currently researching fuzzy classifiers and evolutionary multiobjective optimization algorithms.",
        "cardLink":"./research",
    },
    "about":{
        "cardTitle":"About Me",
        "cardImage":"./images/project2_edited.jpg",
        "cardText": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem eius vero quaerat odio vel deserunt impedit saepe explicabo? Perferendis?",
        "cardLink":"./about",
    },
}

function HomePage() {
    return  <div>
    <Head>
    <title> Samir Fersobe</title>
    <meta name='keywords' content ='portfolio, web development, research, fuzzy classifiers '></meta>
    </Head>
    <body>
    <NavBar></NavBar>
    <div className="typewriter">
        <div className="fade">Hello my name is</div> 
        <div className ="center">Samir Fersobe</div>
    </div>


    <div className="card-display">
 
    <Card cardText ={frontPageData.projects.cardText} cardTitle = {frontPageData.projects.cardTitle} cardButtonLink = {frontPageData.projects.cardLink}  cardImage ={frontPageData.projects.cardImage}></Card>
    <Card cardText ={frontPageData.about.cardText} cardTitle = {frontPageData.about.cardTitle} cardButtonLink = {frontPageData.about.cardLink} cardImage ={frontPageData.about.cardImage}></Card>
    <Card cardText ={frontPageData.research.cardText} cardTitle = {frontPageData.research.cardTitle} cardButtonLink = {frontPageData.research.cardLink} cardImage ={frontPageData.research.cardImage}></Card>
    </div>

</body>
</div>
}
  
  export default HomePage