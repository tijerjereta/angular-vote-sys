import { Component } from '@angular/core';

import { Article } from './Article';

@Component({
    selector: 'votes-app',
    templateUrl: './votes.component.html',
    styleUrls: ['./votes.component.css']
})
export class VotesApp{
    title: string = "Votes App";
    articles: Article[];

    constructor(){
        this.articles = [
            new Article('Angular', 'http://angular.io', 30),
            new Article('Diego Rivas Developer', 'http://diegorivasdev.com', 20),
            new Article('Birralandia', 'http://birralandia.com', 0),
            new Article('South View', 'http://southviewconsultores.com', 10)
        ];
    }

    addArticle(
        title: HTMLInputElement, 
        link: HTMLInputElement
    ):boolean{
        //console.log(`Article Added ${title.value}, link ${link.value}`);
        this.articles.push(
            new Article(title.value, link.value)
        );
        title.value = '';
        link.value = '';
        return false;
    
    }
    sortedArticle(): Article[]{
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}