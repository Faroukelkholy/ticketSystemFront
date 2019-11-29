import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

export class SocketService {
    private url = 'http://localhost:3000';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

    public sendMessage(topic,message) {
      this.socket.emit(topic, message);
  }

  public getMessages = (topic) => {
      return Observable.create((observer) => {
          this.socket.on(topic, (message) => {
              observer.next(message);
          });
      });
  }
}
