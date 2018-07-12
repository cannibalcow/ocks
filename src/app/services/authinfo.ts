export class AuthInfo {

    constructor(public uid: string, public displayName?: string, public photoURL?: string) {
    }

    isLoggedIn() {
        return !!this.uid;
    }
}