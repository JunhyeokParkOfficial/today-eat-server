export class StoreSearchDTO{
    id;
    name;
    category;
    time;
    score;
    reviewCount;
    imageUrl;
    distance;

    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.category = props.category;
        this.imageUrl = props.imageUrl;
        this.time = props.time;
        this.score = props.score;
        this.reviewCount = props.reviewCount;
        this.distance = props.distance;
    }
}