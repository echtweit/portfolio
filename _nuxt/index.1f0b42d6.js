import{_ as h}from"./nuxt-link.ce081d11.js";import{_ as p,c as m,a as r,d as s,t as _,b as u,w as c,o as f,p as g,e as b}from"./entry.bceb78e8.js";const k=["2+2=22","1234abc","Acrobat Reader","Ad Radicem","Admin123","Extraterrestial","And Mac","Ækspert","Bear","Bunny","Camel","Clown","Developer","Dolphin","Donkey","Dominatrix","Fairy","Feline","Force Unwrapper","Födli","Elephant","Mediocre","Excuser","Fridolin","Ryan Gosling","Destroyer","Carbonara","Is It Clientside?","Grand Master","Global Elitist","Topmodel","Survivor","Peach","Popeˡ","alert(1)","Warlock","Barbarian","Druid","Nat 20","Level 12","Kaleidoscope","Default Cube","Influencer","ATP","Chai Wallah","Punkah Wallah","とても良い","ゴールデンボーイ","Joulupukki","GPU Accelerator","Wizard In Your Area","idk ...","Python","Puppeteer","Cookie","Doggo","Bumper","Hobo","Drifter","Looking Good Bruv","TikToker","Calamity","Roadman","Queen","Spinner","Colonel (AI)","Russel Crowe","Netscaper","Johnny","Agent","Willy Nelson","Aristocrat","Loofa","Enjoyer","Sprayer","And Bedroom DJ","Baba","Freundschaftsbeziehung","Guybrush","Piratos","Buccaneer","And Club Mate","HTML to Canvas!","Autoplays Unmuted","Popunder","Obfuscator","Assembler","Vanilla Flavour","Fuzzer","Like Lego","Ballmer Peaker","Lover","Selenium Bot","Autobot","Whatever","Gang","Goblin","MSA-Key Proprietor","Interrail ticket scalper","Guru","Hunter12","Idiot Savant","Excavator","Inquisitor","Jakal","Jesus","Kanelsnegl","Krokodil","Laundromat","Loader","Meatball","Spaghetti","CSR Forger","Injector","Traktor","GPT Pair Programmer","Is Not Real","X Originator","Is it even Reactive?","Vueur","WTF/h","This . This .","Polyfiller","IE11 Mourner","Can I User","Sans Head","Canard","And Backend?","Admiral","Bonanza",":nth-of-type(odd)","*:not(div)","Sudoku","Piñata","For Vision Pro","On Apple Watch","3D Transform on Safari","Contortionist","Design from Indesign","Light Theme User","Scrolljacker","Dreamweaver","PEZ Dispenser","•ᴗ•","(¬_¬ )","ʕ ꈍᴥꈍʔ","(੭ '^')੭ ♡","◕_◕","🍆","🐌","Bloater","Lighthouse","Matrose","Lemur","With Tables","Smoothie","Moroder","Ninjago","Null","Onion","Künstler","Koder","XSS Creator","Philosopher","Pogostick","Pokémon","Polizei","Poodle","Potato","Kanzler","Hefe","Fefe","Jefe","Fata Morgana","Lijer","Minkukel","Slons","Helaas Pindakaas","Prince Light","Vaskebjørn","Grævling","Smørrebrød","Fluffer","Pindsvin","Wordlist","of MF DOOM","Familliar","Skeletor","XOR","Impossible II",'target="_blank"',"Qwerty","Samurai X","Saucier","Bundesrat","Seeder","Servetrice","Emir","Twinkie","Undefiner","Κεφτεδάνθρωπος","Μάλκα","Πατάτα","Anarchist"];const y={data(){return{words:k,currentIndex:0,currentWord:"",typing:!1,speed:50}},mounted(){this.startTypingEffect()},methods:{startTypingEffect(){let o=[];const l=()=>Math.floor(Math.random()*this.words.length),d=a=>{let e=0;const i=a.length,n=()=>{e<i?(this.currentWord+=a.charAt(e),e++,setTimeout(n,this.speed)):(this.typing=!1,setTimeout(this.displayNextWord,2e3))};n()};this.displayNextWord=()=>{this.currentWord="";let a,e;do a=l(),e=this.words[a];while(o.includes(e));o.push(e);const i=40;o.length>i&&o.shift(),this.typing=!0,d(e)},this.displayNextWord()}}},t=o=>(g("data-v-988b1370"),o=o(),b(),o),P=t(()=>r("br",null,null,-1)),S=t(()=>r("p",null,"Welcome to my rag-tag portfolio site",-1)),v=t(()=>r("br",null,null,-1)),I=t(()=>r("a",{href:"mailto:precht.jakob@gmail.com"},"Contact me",-1)),W=t(()=>r("br",null,null,-1)),A=t(()=>r("br",null,null,-1)),x=t(()=>r("br",null,null,-1));function C(o,l,d,a,e,i){const n=h;return f(),m("div",null,[r("h1",null,[s(" Jakob Precht"),P,s(" Frontend "+_(e.currentWord),1)]),S,v,I,W,u(n,{to:"/about"},{default:c(()=>[s("Learn more about me")]),_:1}),A,u(n,{to:"/about"},{default:c(()=>[s("See projects i have worked on")]),_:1}),x])}const F=p(y,[["render",C],["__scopeId","data-v-988b1370"]]);export{F as default};
