import Home from '../pages/Home';
import PastTalks from '../pages/PastTalks';
import Speak from '../pages/Speak';
import Host from '../pages/Host';
import CodeOfConduct from '../pages/CodeOfConduct';

export default {
    pages: [
        {name: 'Home', path: '/', component: Home},
        {name: 'Speak', path: '/speak', component: Speak},
        {name: 'Host', path: '/host', component: Host},
        {name: 'Past Talks', path: '/past-talks', component: PastTalks},
        {name: 'Code of Conduct', path: '/code-of-conduct', component: CodeOfConduct},
      ]
}