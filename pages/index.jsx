import Head from 'next/head'
import Card from '../components/Card'
import NavBar from '../components/NavBar'

const frontPageData = {
    "projects":{
        "cardTitle":"Projects",
        "cardImage":"./images/project1_edited.jpg",
        "cardText":"Lorem ipsum something I don't really remember how it goes but looks cool anways , ok tahnks!",
        "cardLink":"./projects",
    },
    "research":{
        "cardTitle":"Research",
        "cardImage":"./images/project3_edited.jpg",
        "cardText":"orem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa velit ducimus nostrum ad repellat totam libero eligendi fugiat officiis iure quam tenetur sed harum, consectetur quis magni porro placeat vero!lorem80 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, ipsa consectetur! Suscipit tenetur maiores incidunt voluptates laborum a aliquid tempore magnam velit praesentium error",
        "cardLink":"./research",
    },
    "about":{
        "cardTitle":"About Me",
        "cardImage":"./images/project2_edited.jpg",
        "cardText":"Lorem ipsum something I don't really remember how it goes but looks cool anways , ok tahnks!",
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
    <div className= "nav">
        <div>
            Projects
        </div>

        <div>
            Research
        </div>

        <div>
            About me
            
        </div>

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