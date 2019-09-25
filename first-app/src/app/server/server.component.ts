import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 52;
  serverStatus: string = 'running';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'running' : 'disconnected';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'running' ? 'dodgerblue' : 'pink';
  }

  isRunning() {
    return this.serverStatus === 'running'; 
  }
}
