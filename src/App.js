
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/chatfeed';
import LoginForm from './components/loginform';
import './App.css';

const projectID = '9668d2cb-5cfd-475a-ada3-921c64650033';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};


export default App;