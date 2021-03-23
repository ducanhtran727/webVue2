import HomePage from '../page/Home';
import NewsPage from '../page/New.vue';
import Contact from '../page/Contact.vue';
import Women from '../page/Women.vue';
import Men from '../page/Men.vue';
export const routes = [
    {path:"/", name: "homepage", component:HomePage },
    {path:"/news",name:"newspage" ,component:NewsPage},
    {path:"/contact",name:"contactpage" ,component:Contact},
    {path:"/women",name:"womenpage" ,component:Women},
    {path:"/women/:id",name:"womenpage" ,component:Women},
    {path:"/men",name:"menpage" ,component:Men},
    {path:"/men/:id",name:"menpage" ,component:Men},
] 


