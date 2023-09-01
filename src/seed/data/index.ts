import * as bcrypt from 'bcrypt';
import { SeedUser, SeedRol } from '../interfaces'
import { ValidRoles } from '../../common/models'

interface SeedData {
    admin: SeedUser,
    users: SeedUser[],
    roles: SeedRol[],
}


export const initialData: SeedData = {
    admin: {
        email: "admin@admin.com",
        fullName: "Admin",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    },
    users: [{
        email: "mdickman0@elegantthemes.com",
        fullName: "Mia Dickman",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "pcrooks1@go.com",
        fullName: "Pepito Crooks",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "xpignon2@barnesandnoble.com",
        fullName: "Xena Pignon",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "mpitman3@telegraph.co.uk",
        fullName: "Micah Pitman",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "imacaless4@hubpages.com",
        fullName: "Iggy MacAless",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "obraisher5@reddit.com",
        fullName: "Obidiah Braisher",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "pgeraldez6@mtv.com",
        fullName: "Pennie Geraldez",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "cratchford7@vimeo.com",
        fullName: "Caesar Ratchford",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "eocrevy8@yale.edu",
        fullName: "Edithe O'Crevy",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "nmeadus9@about.com",
        fullName: "Nora Meadus",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "wmckeachiea@imgur.com",
        fullName: "Wynne McKeachie",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "alewtonb@answers.com",
        fullName: "Abran Lewton",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "bridingc@apple.com",
        fullName: "Benito Riding",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "lfeenand@taobao.com",
        fullName: "Luella Feenan",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "cmurrume@imdb.com",
        fullName: "Conni Murrum",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "apothburyf@delicious.com",
        fullName: "Audrey Pothbury",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "ckitneyg@salon.com",
        fullName: "Clayton Kitney",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "icorbitth@newyorker.com",
        fullName: "Ivy Corbitt",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "jfawthropi@fotki.com",
        fullName: "Jakie Fawthrop",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "rjanej@intel.com",
        fullName: "Rory Jane",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "rgatcliffk@google.cn",
        fullName: "Reba Gatcliff",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "bcalverdl@xing.com",
        fullName: "Bird Calverd",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "bbottrillm@sohu.com",
        fullName: "Brady Bottrill",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "chehirn@walmart.com",
        fullName: "Colette Hehir",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "hciseco@is.gd",
        fullName: "Hart Cisec",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "rjearyp@nasa.gov",
        fullName: "Rog Jeary",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "hworboyq@about.me",
        fullName: "Hort Worboy",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "aloyr@blogger.com",
        fullName: "Ari Loy",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "pmacdiarmonds@a8.net",
        fullName: "Penny MacDiarmond",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "lscardt@123-reg.co.uk",
        fullName: "Lurleen Scard",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "amiereu@wunderground.com",
        fullName: "Archibold Miere",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "fcathrov@ucoz.ru",
        fullName: "Francyne Cathro",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "rfatharlyw@ehow.com",
        fullName: "Ranice Fatharly",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "dmargerisonx@macromedia.com",
        fullName: "Dean Margerison",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "tpillery@blinklist.com",
        fullName: "Tabitha Piller",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "celhamz@is.gd",
        fullName: "Caryl Elham",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "hkocher10@globo.com",
        fullName: "Hedwig Kocher",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "vbumphrey11@baidu.com",
        fullName: "Valentin Bumphrey",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "rabotson12@zimbio.com",
        fullName: "Radcliffe Abotson",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "epauncefort13@domainmarket.com",
        fullName: "Eldridge Pauncefort",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "wtrainor14@auda.org.au",
        fullName: "Wallis Trainor",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "cblick15@tuttocitta.it",
        fullName: "Cordelie Blick",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "vgoodread16@thetimes.co.uk",
        fullName: "Vonni Goodread",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "cgilphillan17@disqus.com",
        fullName: "Clementia Gilphillan",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "aluc18@nymag.com",
        fullName: "Amitie Luc",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "sclyant19@dot.gov",
        fullName: "Sansone Clyant",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "agawthrope1a@intel.com",
        fullName: "Arlyne Gawthrope",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "mbrotherheed1b@prnewswire.com",
        fullName: "Mohandas Brotherheed",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "mpays1c@phoca.cz",
        fullName: "Mandi Pays",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "habdee1d@youtu.be",
        fullName: "Hilary Abdee",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "abattlestone1e@hibu.com",
        fullName: "Ange Battlestone",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "dfulcher1f@huffingtonpost.com",
        fullName: "Daryl Fulcher",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "mcount1g@exblog.jp",
        fullName: "Munmro Count",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "jconquest1h@godaddy.com",
        fullName: "Judd Conquest",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "lmimmack1i@delicious.com",
        fullName: "Lorrin Mimmack",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "dduckworth1j@wordpress.org",
        fullName: "Darrick Duckworth",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "cbedburrow1k@eventbrite.com",
        fullName: "Corrie Bedburrow",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "gcorish1l@cbc.ca",
        fullName: "Giffard Corish",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "hscalera1m@techcrunch.com",
        fullName: "Holden Scalera",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "ghaggas1n@altervista.org",
        fullName: "Giorgi Haggas",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "sstutard1o@bloomberg.com",
        fullName: "Stephan Stutard",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "blarive1p@ask.com",
        fullName: "Berny Larive",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "kganiclef1q@yelp.com",
        fullName: "Karilynn Ganiclef",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "ibockin1r@nbcnews.com",
        fullName: "Ingaborg Bockin",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "lmacguiness1s@dropbox.com",
        fullName: "Lorenza MacGuiness",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "edomek1t@engadget.com",
        fullName: "Em Domek",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "mclitheroe1u@twitpic.com",
        fullName: "Masha Clitheroe",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "sstolworthy1v@technorati.com",
        fullName: "Sher Stolworthy",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "cfonquernie1w@unc.edu",
        fullName: "Constantino Fonquernie",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "ghawlgarth1x@forbes.com",
        fullName: "Giorgi Hawlgarth",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "marpe1y@ovh.net",
        fullName: "Marje Arpe",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "mlammerich1z@paypal.com",
        fullName: "Magdalen Lammerich",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "tison20@godaddy.com",
        fullName: "Tracey Ison",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "aanglim21@cocolog-nifty.com",
        fullName: "Adara Anglim",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "iadolfson22@pbs.org",
        fullName: "Irena Adolfson",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "bwoolley23@so-net.ne.jp",
        fullName: "Blakelee Woolley",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "ovolleth24@networksolutions.com",
        fullName: "Orson Volleth",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "agadsby25@nps.gov",
        fullName: "Antonin Gadsby",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "kdeshon26@slashdot.org",
        fullName: "Kriste Deshon",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "sstill27@nyu.edu",
        fullName: "Sylas Still",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "aleblanc28@cloudflare.com",
        fullName: "Ami Leblanc",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "ffoucher29@bigcartel.com",
        fullName: "Fredelia Foucher",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "ethyng2a@php.net",
        fullName: "Ely Thyng",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "mgrotty2b@ask.com",
        fullName: "Moses Grotty",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "rcosgrave2c@bloomberg.com",
        fullName: "Rockwell Cosgrave",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "ieffnert2d@liveinternet.ru",
        fullName: "Ives Effnert",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "sboxall2e@answers.com",
        fullName: "Si Boxall",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "amarron2f@blogtalkradio.com",
        fullName: "Annemarie Marron",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "dstout2g@baidu.com",
        fullName: "Drake Stout",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "kcaddick2h@technorati.com",
        fullName: "Kerk Caddick",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "kgrahlmans2i@blogs.com",
        fullName: "Kelcy Grahlmans",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "smansuer2j@mail.ru",
        fullName: "Stuart Mansuer",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "jgoudy2k@narod.ru",
        fullName: "Joan Goudy",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "cprofit2l@xinhuanet.com",
        fullName: "Cheslie Profit",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "kraisher2m@ibm.com",
        fullName: "Kathie Raisher",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "bduce2n@upenn.edu",
        fullName: "Beverlee Duce",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "swestcar2o@bbb.org",
        fullName: "Stacey Westcar",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "jwrettum2p@harvard.edu",
        fullName: "Johny Wrettum",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "gstiegar2q@comcast.net",
        fullName: "Godfry Stiegar",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }, {
        email: "aquogan2r@goo.gl",
        fullName: "Aurthur Quogan",
        password: bcrypt.hashSync('Abc123', bcrypt.genSaltSync(10)),
        roles: [],
    }],

    roles: [
        {
            name: ValidRoles.admin,
        },
        {
            name: ValidRoles.user,
        },
    ]
}