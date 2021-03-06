import NFS from './mod/nfs';
import DNS from './mod/dns';
import Auth from './mod/auth';
import * as client from './ffi/client.js';

export var setNetworkStateListener = client.setNetworkStateListener;
export var close = client.close;
export var restart = client.restart;
export var nfs = new NFS(client.send);
export var dns = new DNS(client.send);
export var auth = new Auth(client.send);
