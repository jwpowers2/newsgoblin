import { Button } from "~/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "~/components/ui/sheet"
import { Link, useNavigate } from "@remix-run/react";
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "~/components/ui/navigation-menu"
import { SearchBar } from "~/components/SearchBar";
import { useState, useEffect } from "react";
import  Toaster  from "~/components/ui/toaster";
import { Combobox } from "./ComboBox";

export default function Component() {

  let [toastColor, setToastColor] = useState("")
  let navigate = useNavigate();
  const [queryString, setQueryString] = useState("")

  let mediaOutlets = [{'label':'abc news','value':'abc-news'},
    {'label':'abc news (au)','value':'abc-news-au'},
    {'label':'aftenposten','value':'aftenposten'},
    {'label':'al jazeera english','value':'al-jazeera-english'},
    {'label':'ansa.it','value':'ansa'},
    {'label':'argaam','value':'argaam'},
    {'label':'ars technica','value':'ars-technica'},
    {'label':'ary news','value':'ary-news'},
    {'label':'associated press','value':'associated-press'},
    {'label':'australian financial review','value':'australian-financial-review'},
    {'label':'axios','value':'axios'},
    {'label':'bbc news','value':'bbc-news'},
    {'label':'bbc sport','value':'bbc-sport'},
    {'label':'bild','value':'bild'},
    {'label':'blasting news (br)','value':'blasting-news-br'},
    {'label':'bleacher report','value':'bleacher-report'},
    {'label':'bloomberg','value':'bloomberg'},
    {'label':'breitbart news','value':'breitbart-news'},
    {'label':'business insider','value':'business-insider'},
    {'label':'business insider (uk)','value':'business-insider-uk'},
    {'label':'buzzfeed','value':'buzzfeed'},
    {'label':'cbc news','value':'cbc-news'},
    {'label':'cbs news','value':'cbs-news'},
    {'label':'cnbc','value':'cnbc'},
    {'label':'cnn','value':'cnn'},
    {'label':'cnn spanish','value':'cnn-es'},
    {'label':'crypto coins news','value':'crypto-coins-news'},
    {'label':'daily mail','value':'daily-mail'},
    {'label':'der tagesspiegel','value':'der-tagesspiegel'},
    {'label':'die zeit','value':'die-zeit'},
    {'label':'el mundo','value':'el-mundo'},
    {'label':'engadget','value':'engadget'},
    {'label':'entertainment weekly','value':'entertainment-weekly'},
    {'label':'espn','value':'espn'},
    {'label':'espn cric info','value':'espn-cric-info'},
    {'label':'financial post','value':'financial-post'},
    {'label':'financial times','value':'financial-times'},
    {'label':'focus','value':'focus'},
    {'label':'football italia','value':'football-italia'},
    {'label':'fortune','value':'fortune'},
    {'label':'fourfourtwo','value':'four-four-two'},
    {'label':'fox news','value':'fox-news'},
    {'label':'fox sports','value':'fox-sports'},
    {'label':'globo','value':'globo'},
    {'label':'google news','value':'google-news'},
    {'label':'google news (argentina)','value':'google-news-ar'},
    {'label':'google news (australia)','value':'google-news-au'},
    {'label':'google news (brasil)','value':'google-news-br'},
    {'label':'google news (canada)','value':'google-news-ca'},
    {'label':'google news (france)','value':'google-news-fr'},
    {'label':'google news (india)','value':'google-news-in'},
    {'label':'google news (israel)','value':'google-news-is'},
    {'label':'google news (italy)','value':'google-news-it'},
    {'label':'google news (russia)','value':'google-news-ru'},
    {'label':'google news (saudi arabia)','value':'google-news-sa'},
    {'label':'google news (uk)','value':'google-news-uk'},
    {'label':'goteborgs-posten','value':'goteborgs-posten'},
    {'label':'gruenderszene','value':'gruenderszene'},
    {'label':'hacker news','value':'hacker-news'},
    {'label':'handelsblatt','value':'handelsblatt'},
    {'label':'ign','value':'ign'},
    {'label':'il sole 24 ore','value':'il-sole-24-ore'},
    {'label':'independent','value':'independent'},
    {'label':'infobae','value':'infobae'},
    {'label':'infomoney','value':'info-money'},
    {'label':'la gaceta','value':'la-gaceta'},
    {'label':'la nacion','value':'la-nacion'},
    {'label':'la repubblica','value':'la-repubblica'},
    {'label':'le monde','value':'le-monde'},
    {'label':'lenta','value':'lenta'},
    {'label':'l\'equipe','value':'lequipe'},
    {'label':'les echos','value':'les-echos'},
    {'label':'liberation','value':'liberation'},
    {'label':'marca','value':'marca'},
    {'label':'mashable','value':'mashable'},
    {'label':'medical news today','value':'medical-news-today'},
    {'label':'metro','value':'metro'},
    {'label':'mirror','value':'mirror'},
    {'label':'msnbc','value':'msnbc'},
    {'label':'mtv news','value':'mtv-news'},
    {'label':'mtv news (uk)','value':'mtv-news-uk'},
    {'label':'national geographic','value':'national-geographic'},
    {'label':'national review','value':'national-review'},
    {'label':'nbc news','value':'nbc-news'},
    {'label':'news24','value':'news24'},
    {'label':'new scientist','value':'new-scientist'},
    {'label':'news.com.au','value':'news-com-au'},
    {'label':'newsweek','value':'newsweek'},
    {'label':'new york magazine','value':'new-york-magazine'},
    {'label':'next big future','value':'next-big-future'},
    {'label':'nfl news','value':'nfl-news'},
    {'label':'nhl news','value':'nhl-news'},
    {'label':'nrk','value':'nrk'},
    {'label':'politico','value':'politico'},
    {'label':'polygon','value':'polygon'},
    {'label':'rbc','value':'rbc'},
    {'label':'recode','value':'recode'},
    {'label':'reddit /r/all','value':'reddit-r-all'},
    {'label':'reuters','value':'reuters'},
    {'label':'rt','value':'rt'},
    {'label':'rte','value':'rte'},
    {'label':'rtl nieuws','value':'rtl-nieuws'},
    {'label':'sabq','value':'sabq'},
    {'label':'spiegel online','value':'spiegel-online'},
    {'label':'svenska dagbladet','value':'svenska-dagbladet'},
    {'label':'t3n','value':'t3n'},
    {'label':'talksport','value':'talksport'},
    {'label':'techcrunch','value':'techcrunch'},
    {'label':'techcrunch cn','value':'techcrunch-cn'},
    {'label':'techradar','value':'techradar'},
    {'label':'the american conservative','value':'the-american-conservative'},
    {'label':'the economist','value':'the-economist'},
    {'label':'the globe and mail','value':'the-globe-and-mail'},
    {'label':'the guardian (au)','value':'the-guardian-au'},
    {'label':'the guardian (uk)','value':'the-guardian-uk'},
    {'label':'the hill','value':'the-hill'},
    {'label':'the hindu','value':'the-hindu'},
    {'label':'the huffington post','value':'the-huffington-post'},
    {'label':'the irish times','value':'the-irish-times'},
    {'label':'the jerusalem post','value':'the-jerusalem-post'},
    {'label':'the lad bible','value':'the-lad-bible'},
    {'label':'the new york times','value':'the-new-york-times'},
    {'label':'the next web','value':'the-next-web'},
    {'label':'the sport bible','value':'the-sport-bible'}, 
    {'label':'the telegraph','value':'the-telegraph'},
    {'label':'the times of india','value':'the-times-of-india'},
    {'label':'the verge','value':'the-verge'},
    {'label':'the wall street journal','value':'the-wall-street-journal'},
    {'label':'the washington post','value':'the-washington-post'},
    {'label':'the washington times','value':'the-washington-times'},
    {'label':'time','value':'time'},
    {'label':'usa today','value':'usa-today'},
    {'label':'vice news','value':'vice-news'},
    {'label':'wired','value':'wired'},
    {'label':'wired (de)','value':'wired-de'},
    {'label':'wirtschafts woche','value':'wirtschafts-woche'},
    {'label':'xinhua net','value':'xinhua-net'},
    {'label':'ynet','value':'ynet'},
           ];

    const categoryList = [
            {'label':'entertainment','value':'entertainment'},
            {'label':'politics','value':'politics'},
            {'label':'science','value':'science'},
            {'label':'sports','value':'sports'},
            {'label':'finance','value':'finance'},
            {'label':'music','value':'music'},
            {'label':'style','value':'style'},
            {'label':'technology','value':'technology'},
            {'label': 'cryptocurrency','value':'cryptocurrency'},
            {'label':'artificial intelligence','value':'artificial intelligence'}
   ]

  const getToasterProp = (color:string):void => {
    setToastColor(color);
  }
  const changeQueryString = (query:string) => {
    setQueryString(query)
  }
  useEffect(()=>{
       
    if (queryString === ""){
      navigate(`/search/all`)
    } else {
      navigate(`/search/${queryString}`)
    }
    
  },[queryString])
  return (
    <header className="flex h-16 shrink-0 p-0 md:px-6 w-1/2 mx-auto mt-4">
      
        <div className="grid grid-cols-3">
          <div className="flex justify-center">
          <svg id="svg" height="70" width="70">
            <polygon points="10,0 60,0 60,40 50,40 40,40 40,30 30,30 30,20 20,20 20,10 10,10" style={{"fill":"green","stroke":"white","strokeWidth":5}}/>
            <polygon points="10,50 60,50 60,40 40,40 40,30 30,30 30,20 20,20 20,10 10,10" style={{"fill":"green","stroke":"white","strokeWidth":5}}>
              <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0" to="5" dur="0.2s" begin="0.2s" fill="freeze"/>
              <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="5" to="0" dur="0.1s" begin="0.5s" fill="freeze"/>
              <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0" to="5" dur="0.2s" begin="0.7s" fill="freeze"/>
              <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="5" to="0" dur="0.1s" begin="1s" fill="freeze"/>
            </polygon>
            <circle cx="30" cy="10" r="5" style={{"fill":"white","stroke":"black","strokeWidth":2}} />
            <circle cx="30" cy="10" r="2" style={{"fill":"black"}} />
            <polygon points="45,40 50,30 55,40" style={{"fill":"white"}}/>
          </svg>
       
          <Link
          className="group inline-flex w-max pt-4 justify-center rounded-md bg-white px-4  text-2xl font-medium transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          to="/"
          >
            newsgoblin
          </Link>
          </div>
          <div>
          
          <Combobox title="media outlets" func={changeQueryString} data={mediaOutlets}/>
        </div>
        <div>
          <Combobox title="news categories" func={changeQueryString} data={categoryList}/>
          </div>
      </div>

    </header>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ShirtIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5021 5.92225 12 1 3.49793 5.92225 12 10.8445 20.5021 5.92225ZM2.5 7.6555V17.5L11 22.4211V12.5765L2.5 7.6555ZM13 22.4211 21.5 17.5V7.6555L13 12.5765V22.4211Z"></path></svg>
  )
}
