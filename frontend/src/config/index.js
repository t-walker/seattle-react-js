import Home from '../pages/Home';
import Events from '../pages/Events';
import Speak from '../pages/Speak';
import Host from '../pages/Host';
import PastEvents from '../pages/PastEvents';
import CodeOfConduct from '../pages/CodeOfConduct';

export default {
    pages: [
        {name: 'Home', path: '/', component: Home},
        {name: 'Events', path: '/events', component: Events},
        {name: 'Speak', path: '/speak', component: Speak},
        {name: 'Host', path: '/host', component: Host},
        {name: 'Past Events', path: '/past-events', component: PastEvents},
        {name: 'Code of Conduct', path: '/code-of-conduct', component: CodeOfConduct},
      ]
}