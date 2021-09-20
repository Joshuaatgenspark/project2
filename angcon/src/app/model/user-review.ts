
export class UserReview{
    username = localStorage.getItem('username');
    title = localStorage.getItem('gameName');
    review: string;

    constructor(username: string, title: string, review: string){
        this.username = username;
        this.title= title;
        this.review = review;
    }

    
}