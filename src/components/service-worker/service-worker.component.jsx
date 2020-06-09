import React from 'react';
import Notification from 'react-web-notification';


export class ServiceWorker extends React.Component {
    constructor({updateFunc}) {
        super();
        this.state = {
          updateFunc: updateFunc,
          coffeeCount: 0
        }    
    }

    componentDidMount = () => {
      this.interval = setInterval(() => {
          this.state.updateFunc();
          this.createNotification();
      }, 20000); 
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
        console.log('Worker killed');
    }
    
    handlePermissionGranted(){
        console.log('Permission Granted');
        this.setState({
          ignore: false
        });
      }
      handlePermissionDenied(){
        console.log('Permission Denied');
        this.setState({
          ignore: true
        });
      }
      handleNotSupported(){
        console.log('Web Notification not Supported');
        this.setState({
          ignore: true
        });
      }
    
      handleNotificationOnClick(e, tag){
        console.log(e, 'Notification clicked tag:' + tag);
      }
    
      handleNotificationOnError(e, tag){
        console.log(e, 'Notification error tag:' + tag);
      }
    
      handleNotificationOnClose(e, tag){
        console.log(e, 'Notification closed tag:' + tag);
      }
    
      handleNotificationOnShow(e, tag){
        console.log(e, 'Notification shown tag:' + tag);
      }

      isReward() {
        this.setState({coffeeCount: this.state.coffeeCount + 1});
        if (this.state.coffeeCount == 4) {
              this.setState({coffeeCount: 0});
              return ("You have 4 points! Here's a coffee on us ☕") 
        } else {
              return (4 - (this.state.coffeeCount)) + " more coints to get a coffee on us ☕";
        }
      }
    
      createNotification() {

        if(this.state.ignore) {
          return;
        }
       const title = "You got 1 coint 🥳🎉";
       const body = this.isReward();
        
        const options = {
          lang: 'en',
          dir: 'ltr',
          body: body
        }
        this.setState({
          title: title,
          options: options
        });
    }   

    render() {
        return (
            <Notification
              ignore={this.state.ignore && this.state.title !== ''}
              notSupported={this.handleNotSupported.bind(this)}
              onPermissionGranted={this.handlePermissionGranted.bind(this)}
              onPermissionDenied={this.handlePermissionDenied.bind(this)}
              onShow={this.handleNotificationOnShow.bind(this)}
              onClick={this.handleNotificationOnClick.bind(this)}
              onClose={this.handleNotificationOnClose.bind(this)}
              onError={this.handleNotificationOnError.bind(this)}
              timeout={20000}
              title={this.state.title}
              options={this.state.options}
            />
        );
    }
}