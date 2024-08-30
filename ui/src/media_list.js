function MediaList(){

    this.mediaList = [{'name':'abc news','query':'abc-news'},
               {'name':'abc news (au)','query':'abc-news-au'},
               {'name':'aftenposten','query':'aftenposten'},
               {'name':'al jazeera english','query':'al-jazeera-english'},
               {'name':'ansa.it','query':'ansa'},
               {'name':'argaam','query':'argaam'},
               {'name':'ars technica','query':'ars-technica'},
               {'name':'ary news','query':'ary-news'},
               {'name':'associated press','query':'associated-press'},
               {'name':'australian financial review','query':'australian-financial-review'},
               {'name':'axios','query':'axios'},
               {'name':'bbc news','query':'bbc-news'},
               {'name':'bbc sport','query':'bbc-sport'},
               {'name':'bild','query':'bild'},
               {'name':'blasting news (br)','query':'blasting-news-br'},
               {'name':'bleacher report','query':'bleacher-report'},
               {'name':'bloomberg','query':'bloomberg'},
               {'name':'breitbart news','query':'breitbart-news'},
               {'name':'business insider','query':'business-insider'},
               {'name':'business insider (uk)','query':'business-insider-uk'},
               {'name':'buzzfeed','query':'buzzfeed'},
               {'name':'cbc news','query':'cbc-news'},
               {'name':'cbs news','query':'cbs-news'},
               {'name':'cnbc','query':'cnbc'},
               {'name':'cnn','query':'cnn'},
               {'name':'cnn spanish','query':'cnn-es'},
               {'name':'crypto coins news','query':'crypto-coins-news'},
               {'name':'daily mail','query':'daily-mail'},
               {'name':'der tagesspiegel','query':'der-tagesspiegel'},
               {'name':'die zeit','query':'die-zeit'},
               {'name':'el mundo','query':'el-mundo'},
               {'name':'engadget','query':'engadget'},
               {'name':'entertainment weekly','query':'entertainment-weekly'},
               {'name':'espn','query':'espn'},
               {'name':'espn cric info','query':'espn-cric-info'},
               {'name':'financial post','query':'financial-post'},
               {'name':'financial times','query':'financial-times'},
               {'name':'focus','query':'focus'},
               {'name':'football italia','query':'football-italia'},
               {'name':'fortune','query':'fortune'},
               {'name':'fourfourtwo','query':'four-four-two'},
               {'name':'fox news','query':'fox-news'},
               {'name':'fox sports','query':'fox-sports'},
               {'name':'globo','query':'globo'},
               {'name':'google news','query':'google-news'},
               {'name':'google news (argentina)','query':'google-news-ar'},
               {'name':'google news (australia)','query':'google-news-au'},
               {'name':'google news (brasil)','query':'google-news-br'},
               {'name':'google news (canada)','query':'google-news-ca'},
               {'name':'google news (france)','query':'google-news-fr'},
               {'name':'google news (india)','query':'google-news-in'},
               {'name':'google news (israel)','query':'google-news-is'},
               {'name':'google news (italy)','query':'google-news-it'},
               {'name':'google news (russia)','query':'google-news-ru'},
               {'name':'google news (saudi arabia)','query':'google-news-sa'},
               {'name':'google news (uk)','query':'google-news-uk'},
               {'name':'goteborgs-posten','query':'goteborgs-posten'},
               {'name':'gruenderszene','query':'gruenderszene'},
               {'name':'hacker news','query':'hacker-news'},
               {'name':'handelsblatt','query':'handelsblatt'},
               {'name':'ign','query':'ign'},
               {'name':'il sole 24 ore','query':'il-sole-24-ore'},
               {'name':'independent','query':'independent'},
               {'name':'infobae','query':'infobae'},
               {'name':'infomoney','query':'info-money'},
               {'name':'la gaceta','query':'la-gaceta'},
               {'name':'la nacion','query':'la-nacion'},
               {'name':'la repubblica','query':'la-repubblica'},
               {'name':'le monde','query':'le-monde'},
               {'name':'lenta','query':'lenta'},
               {'name':'l\'equipe','query':'lequipe'},
               {'name':'les echos','query':'les-echos'},
               {'name':'liberation','query':'liberation'},
               {'name':'marca','query':'marca'},
               {'name':'mashable','query':'mashable'},
               {'name':'medical news today','query':'medical-news-today'},
               {'name':'metro','query':'metro'},
               {'name':'mirror','query':'mirror'},
               {'name':'msnbc','query':'msnbc'},
               {'name':'mtv news','query':'mtv-news'},
               {'name':'mtv news (uk)','query':'mtv-news-uk'},
               {'name':'national geographic','query':'national-geographic'},
               {'name':'national review','query':'national-review'},
               {'name':'nbc news','query':'nbc-news'},
               {'name':'news24','query':'news24'},
               {'name':'new scientist','query':'new-scientist'},
               {'name':'news.com.au','query':'news-com-au'},
               {'name':'newsweek','query':'newsweek'},
               {'name':'new york magazine','query':'new-york-magazine'},
               {'name':'next big future','query':'next-big-future'},
               {'name':'nfl news','query':'nfl-news'},
               {'name':'nhl news','query':'nhl-news'},
               {'name':'nrk','query':'nrk'},
               {'name':'politico','query':'politico'},
               {'name':'polygon','query':'polygon'},
               {'name':'rbc','query':'rbc'},
               {'name':'recode','query':'recode'},
               {'name':'reddit /r/all','query':'reddit-r-all'},
               {'name':'reuters','query':'reuters'},
               {'name':'rt','query':'rt'},
               {'name':'rte','query':'rte'},
               {'name':'rtl nieuws','query':'rtl-nieuws'},
               {'name':'sabq','query':'sabq'},
               {'name':'spiegel online','query':'spiegel-online'},
               {'name':'svenska dagbladet','query':'svenska-dagbladet'},
               {'name':'t3n','query':'t3n'},
               {'name':'talksport','query':'talksport'},
               {'name':'techcrunch','query':'techcrunch'},
               {'name':'techcrunch cn','query':'techcrunch-cn'},
               {'name':'techradar','query':'techradar'},
               {'name':'the american conservative','query':'the-american-conservative'},
               {'name':'the economist','query':'the-economist'},
               {'name':'the globe and mail','query':'the-globe-and-mail'},
               {'name':'the guardian (au)','query':'the-guardian-au'},
               {'name':'the guardian (uk)','query':'the-guardian-uk'},
               {'name':'the hill','query':'the-hill'},
               {'name':'the hindu','query':'the-hindu'},
               {'name':'the huffington post','query':'the-huffington-post'},
               {'name':'the irish times','query':'the-irish-times'},
               {'name':'the jerusalem post','query':'the-jerusalem-post'},
               {'name':'the lad bible','query':'the-lad-bible'},
               {'name':'the new york times','query':'the-new-york-times'},
               {'name':'the next web','query':'the-next-web'},
               {'name':'the sport bible','query':'the-sport-bible'}, 
               {'name':'the telegraph','query':'the-telegraph'},
               {'name':'the times of india','query':'the-times-of-india'},
               {'name':'the verge','query':'the-verge'},
               {'name':'the wall street journal','query':'the-wall-street-journal'},
               {'name':'the washington post','query':'the-washington-post'},
               {'name':'the washington times','query':'the-washington-times'},
               {'name':'time','query':'time'},
               {'name':'usa today','query':'usa-today'},
               {'name':'vice news','query':'vice-news'},
               {'name':'wired','query':'wired'},
               {'name':'wired (de)','query':'wired-de'},
               {'name':'wirtschafts woche','query':'wirtschafts-woche'},
               {'name':'xinhua net','query':'xinhua-net'},
               {'name':'ynet','query':'ynet'},
                      ];
    //this.mediaMap={'abc news':'abc-news','abc news (au)':'abc-news-au','aftenposten':'aftenposten'};
    this.mediaMap = {'abc news':'abc-news',
               'abc news (au)':'abc-news-au',
               'aftenposten':'aftenposten',
               'al jazeera english':'al-jazeera-english',
               'ansa.it':'ansa',
               'argaam':'argaam',
               'ars technica':'ars-technica',
               'ary news':'ary-news',
               'associated press':'associated-press',
               'australian financial review':'australian-financial-review',
               'axios':'axios',
               'bbc news':'bbc-news',
               'bbc sport':'bbc-sport',
               'bild':'bild',
               'blasting news (br)':'blasting-news-br',
               'bleacher report':'bleacher-report',
               'bloomberg':'bloomberg',
               'breitbart news':'breitbart-news',
               'business insider':'business-insider',
               'business insider (uk)':'business-insider-uk',
               'buzzfeed':'buzzfeed',
               'cbc news':'cbc-news',
               'cbs news':'cbs-news',
               'cnbc':'cnbc',
               'cnn':'cnn',
               'cnn spanish':'cnn-es',
               'crypto coins news':'crypto-coins-news',
               'daily mail':'daily-mail',
               'der tagesspiegel':'der-tagesspiegel',
               'die zeit':'die-zeit',
                       'education':'education',
               'el mundo':'el-mundo',
               'engadget':'engadget',
                       'entertainment':'entertainment',
               'entertainment weekly':'entertainment-weekly',
               'espn':'espn',
               'espn cric info':'espn-cric-info',
               'financial post':'financial-post',
               'financial times':'financial-times',
               'focus':'focus',
               'football italia':'football-italia',
               'fortune':'fortune',
               'fourfourtwo':'four-four-two',
               'fox news':'fox-news',
               'fox sports':'fox-sports',
               'globo':'globo',
               'google news':'google-news',
               'google news (argentina)':'google-news-ar',
               'google news (australia)':'google-news-au',
               'google news (brasil)':'google-news-br',
               'google news (canada)':'google-news-ca',
               'google news (france)':'google-news-fr',
               'google news (india)':'google-news-in',
               'google news (israel)':'google-news-is',
               'google news (italy)':'google-news-it',
               'google news (russia)':'google-news-ru',
               'google news (saudi arabia)':'google-news-sa',
               'google news (uk)':'google-news-uk',
                       'gossip':'gossip',
               'goteborgs-posten':'goteborgs-posten',
               'gruenderszene':'gruenderszene',
               'hacker news':'hacker-news',
               'handelsblatt':'handelsblatt',
               'ign':'ign',
               'il sole 24 ore':'il-sole-24-ore',
               'independent':'independent',
               'infobae':'infobae',
               'infomoney':'info-money',
               'la gaceta':'la-gaceta',
               'la nacion':'la-nacion',
               'la repubblica':'la-repubblica',
               'le monde':'le-monde',
               'lenta':'lenta',
               'l\'equipe':'lequipe',
               'les echos':'les-echos',
               'liberation':'liberation',
               'marca':'marca',
               'mashable':'mashable',
               'medical news today':'medical-news-today',
               'metro':'metro',
               'mirror':'mirror',
               'msnbc':'msnbc',
               'mtv news':'mtv-news',
               'mtv news (uk)':'mtv-news-uk',
               'national geographic':'national-geographic',
               'national review':'national-review',
               'nbc news':'nbc-news',
               'news24':'news24',
               'new scientist':'new-scientist',
               'news.com.au':'news-com-au',
               'newsweek':'newsweek',
               'new york magazine':'new-york-magazine',
               'next big future':'next-big-future',
               'nfl news':'nfl-news',
               'nhl news':'nhl-news',
               'nrk':'nrk',
               'politico':'politico',
                       'politics':'politics',
               'polygon':'polygon',
               'rbc':'rbc',
               'recode':'recode',
               'reddit /r/all':'reddit-r-all',
               'reuters':'reuters',
               'rt':'rt',
               'rte':'rte',
               'rtl nieuws':'rtl-nieuws',
               'sabq':'sabq',
               'spiegel online':'spiegel-online',
                       'sports':'sports',
               'svenska dagbladet':'svenska-dagbladet',
               't3n':'t3n',
               'talksport':'talksport',
               'techcrunch':'techcrunch',
               'techcrunch cn':'techcrunch-cn',
               'techradar':'techradar',
               'the american conservative':'the-american-conservative',
               'the economist':'the-economist',
               'the globe and mail':'the-globe-and-mail',
               'the guardian (au)':'the-guardian-au',
               'the guardian (uk)':'the-guardian-uk',
               'the hill':'the-hill',
               'the hindu':'the-hindu',
               'the huffington post':'the-huffington-post',
               'the irish times':'the-irish-times',
               'the jerusalem post':'the-jerusalem-post',
               'the lad bible':'the-lad-bible',
               'the new york times':'the-new-york-times',
               'the next web':'the-next-web',
               'the sport bible':'the-sport-bible', 
               'the telegraph':'the-telegraph',
               'the times of india':'the-times-of-india',
               'the verge':'the-verge',
               'the wall street journal':'the-wall-street-journal',
               'the washington post':'the-washington-post',
               'the washington times':'the-washington-times',
               'time':'time',
               'usa today':'usa-today',
               'vice news':'vice-news',
               'wired':'wired',
               'wired (de)':'wired-de',
               'wirtschafts woche':'wirtschafts-woche',
               'xinhua net':'xinhua-net',
               'ynet':'ynet'
                      }
               
    this.categoryList = [{'name':'entertainment','query':'entertainment'},
               {'name':'politics','query':'politics'},
               {'name':'science','query':'science'},
                       {'name':'sports','query':'sports'},
                       {'name':'finance','query':'finance'},
                       {'name':'music','query':'music'},
                       {'name':'style','query':'style'},
                       {'name':'technology','query':'technology'}
               ]
  }
  export default MediaList;
  